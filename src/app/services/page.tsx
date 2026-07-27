import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Services | Home Organizers Los Angeles',
  description:
    'Professional organizing services in Los Angeles: closet organization, home decluttering, garage organization, office setup, and more.',
};

const services = [
  'Closet Organization',
  'Home Decluttering',
  'Garage Organization',
  'Office Setup',
  'Kitchen Arrangement',
  'Bedroom Makeover',
  'Living Room Optimization',
  'Bathroom Streamlining',
  'Pantry Sorting',
  'Storage Solutions',
  'Moving Preparation',
  'Seasonal Organization',
  'Digital File Management',
  'Eco-Friendly Disposal',
  'Customized Organizing Plans',
];

const features = [
  {
    title: 'Personalized Plans',
    description:
      'We tailor our organizing strategies to fit your unique lifestyle and needs, ensuring optimal results.',
  },
  {
    title: 'Eco-Friendly Practices',
    description:
      'Our commitment to sustainability means using environmentally friendly methods and materials.',
  },
  {
    title: 'Professional Expertise',
    description:
      'Our team of skilled organizers brings years of experience and a keen eye for detail to every project.',
  },
  {
    title: 'Comprehensive Support',
    description:
      'From start to finish, we provide guidance and support to make your organizing journey seamless.',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Transform Your Space with Expert Organization"
        title="Home Organizers Los Angeles"
        subtext="Discover the art of decluttering and create a harmonious living environment with our professional organizing services."
        ctaText="Get Started Today"
        ctaHref="/contact-us"
        bgImage="/images/garage.jpg"
      />

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Organizing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white border border-gray-100 rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-6 flex items-center gap-4"
              >
                <span className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22577a"
                    strokeWidth="2.5"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h4 className="font-sans font-bold text-base">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="eyebrow text-center mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Key Features of Our Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <Image
              src="/images/features.jpg"
              alt="Professional organizer arranging a Los Angeles home"
              width={800}
              height={600}
              className="rounded-md shadow-[0px_40px_112px_-24px_rgba(0,0,0,0.12)] w-full h-auto"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-6">
                  <h4 className="font-sans font-bold text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <Image
              src="/images/closet.jpg"
              alt="Beautifully organized closet by Home Organizers Los Angeles"
              width={800}
              height={600}
              className="rounded-md shadow-[0px_40px_112px_-24px_rgba(0,0,0,0.12)] w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <h5 className="text-white/80 font-sans text-lg mb-8">
            Contact Us Today for a Free Consultation
          </h5>
          <Link href="/contact-us" className="btn-white">
            Get Organized Now
          </Link>
        </div>
      </section>
    </>
  );
}
