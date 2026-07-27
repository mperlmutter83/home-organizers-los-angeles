import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/images/logo-black.png"
            alt="Home Organizers Los Angeles"
            width={110}
            height={110}
            className="mb-4"
          />
          <p className="text-sm text-white/70 leading-relaxed">
            Professional organizers dedicated to transforming cluttered spaces
            into harmonious environments across Los Angeles.
          </p>
        </div>

        <div>
          <h4 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-mint transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              11642 Victory Blvd #160
              <br />
              North Hollywood, CA 91606
            </li>
            <li>
              <a href="tel:+18187482484" className="hover:text-mint transition-colors">
                (818) 748-2484
              </a>
            </li>
            <li>
              <a
                href="mailto:info@homeorganizerslosangeles.com"
                className="hover:text-mint transition-colors"
              >
                info@homeorganizerslosangeles.com
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-mint transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.5V13h2.8v8h3.2z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="text-white/70 hover:text-mint transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.8l-5.3-6.2L4 21H.7l7.8-8.9L.5 3h7l4.8 5.7L17.7 3zm-1.2 16h1.9L6.4 4.9H4.4L16.5 19z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-mint transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 2c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3.8-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1.8.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-.8.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-.8-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.4a6.2 6.2 0 110 12.4 6.2 6.2 0 010-12.4zm0 10.2a4 4 0 100-8 4 4 0 000 8zm6.4-10.5a1.4 1.4 0 110 2.9 1.4 1.4 0 010-2.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Home Organizers Los Angeles. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
