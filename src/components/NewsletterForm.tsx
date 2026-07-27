'use client';

import { useState, useRef } from 'react';

interface NewsletterFormProps {
  variant?: 'full' | 'emailOnly';
  onMint?: boolean;
}

/**
 * Newsletter signup matching the original Divi newsletter module.
 * Submits to /api/lead with the CRM spam gates (honeypot, elapsed_ms, submission_id).
 */
export default function NewsletterForm({ variant = 'full', onMint = false }: NewsletterFormProps) {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'newsletter',
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '' });
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <h3 className={`text-2xl font-bold ${onMint ? 'text-navy' : 'text-white'}`}>Success!</h3>
    );
  }

  const inputClass = onMint
    ? 'w-full px-4 py-3 bg-white/90 border border-white rounded-lg text-navy placeholder-navy/50 focus:ring-2 focus:ring-white outline-none'
    : 'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy focus:ring-2 focus:ring-teal outline-none';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — invisible to humans, passed through untouched */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      {variant === 'full' && (
        <>
          <p>
            <input
              type="text"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={inputClass}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={inputClass}
            />
          </p>
        </>
      )}
      <p>
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </p>
      <p>
        <input
          type="tel"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
        />
      </p>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-white disabled:opacity-60"
      >
        {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className={`text-sm ${onMint ? 'text-navy' : 'text-white'}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
