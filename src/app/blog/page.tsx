import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import NewsletterForm from '@/components/NewsletterForm';
import { getMergedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Home Organizers Los Angeles',
  description:
    'Tips and insights on home organization from Home Organizers Los Angeles — closet, garage, office and whole-home organizing advice.',
};

const categories = [
  'Closet Organization',
  'Garage Decluttering',
  'Office Space Management',
  'Kitchen Arrangement',
  'Living Room Styling',
  'Bedroom Optimization',
  "Kids' Room Solutions",
  'Storage Hacks',
];

export default async function Blog() {
  const posts = await getMergedPosts();

  return (
    <>
      <PageHero
        eyebrow="Transform Your Space with Expert Organization"
        title="Home Organizers Los Angeles"
        subtext="Discover the art of decluttering and organizing with our professional services, tailored to bring harmony and efficiency to your home."
        ctaText="Explore Our Services"
        ctaHref="/services"
        bgImage="/images/blog-challenges.jpg"
      />

      {/* Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Latest Insights on Home Organization
          </h2>
          <div className="space-y-14">
            {posts.map((post) => (
              <article key={post.slug}>
                {post.image && (
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1080}
                      height={675}
                      className="rounded-md w-full h-64 md:h-80 object-cover mb-6"
                    />
                  </Link>
                )}
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  <Link href={`/${post.slug}`} className="hover:text-teal transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-ink/60 mb-4 font-sans">
                  {post.date} | {post.category}
                </p>
                {post.excerpt && (
                  <p className="text-ink/80 leading-relaxed mb-4">{post.excerpt}</p>
                )}
                <Link
                  href={`/${post.slug}`}
                  className="text-teal text-sm font-sans font-semibold hover:underline"
                >
                  read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Explore Our Organization Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-6 text-center"
              >
                <h4 className="font-sans font-bold text-base">{category}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-mint py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Stay Updated with Our Tips
          </h2>
          <p className="text-white/90 leading-relaxed mb-8">
            Join our newsletter for exclusive tips and updates on how to keep
            your home organized and clutter-free. Sign up today and transform
            your space with expert advice from Home Organizers Los Angeles!
          </p>
          <NewsletterForm variant="emailOnly" onMint />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Contact Home Organizers Los Angeles to schedule your consultation
            and discover how our professional organizers can help you achieve
            the clutter-free home of your dreams. Don&apos;t wait, take the
            first step towards a more organized life!
          </p>
          <Link href="/contact-us" className="btn-white">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
