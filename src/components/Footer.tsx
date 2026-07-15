import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-teal-400">Home Organizers Los Angeles</h3>
            <p className="mt-4 text-gray-400">
              Professional home organization services in Los Angeles. Transform your cluttered spaces into harmonious, functional environments.
            </p>
            <div className="mt-4">
              <p className="text-gray-400">11642 Victory Blvd #160</p>
              <p className="text-gray-400">North Hollywood, CA 91606</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+18187482484" className="text-gray-400 hover:text-teal-400 transition-colors">
                  (818) 748-2484
                </a>
              </li>
              <li>
                <a href="mailto:info@homeorganizerslosangeles.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  info@homeorganizerslosangeles.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Home Organizers Los Angeles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
