import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Us | Home Organizers Los Angeles',
  description:
    'Home Organizers Los Angeles is dedicated to transforming cluttered spaces into organized havens with personalized organizing solutions.',
};

const accolades = [
  {
    year: '2021',
    title: 'Best Home Organization Service',
    description:
      'Recognized for outstanding service in home organization by the National Association of Professional Organizers.',
  },
  {
    year: '2020',
    title: 'Excellence in Customer Satisfaction',
    description:
      'Awarded for achieving the highest customer satisfaction ratings in the Los Angeles area.',
  },
  {
    year: '2019',
    title: 'Innovative Organizing Solutions',
    description:
      'Honored for introducing innovative solutions in the field of home and office organization.',
  },
];

export default function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="Transform Your Space with Ease"
        title="Home Organizers Los Angeles"
        subtext="Discover the art of decluttering and organizing with our expert team, dedicated to creating harmonious and functional spaces tailored to your lifestyle."
        ctaText="Learn More"
        ctaHref="/contact-us"
        bgImage="/images/office.jpg"
      />

      {/* Our Story and Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about-home.jpg"
              alt="Organized living space by Home Organizers Los Angeles"
              width={1080}
              height={720}
              className="rounded-md shadow-[0px_40px_112px_-24px_rgba(0,0,0,0.12)] w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story and Mission
            </h2>
            <p className="text-ink/80 leading-relaxed mb-5">
              Home Organizers Los Angeles is dedicated to transforming cluttered
              spaces into organized havens. Our mission is to enhance the
              quality of life for our clients by providing personalized
              organizing solutions that reflect their unique needs and
              preferences. We believe in the power of organization to bring
              peace and efficiency to everyday life. Our values are rooted in
              professionalism, integrity, and a commitment to excellence,
              ensuring that every project we undertake is completed with the
              utmost care and attention to detail.
            </p>
            <p className="text-ink/80 leading-relaxed">
              Founded on the principles of innovation and customer satisfaction,
              Home Organizers Los Angeles has been serving the community with
              passion and dedication. We strive to create environments that
              inspire and support our clients&apos; goals, whether it&apos;s a
              tidy closet, a streamlined office, or a clutter-free garage. Our
              team of skilled organizers is committed to delivering exceptional
              service and sustainable solutions that make a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Accolades */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Industry Accolades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accolades.map((award) => (
              <div
                key={award.year}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-8 text-center"
              >
                <p className="text-teal font-sans font-bold text-4xl mb-3">
                  {award.year}
                </p>
                <h4 className="font-sans font-bold text-lg mb-3">
                  {award.title}
                </h4>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-8">
            Transform Your Space Today!
          </h3>
          <Link href="/contact-us" className="btn-white">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
