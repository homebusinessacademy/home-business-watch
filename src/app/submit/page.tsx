'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubmitCompanyPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    companyCategory: '',
    submitterName: '',
    submitterEmail: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/submit-company', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-navy-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Submit a Company</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Submit a Company</h1>
          <p className="text-gray-300 max-w-2xl">
            Know a home business opportunity we should review? Submit it here and we&apos;ll add it to our list for evaluation.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Thanks for your submission!</h2>
              <p className="text-gray-600 mb-6">We&apos;ll review your submission and add it to our database if it meets our criteria.</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-700 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                    placeholder="e.g., Amway, Herbalife"
                  />
                </div>

                {/* Company Website */}
                <div>
                  <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Website
                  </label>
                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                    placeholder="https://example.com"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="companyCategory" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="companyCategory"
                    name="companyCategory"
                    value={formData.companyCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white"
                  >
                    <option value="">Select a category</option>
                    <option value="mlm">MLM</option>
                    <option value="affiliate">Affiliate Program</option>
                    <option value="direct_sales">Direct Sales</option>
                    <option value="other">Work From Home / Other</option>
                  </select>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 mb-4">Optional: Tell us about yourself</p>
                </div>

                {/* Your Name */}
                <div>
                  <label htmlFor="submitterName" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="submitterName"
                    name="submitterName"
                    value={formData.submitterName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="submitterEmail"
                    name="submitterEmail"
                    value={formData.submitterEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors resize-none"
                    placeholder="Anything else we should know about this company?"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Company'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
