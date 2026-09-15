'use client';

import { useEffect, useRef, useState } from 'react';

const PHONE_DISPLAY = '(818) 748-2484';
const PHONE_HREF = 'tel:+18187482484';

const EXPERIENCE_OPTIONS = [
  'No experience yet — willing to learn',
  'Less than 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
];

const inputClass =
  'w-full border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-mint';

export default function WorkForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    company_website: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  // Spam-gate values set on mount (not in useRef initializers — react-hooks/purity).
  const startedAt = useRef(0);
  const submissionId = useRef('');

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    if (!submissionId.current) submissionId.current = crypto.randomUUID();

    // Site's /api/lead contract expects firstName/lastName — split the single name field.
    const parts = formData.name.trim().split(/\s+/);
    const firstName = parts[0] || '';
    const lastName = parts.slice(1).join(' ') || firstName;

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          service: 'Looking for Work',
          message: `Service: Looking for Work | Experience: ${formData.experience || 'not specified'}. ${formData.message}`.trim(),
          company_website: formData.company_website,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - (startedAt.current || Date.now()),
        }),
      });

      if (response.ok) {
        // GA4/GTM conversion event — picked up by the site's gtag/dataLayer.
        const dlWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
        dlWindow.dataLayer = dlWindow.dataLayer ?? [];
        dlWindow.dataLayer.push({ event: 'generate_lead' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="text-3xl">🎉</p>
        <h3 className="mt-3 font-sans text-2xl font-bold text-navy">You&apos;re on the list!</h3>
        <p className="mt-3 text-ink">
          Thanks, {formData.name.split(' ')[0]}! Your details are in. Local businesses that are
          hiring will reach out to you directly.
        </p>
        <p className="mt-4 text-ink">
          Want to move faster?{' '}
          <a href={PHONE_HREF} className="font-bold text-teal underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
      <input
        type="text"
        id="company_website"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-px h-px opacity-0"
        aria-hidden="true"
        value={formData.company_website}
        onChange={(e) => updateField('company_website', e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-sans text-sm font-semibold mb-1 text-navy">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-sm font-semibold mb-1 text-navy">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-sm font-semibold mb-1 text-navy">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="experience" className="block font-sans text-sm font-semibold mb-1 text-navy">
          Experience
        </label>
        <select
          id="experience"
          value={formData.experience}
          onChange={(e) => updateField('experience', e.target.value)}
          className={inputClass}
        >
          <option value="">How much experience do you have?</option>
          {EXPERIENCE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm font-semibold mb-1 text-navy">
          Availability &amp; anything we should know
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="e.g. Available weekends, have my own transportation, looking for part-time…"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-teal w-full disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending…' : 'Find Work Near Me'}
      </button>

      {status === 'error' && (
        <p className="text-center font-sans font-medium text-red-600">
          Something went wrong. Please call us at{' '}
          <a href={PHONE_HREF} className="underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      )}
    </form>
  );
}
