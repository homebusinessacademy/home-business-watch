import { NextRequest, NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

// IndexNow pushes URLs to Bing (and other participating engines) for near-instant
// crawling. Bing's index is what ChatGPT search cites, so new/updated pages
// should be pinged here right after every content deploy.
//
// Usage:
//   GET /api/indexnow?paths=/companies/foo,/scam/bar   — ping specific pages
//   GET /api/indexnow?all=1                            — ping every sitemap URL (initial seed / rare)
//
// The key is intentionally public: the IndexNow protocol verifies ownership by
// serving the key at /<key>.txt, so it is not a secret.
const INDEXNOW_KEY = 'd4ec1ee6b7bbed7a4376bf2722369b0dbdf94b28';
const HOST = 'www.homebusinesswatch.com';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paths = searchParams.get('paths');
  const all = searchParams.get('all');

  let urlList: string[];
  if (paths) {
    urlList = paths
      .split(',')
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `https://${HOST}${p.startsWith('/') ? p : `/${p}`}`);
  } else if (all) {
    urlList = sitemap().map((entry) => entry.url);
  } else {
    return NextResponse.json(
      { error: 'Pass ?paths=/a,/b to ping specific pages or ?all=1 for the full sitemap.' },
      { status: 400 }
    );
  }

  if (urlList.length === 0 || urlList.length > 10000) {
    return NextResponse.json(
      { error: `URL count must be 1-10000, got ${urlList.length}.` },
      { status: 400 }
    );
  }

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return NextResponse.json({
    submitted: urlList.length,
    indexNowStatus: response.status,
    ok: response.status === 200 || response.status === 202,
  });
}
