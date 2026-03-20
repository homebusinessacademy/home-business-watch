'use client';

import { useState } from 'react';

const API_ENDPOINT = '/api/contact';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [reason, setReason] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          reason: formData.get('reason'),
          company: formData.get('company') || '',
          message: formData.get('message'),
        }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">Found an error? Suggest a company. Ask a question.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {status === 'success' ? (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-600">Thanks for reaching out. We typically respond within 1-2 business days.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-navy-600 hover:text-navy-800 font-medium underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What&apos;s this about? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="reason"
                    required
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  >
                    <option value="">Select a reason...</option>
                    <option value="Report inaccurate data">Report inaccurate data</option>
                    <option value="Suggest a missing company">Suggest a missing company</option>
                    <option value="General question">General question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  />
                </div>

                {/* Company (conditional) */}
                {(reason === 'Report inaccurate data' || reason === 'Suggest a missing company') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Amway, Herbalife..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={
                      reason === 'Report inaccurate data'
                        ? 'What is incorrect and what is the correct information? Include a source if you have one.'
                        : reason === 'Suggest a missing company'
                        ? 'Company name, website, and why you think it should be reviewed.'
                        : 'Your message...'
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-navy-800 hover:bg-navy-900 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
