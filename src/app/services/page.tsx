import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional home organization services in Los Angeles: closet organization, garage decluttering, kitchen arrangement, office setup, and more.',
};

export default function ServicesPage() {
  const services = [
    { name: 'Closet Organization', icon: '👔' },
    { name: 'Home Decluttering', icon: '🏠' },
    { name: 'Garage Organization', icon: '🚗' },
    { name: 'Office Setup', icon: '💼' },
    { name: 'Kitchen Arrangement', icon: '🍳' },
    { name: 'Bedroom Makeover', icon: '🛏️' },
    { name: 'Living Room Optimization', icon: '🛋️' },
    { name: 'Bathroom Streamlining', icon: '🚿' },
    { name: 'Pantry Sorting', icon: '🥫' },
    { name: 'Storage Solutions', icon: '📦' },
    { name: 'Moving Preparation', icon: '🚚' },
    { name: 'Seasonal Organization', icon: '🗓️' },
    { name: 'Digital File Management', icon: '💻' },
    { name: 'Eco-Friendly Disposal', icon: '♻️' },
    { name: 'Customized Organizing Plans', icon: '📋' },
  ];

  const features = [
    { title: 'Personalized Plans', description: 'We tailor our organizing strategies to fit your unique lifestyle and needs, ensuring optimal results.', icon: '📝' },
    { title: 'Eco-Friendly Practices', description: 'Our commitment to sustainability means using environmentally friendly methods and materials.', icon: '🌱' },
    { title: 'Professional Expertise', description: 'Our team of skilled organizers brings years of experience and a keen eye for detail to every project.', icon: '⭐' },
    { title: 'Comprehensive Support', description: 'From start to finish, we provide guidance and support to make your organizing journey seamless.', icon: '🤝' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-600 font-semibold mb-4">Transform Your Space with Expert Organization</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Home Organizers Los Angeles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Discover the art of decluttering and create a harmonious living environment with our professional organizing services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Organizing Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service) => (
              <div key={service.name} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-teal-50 transition-colors">
                <span className="text-3xl">{service.icon}</span>
                <p className="mt-2 text-sm font-medium text-gray-700">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Key Features of Our Services</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Investment in Your Space</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-teal-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Project</h3>
              <p className="text-3xl font-bold text-teal-600 mb-2">$300 - $900</p>
              <p className="text-gray-600 text-sm">Single closet or pantry</p>
            </div>
            <div className="bg-teal-100 rounded-xl p-6 text-center border-2 border-teal-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medium Project</h3>
              <p className="text-3xl font-bold text-teal-600 mb-2">$900 - $2,500</p>
              <p className="text-gray-600 text-sm">Kitchen, garage, or multiple closets</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Project</h3>
              <p className="text-3xl font-bold text-teal-600 mb-2">$2,500+</p>
              <p className="text-gray-600 text-sm">Whole-home or major garage</p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6">*Pricing varies based on project scope. Contact us for a personalized quote.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-teal-100 text-lg mb-8">Contact Us Today for a Free Consultation</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Get Organized Now
          </Link>
        </div>
      </section>
    </div>
  );
}
