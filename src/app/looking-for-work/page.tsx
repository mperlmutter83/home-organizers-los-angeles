import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

const PHONE_DISPLAY = '(818) 748-2484';
const PHONE_HREF = 'tel:+18187482484';

export const metadata: Metadata = {
  title: 'Looking for Work | Home Organizers Los Angeles',
  description:
    "Looking for home organizing work in Los Angeles? Local organizing businesses are hiring. Fill out the quick form and we'll connect you — or call (818) 748-2484.",
  alternates: { canonical: 'https://homeorganizerslosangeles.com/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local home organizing businesses that are actively hiring.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested businesses contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Home Organizers',
  'Organizing Assistants',
  'Decluttering Specialists',
  'Move/Unpacked Organizing',
  'Closet Organizing',
  'Garage & Storage Organizing',
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <p className="eyebrow text-mint">Looking for Work?</p>
          <h1 className="mt-3 font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Home Organizing Work in Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            Local home organizing businesses are growing and looking for dependable people. Tell
            us about yourself and we&apos;ll connect you with businesses that are hiring — free,
            fast, and no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work-form" className="btn-teal">
              Fill Out the Quick Form
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block rounded-full border-2 border-mint px-8 py-3 font-sans font-semibold text-mint hover:bg-mint/10 transition-colors"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-sans text-3xl font-bold text-navy text-center">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-3xl bg-gray-50 p-8 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 font-sans text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-ink">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-sans text-3xl font-bold text-navy text-center">
            The Kind of Work Available
          </h2>
          <p className="mt-4 text-center text-ink max-w-2xl mx-auto">
            Home organizing businesses across Los Angeles hire for a range of roles, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((s) => (
              <li
                key={s}
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-sans text-navy font-medium shadow-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="font-sans text-2xl font-bold text-navy text-center">
            Apply in 60 Seconds
          </h2>
          <p className="mt-2 text-center text-ink">
            Free and confidential — we&apos;ll only share your details with businesses that are
            hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-ink">
          Own a home organizing business and need reliable people?{' '}
          <a href={PHONE_HREF} className="font-bold text-teal underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </section>
    </>
  );
}
