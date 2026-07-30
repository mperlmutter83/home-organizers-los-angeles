import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import BookingEmbed from '@/components/BookingEmbed';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Contact Us | Home Organizers Los Angeles',
  description:
    'Contact Home Organizers Los Angeles to schedule your consultation. Call (818) 748-2484 or book online today.',
};

const contactCards = [
  {
    label: 'Phone',
    value: '(818) 748-2484',
    href: 'tel:+18187482484',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22577a" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.8.7a2 2 0 011.7 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@homeorganizerslosangeles.com',
    href: 'mailto:info@homeorganizerslosangeles.com',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22577a" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '11642 Victory Blvd #160, North Hollywood, CA 91606',
    href: 'https://maps.google.com/?q=11642+Victory+Blvd+%23160+North+Hollywood+CA+91606',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22577a" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactUs() {
  return (
    <>
      <PageHero
        eyebrow="Transform Your Space with Expert Organization"
        title="Contact Home Organizers Los Angeles"
        subtext="Discover how our professional organizers can help you declutter and optimize your home or office. Get in touch today to start your journey towards a more organized life."
        ctaText="Get Started"
        ctaHref="#book"
        bgImage="/images/contact.jpg"
      />

      {/* Contact info cards */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="bg-white border border-gray-100 rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-8 text-center block hover:shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.25)] transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-mint/20 flex items-center justify-center mx-auto mb-4">
                {card.icon}
              </div>
              <h4 className="font-sans font-bold text-lg mb-2">{card.label}</h4>
              <p className="text-ink/70 text-sm">{card.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Schedule Your Organization Session
          </h2>
          <p className="text-ink/80 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to reclaim your space? We offer a free 15-minute
            consultation. Pick a time below to book an appointment with our
            expert organizers. Let us help you create a clutter-free
            environment that enhances your productivity and peace of mind.
          </p>
          <div className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-4 md:p-8">
            <BookingEmbed />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Common Questions About Our Services
          </h2>
          <p className="text-ink/70 text-center mb-12 max-w-2xl mx-auto">
            Find answers to the most frequently asked questions about our
            organizing services and booking process.
          </p>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Transform Your Space Today
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Ready to reclaim your space and bring order to your home or office?
            Contact us now to schedule a personalized consultation with our
            expert organizers. Let us help you create a clutter-free environment
            that enhances your lifestyle. Reach out today and take the first
            step towards a more organized life!
          </p>
          <Link href="#book" className="btn-white">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
