import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EbookBanner } from '@/components';
import { getScamBySlug, getAllScamSlugs } from '@/lib/scam-data';
import { getCompanyBySlug } from '@/lib/seed-data';
import { hasCompPlan } from '@/lib/compensation-plans';
import { hasPitfalls } from '@/lib/pitfalls';
import { hasPyramidSchemePage } from '@/lib/pyramid-scheme-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllScamSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getScamBySlug(slug);

  if (!data) {
    return {
      title: 'Page Not Found',
    };
  }

  // Create curiosity-driven description (150-160 chars max)
  const metaDescription = data.isActualScam
    ? `Is ${data.companyName} a scam? We examined the legal record and complaints. What we found confirms the worst fears.`
    : `Is ${data.companyName} a scam? Before you decide, read what we found in the complaints, lawsuits, and distributor agreement.`;

  return {
    title: `Is ${data.companyName} a Scam? The Honest Answer (${new Date().getFullYear()})`,
    description: metaDescription,
    openGraph: {
      title: `Is ${data.companyName} a Scam? The Honest Answer`,
      description: `We looked at actual complaints, legal records, and the business model. Here's what the evidence shows.`,
      type: 'article',
    },
    keywords: [
      `is ${data.companyName.toLowerCase()} a scam`,
      `${data.companyName.toLowerCase()} scam`,
      `${data.companyName.toLowerCase()} review`,
      `is ${data.companyName.toLowerCase()} legit`,
      `${data.companyName.toLowerCase()} complaints`,
      `${data.companyName.toLowerCase()} lawsuit`,
    ],
  };
}

export default async function ScamPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getScamBySlug(slug);

  if (!data) {
    notFound();
  }

  const company = getCompanyBySlug(slug);
  const isActualScam = data.isActualScam;

  // Build FAQ Schema
  const faqItems = [
    {
      '@type': 'Question',
      name: `Is ${data.companyName} a scam?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: data.directAnswer,
      },
    },
  ];

  if (!isActualScam) {
    faqItems.push(
      {
        '@type': 'Question',
        name: `Is ${data.companyName} legit?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, ${data.companyName} is a legitimate company that sells real products and operates legally. However, whether it is a good business opportunity depends on the economics of their compensation plan and your ability to build a customer base.`,
        },
      },
      {
        '@type': 'Question',
        name: `Has ${data.companyName} been sued?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.legalRecord,
        },
      },
      {
        '@type': 'Question',
        name: `What do ${data.companyName} distributors complain about?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.topComplaints.map((c) => c.complaint).join(' '),
        },
      }
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Is ${data.companyName} a Scam? The Honest Answer`,
    description: data.directAnswer,
    author: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };

  // Verdict badge colors
  const verdictColors = {
    legitimate_concern: 'bg-amber-100 text-amber-800 border-amber-200',
    business_model: 'bg-blue-100 text-blue-800 border-blue-200',
    exaggerated: 'bg-gray-100 text-gray-800 border-gray-200',
    fraud: 'bg-red-100 text-red-800 border-red-200',
  };

  const verdictLabels = {
    legitimate_concern: 'Legitimate Concern',
    business_model: 'Business Model Issue',
    exaggerated: 'Exaggerated',
    fraud: 'Red Flag',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/scam" className="hover:text-navy-600">Scam Reviews</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{data.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Is {data.companyName} a Scam?
            <br />
            <span className="text-gray-300">The Honest Answer</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            We looked at the actual complaints, the legal record, and the business model. Here is what the evidence shows.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* The Direct Answer Box */}
          <section className={`rounded-xl border-2 p-6 md:p-8 ${
            isActualScam
              ? 'bg-red-50 border-red-400'
              : 'bg-amber-50 border-amber-400'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-4xl font-bold ${isActualScam ? 'text-red-700' : 'text-emerald-700'}`}>
                {isActualScam ? 'Yes.' : 'No.'}
              </span>
              <span className={`text-xl ${isActualScam ? 'text-red-800' : 'text-gray-800'}`}>
                {data.companyName} is {isActualScam ? '' : 'not '}a scam{isActualScam ? '' : ' in the legal sense'}.
              </span>
            </div>
            <p className={`text-lg ${isActualScam ? 'text-red-900' : 'text-gray-800'}`}>
              {data.directAnswer}
            </p>
          </section>

          {/* What "Scam" Actually Means */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-amber-500">&#9888;</span> What &ldquo;Scam&rdquo; Actually Means
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                A scam, in the legal sense, means <strong>deliberate fraud</strong>: false promises made with no intention to deliver, money taken with no value provided, or outright deception about what you are buying.
              </p>
              <p className="text-gray-700 mb-4">
                Examples of actual scams: OneCoin (fake cryptocurrency, $4-25 billion stolen), BitConnect (Ponzi scheme with fake trading bots), or "work from home" schemes that take your money and disappear.
              </p>
              <p className="text-gray-600 italic">
                {isActualScam
                  ? `${data.companyName} fits this definition - there is no real product, and money from new participants funds returns to earlier ones.`
                  : `Most MLM complaints are about the business model being unfavorable, not criminal fraud. A bad business opportunity is not the same as a scam. ${data.companyName} sells real products and operates legally.`
                }
              </p>
            </div>
          </section>

          {/* What People Actually Complain About */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What People Actually Complain About
            </h2>
            <div className="space-y-4">
              {data.topComplaints.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <p className="text-gray-800 flex-1">{item.complaint}</p>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${verdictColors[item.verdict]}`}>
                      {verdictLabels[item.verdict]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {!isActualScam && hasPitfalls(slug) && (
              <div className="mt-4">
                <Link
                  href={`/pitfalls/${slug}`}
                  className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium"
                >
                  View Full Policy Pitfalls Report
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </section>

          {/* What the Legal Record Shows */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What the Legal Record Shows
            </h2>
            <div className={`rounded-lg p-6 ${
              isActualScam ? 'bg-red-50 border border-red-200' : 'bg-gray-50 border border-gray-200'
            }`}>
              <p className={`text-lg ${isActualScam ? 'text-red-900' : 'text-gray-800'}`}>
                {data.legalRecord}
              </p>
            </div>
          </section>

          {/* Red Flags vs Normal Business Complaints */}
          {!isActualScam && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Red Flags vs Normal Business Complaints
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <span>&#128680;</span> Actual Red Flags (Signs of Fraud)
                  </h3>
                  <ul className="space-y-2 text-red-900 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      No real product or service being sold
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Guaranteed returns promised for no work
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Anonymous founders or unverifiable company info
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Money comes only from recruiting others
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Unregistered with financial regulators
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span>&#9888;</span> Business Model Complaints (Not Fraud)
                  </h3>
                  <ul className="space-y-2 text-amber-900 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Low per-customer residual makes income difficult
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Monthly purchase requirements to stay qualified
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Upline income claims do not match typical results
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Products priced higher than retail alternatives
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">&#8226;</span>
                      Most participants earn little or nothing
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm italic">
                {data.companyName} complaints fall into the &ldquo;business model&rdquo; category, not fraud. They sell real products legally. Whether it is a good opportunity is a separate question.
              </p>
            </section>
          )}

          {/* Our Verdict */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Verdict</h2>
            <div className={`rounded-xl border-2 p-6 ${
              isActualScam
                ? 'bg-red-50 border-red-400'
                : 'bg-emerald-50 border-emerald-400'
            }`}>
              <p className={`text-lg ${isActualScam ? 'text-red-900' : 'text-emerald-900'}`}>
                {data.verdict}
              </p>
            </div>
          </section>

          {/* Related Links */}
          {!isActualScam && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company && (
                  <Link
                    href={`/companies/${slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{data.companyName} Review</h3>
                    <p className="text-sm text-gray-600">Full company review with pros, cons, and ratings.</p>
                  </Link>
                )}
                {hasCompPlan(slug) && (
                  <Link
                    href={`/compensation-plan/${slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{data.companyName} Comp Plan</h3>
                    <p className="text-sm text-gray-600">Per-customer residual, team size needed, and key gotchas.</p>
                  </Link>
                )}
                {hasPitfalls(slug) && (
                  <Link
                    href={`/pitfalls/${slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{data.companyName} Policy Pitfalls</h3>
                    <p className="text-sm text-gray-600">Contract fine print: non-competes, termination clauses, and more.</p>
                  </Link>
                )}
                {hasPyramidSchemePage(slug) && (
                  <Link
                    href={`/pyramid-scheme/${slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">Is {data.companyName} a Pyramid Scheme?</h3>
                    <p className="text-sm text-gray-600">The pyramid scheme question answered with actual definition.</p>
                  </Link>
                )}
              </div>
            </section>
          )}

          {/* For actual scams, show warning resources */}
          {isActualScam && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protect Yourself</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/pyramid-scheme"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">Pyramid Scheme Guide</h3>
                  <p className="text-sm text-gray-600">Learn to identify actual pyramid schemes vs legitimate MLMs.</p>
                </Link>
                <Link
                  href="/guides/mlm-compensation-flaws"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">7 MLM Compensation Flaws</h3>
                  <p className="text-sm text-gray-600">Understand the structural issues in network marketing.</p>
                </Link>
                <Link
                  href="/scam"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">All Scam Reviews</h3>
                  <p className="text-sm text-gray-600">Honest scam assessments for 22 companies.</p>
                </Link>
                <a
                  href="https://www.ftc.gov/business-guidance/resources/multi-level-marketing-businesses-guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">FTC MLM Guidance</h3>
                  <p className="text-sm text-gray-600">Official guidance from the Federal Trade Commission.</p>
                </a>
              </div>
            </section>
          )}

          {/* Ebook Banner */}
          <EbookBanner />

        </div>
      </div>
    </>
  );
}
