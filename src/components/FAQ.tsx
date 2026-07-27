'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What areas do you service?',
    answer:
      'We proudly offer our organizing services throughout the Los Angeles area, including surrounding suburbs.',
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'You can easily book a consultation by visiting our website and filling out the contact form, or by calling us directly.',
  },
  {
    question: 'What should I expect during the initial consultation?',
    answer:
      'During the initial consultation, we will assess your space, discuss your needs, and develop a personalized organizing plan.',
  },
  {
    question: 'How long does an organizing session last?',
    answer:
      'Organizing sessions typically last between 3 to 5 hours, depending on the size and scope of the project.',
  },
  {
    question: 'Do I need to be present during the organizing session?',
    answer:
      'While your presence is not required, we recommend being available for questions and decisions during the process.',
  },
  {
    question: 'What types of spaces do you organize?',
    answer:
      'We specialize in organizing closets, homes, garages, offices, and more to create functional and clutter-free environments.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={faq.question} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between text-left gap-4"
          >
            <h5 className="font-sans font-bold text-base md:text-lg">{faq.question}</h5>
            <span className="text-teal text-2xl font-sans shrink-0">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-ink/80 leading-relaxed">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
