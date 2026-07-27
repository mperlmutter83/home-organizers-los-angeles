import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog-data';
import { getPosts, toRenderPost, type RenderPost } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, insights, and guides on home organization in Los Angeles. Closet organization, garage decluttering, and more from Home Organizers Los Angeles.',
};

const SITE_DOMAIN = 'homeorganizerslosangeles.com';

export const revalidate = 60;

export default async function BlogPage() {
  const blogPosts = getPublishedPosts();
  const apiPosts = await getPosts(SITE_DOMAIN);
  const posts: RenderPost[] = apiPosts.length > 0 ? apiPosts.map(toRenderPost) : blogPosts;
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-600 font-semibold mb-4">Transform Your Space with Expert Organization</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Home Organizers Los Angeles</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the art of decluttering and organizing with our professional services, tailored to bring harmony and efficiency to your home.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Insights on Home Organization</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <span className="inline-block bg-teal-100 text-teal-700 text-sm px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-teal-600">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-teal-100 text-lg mb-8">
            Contact Home Organizers Los Angeles to schedule your consultation and discover how our professional organizers can help you achieve the clutter-free home of your dreams.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
