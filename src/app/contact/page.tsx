import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Home Organizers Los Angeles. Call (818) 748-2484 or fill out our form to schedule your free consultation.',
};

export default function ContactPage() {
  const faqs = [
    { question: 'What areas do you service?', answer: 'We proudly offer our organizing services throughout the Los Angeles area, including surrounding suburbs.' },
    { question: 'How do I book a consultation?', answer: 'You can easily book a consultation by visiting our website and filling out the contact form, or by calling us directly.' },
    { question: 'What should I expect during the initial consultation?', answer: 'During the initial consultation, we will assess your space, discuss your needs, and develop a personalized organizing plan.' },
    { question: 'How long does an organizing session last?', answer: 'Organizing sessions typically last between 3 to 5 hours, depending on the size and scope of the project.' },
    { question: 'Do I need to be present during the organizing session?', answer: 'While your presence is not required, we recommend being available for questions and decisions during the process.' },
    { question: 'What types of spaces do you organize?', answer: 'We specialize in organizing closets, homes, garages, offices, and more to create functional and clutter-free environments.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-600 font-semibold mb-4">Transform Your Space with Expert Organization</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Home Organizers Los Angeles</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover how our professional organizers can help you declutter and optimize your home or office. Get in touch today to start your journey towards a more organized life.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <a href="tel:+18187482484" className="text-teal-600 hover:text-teal-700 text-lg">
                      (818) 748-2484
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@homeorganizerslosangeles.com" className="text-teal-600 hover:text-teal-700">
                      info@homeorganizerslosangeles.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">11642 Victory Blvd #160</p>
                    <p className="text-gray-600">North Hollywood, CA 91606</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-teal-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Areas</h3>
                <p className="text-gray-600">
                  We serve the entire Los Angeles area including North Hollywood, Studio City, Sherman Oaks, Encino, Burbank, Glendale, Pasadena, West Hollywood, Beverly Hills, Santa Monica, and more.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Organization Session</h2>
              <p className="text-gray-600 mb-6">
                Ready to reclaim your space? Fill out the form below to book an appointment with our expert organizers.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions About Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Space Today</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to reclaim your space and bring order to your home or office? Contact us now to schedule a personalized consultation with our expert organizers. Let us help you create a clutter-free environment that enhances your lifestyle.
          </p>
          <a
            href="tel:+18187482484"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Call (818) 748-2484
          </a>
        </div>
      </section>
    </div>
  );
}
