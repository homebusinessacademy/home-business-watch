export function EbookBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-300 rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4">
      <div className="text-4xl flex-shrink-0">📖</div>
      <div className="flex-1 text-center sm:text-left">
        <p className="font-bold text-gray-900 text-base mb-0.5">
          Before you read this — grab the free guide that shows you the fastest path to residual income.
        </p>
        <p className="text-gray-600 text-sm">
          <strong>The Residual Income Shortcut:</strong> How a 600-person MLM team got replaced by 24 customers.
        </p>
      </div>
      <a
        href="https://onlinegoldrush.com"
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors flex-shrink-0"
      >
        Get it Free →
      </a>
    </div>
  );
}
