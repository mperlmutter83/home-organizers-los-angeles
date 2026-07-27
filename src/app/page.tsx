import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import NewsletterForm from '@/components/NewsletterForm';
import { getMergedPosts } from '@/lib/posts';

const services = [
  {
    title: 'Closet Organization',
    description:
      'Maximize your closet space with our tailored organization solutions, ensuring every item has its place.',
    image: '/images/closet.jpg',
    cta: 'See Closet Solutions',
  },
  {
    title: 'Garage Decluttering',
    description:
      'Reclaim your garage with our comprehensive decluttering services, turning chaos into order.',
    image: '/images/garage.jpg',
    cta: 'Discover Garage Options',
  },
  {
    title: 'Office Setup',
    description:
      'Create a productive work environment with our office setup services, designed to boost efficiency and focus.',
    image: '/images/office.jpg',
    cta: 'Explore Office Services',
  },
];

export default async function Home() {
  const latestPosts = (await getMergedPosts()).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Transform Your Space, Transform Your Life"
        title="Welcome to Home Organizers Los Angeles"
        subtext="Discover the art of organization with Home Organizers Los Angeles. Elevate your living and working spaces with our expert solutions."
        ctaText="Explore Our Services"
        ctaHref="/services"
        bgImage="/images/hero.jpg"
      />

      {/* About — two column */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Home Organizers Los Angeles
            </h2>
            <p className="text-ink/80 leading-relaxed mb-8">
              Home Organizers Los Angeles is dedicated to transforming cluttered
              spaces into harmonious environments. Our team of professional
              organizers specializes in creating customized solutions for every
              room in your home or office. By optimizing your space, we aim to
              enhance your lifestyle and productivity. Experience the peace and
              efficiency that comes with a well-organized space.
            </p>
            <Link href="/about-us" className="btn-teal">
              Learn More About Us
            </Link>
          </div>
          <div>
            <Image
              src="/images/about-home.jpg"
              alt="Beautifully organized home interior by Home Organizers Los Angeles"
              width={1080}
              height={720}
              className="rounded-md shadow-[0px_40px_112px_-24px_rgba(0,0,0,0.12)] w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services — teal gradient into white */}
      <section
        className="py-20 md:py-28"
        style={{
          background: 'linear-gradient(180deg, #22577a 80%, #ffffff 80%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
            Our Organizing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-7"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-md w-full h-48 object-cover mb-6"
                />
                <h4 className="font-sans font-bold text-xl mb-3">
                  {service.title}
                </h4>
                <p className="text-ink/80 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/contact-us" className="btn-teal">
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — navy split */}
      <section className="bg-navy py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold">
            Transform Your Space with Expert Help
          </h3>
          <div>
            <Link href="/contact-us" className="btn-white mb-6 inline-block">
              Book a Consultation
            </Link>
            <p className="text-white/80 leading-relaxed">
              Ready to reclaim your home or office from clutter? Our team of
              professional organizers at Home Organizers Los Angeles is here to
              assist you in creating a serene and efficient environment.
              Schedule a consultation today to begin your journey towards a more
              organized life.
            </p>
          </div>
        </div>
      </section>

      {/* Blog preview + newsletter split */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-navy py-20 px-6 md:px-14">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
            Latest Organizing Insights
          </h2>
          <div className="space-y-10">
            {latestPosts.map((post) => (
              <article key={post.slug}>
                {post.image && (
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={375}
                      className="rounded-md w-full h-44 object-cover mb-4"
                    />
                  </Link>
                )}
                <h2 className="text-white text-xl font-bold mb-2">
                  <Link href={`/${post.slug}`} className="hover:text-mint transition-colors">
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt && (
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                )}
                <Link
                  href={`/${post.slug}`}
                  className="text-white text-sm underline hover:text-mint transition-colors"
                >
                  read more
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-mint py-20 px-6 md:px-14 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h3 className="text-white text-3xl font-bold mb-8">
              Subscribe to Our Newsletter
            </h3>
            <NewsletterForm variant="full" onMint />
          </div>
        </div>
      </section>
    </>
  );
}
