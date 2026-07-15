import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Home Organizers Los Angeles - our story, mission, and commitment to transforming cluttered spaces into organized havens.',
};

export default function AboutPage() {
  const awards = [
    { year: '2021', title: 'Best Home Organization Service', description: 'Recognized for outstanding service in home organization by the National Association of Professional Organizers.' },
    { year: '2020', title: 'Excellence in Customer Satisfaction', description: 'Awarded for achieving the highest customer satisfaction ratings in the Los Angeles area.' },
    { year: '2019', title: 'Innovative Organizing Solutions', description: 'Honored for introducing innovative solutions in the field of home and office organization.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-600 font-semibold mb-4">Transform Your Space with Ease</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Home Organizers Los Angeles</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the art of decluttering and organizing with our expert team, dedicated to creating harmonious and functional spaces tailored to your lifestyle.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story and Mission</h2>
              <p className="text-gray-600 mb-4">
                Home Organizers Los Angeles is dedicated to transforming cluttered spaces into organized havens. Our mission is to enhance the quality of life for our clients by providing personalized organizing solutions that reflect their unique needs and preferences.
              </p>
              <p className="text-gray-600 mb-4">
                We believe in the power of organization to bring peace and efficiency to everyday life. Our values are rooted in professionalism, integrity, and a commitment to excellence, ensuring that every project we undertake is completed with the utmost care and attention to detail.
              </p>
              <p className="text-gray-600">
                Founded on the principles of innovation and customer satisfaction, Home Organizers Los Angeles has been serving the community with passion and dedication. We strive to create environments that inspire and support our clients&apos; goals, whether it&apos;s a tidy closet, a streamlined office, or a clutter-free garage.
              </p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">✓</span>
                  <span className="text-gray-600">Personalized organizing solutions tailored to your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">✓</span>
                  <span className="text-gray-600">Eco-friendly practices using sustainable materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">✓</span>
                  <span className="text-gray-600">Professional team with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">✓</span>
                  <span className="text-gray-600">Comprehensive support from start to finish</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">✓</span>
                  <span className="text-gray-600">Systems designed for long-term maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Accolades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div key={award.year} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <span className="inline-block bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {award.year}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Space Today!</h2>
          <p className="text-teal-100 text-lg mb-8">
            Ready to experience the difference professional organization can make?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
