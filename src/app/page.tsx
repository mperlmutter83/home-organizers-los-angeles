import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Closet Organization', description: 'Maximize your closet space with our tailored organization solutions, ensuring every item has its place.', icon: '👔' },
    { title: 'Garage Decluttering', description: 'Reclaim your garage with our comprehensive decluttering services, turning chaos into order.', icon: '🚗' },
    { title: 'Office Setup', description: 'Create a productive work environment with our office setup services, designed to boost efficiency and focus.', icon: '💼' },
    { title: 'Kitchen Arrangement', description: 'Optimize your kitchen with smart organization solutions for pantry, cabinets, and countertops.', icon: '🍳' },
    { title: 'Home Decluttering', description: 'Transform your entire home with comprehensive decluttering and organizing services.', icon: '🏠' },
    { title: 'Moving & Unpacking', description: 'Make your move stress-free with our professional packing and unpacking services.', icon: '📦' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-teal-600 font-semibold mb-4">Transform Your Space, Transform Your Life</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Home Organizers<br />Los Angeles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the art of organization with Home Organizers Los Angeles. Elevate your living and working spaces with our expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+18187482484"
                className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Call (818) 748-2484
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Home Organizers Los Angeles</h2>
              <p className="text-gray-600 mb-4">
                Home Organizers Los Angeles is dedicated to transforming cluttered spaces into harmonious environments. Our team of professional organizers specializes in creating customized solutions for every room in your home or office.
              </p>
              <p className="text-gray-600 mb-6">
                By optimizing your space, we aim to enhance your lifestyle and productivity. Experience the peace and efficiency that comes with a well-organized space.
              </p>
              <Link
                href="/about"
                className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-teal-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-teal-600">500+</p>
                  <p className="text-gray-600">Homes Organized</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-teal-600">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-teal-600">5★</p>
                  <p className="text-gray-600">Google Rating</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-bold text-teal-600">100%</p>
                  <p className="text-gray-600">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Organizing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From closets to garages, kitchens to home offices, we provide comprehensive organization solutions for every space in your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Space with Expert Help</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to reclaim your home or office from clutter? Our team of professional organizers at Home Organizers Los Angeles is here to assist you in creating a serene and efficient environment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Serving the Greater Los Angeles Area</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['North Hollywood', 'Studio City', 'Sherman Oaks', 'Encino', 'Van Nuys', 'Burbank', 'Glendale', 'Pasadena', 'Los Feliz', 'Silver Lake', 'West Hollywood', 'Beverly Hills', 'Santa Monica', 'Culver City', 'Downtown LA'].map((area) => (
              <span key={area} className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
