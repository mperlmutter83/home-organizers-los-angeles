import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { contentToHtml } from '@/lib/api';
import { getAllPostSlugs } from '@/lib/blog-data';
import { getMergedPost } from '@/lib/posts';

// Blog posts live at ROOT URLs (preserved from WordPress for SEO continuity).
// Static routes (about-us, services, contact-us, blog) win over this catch.

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// New posts published to the central API render on demand.
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getMergedPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Home Organizers Los Angeles`,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getMergedPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow mb-4">{post.category}</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/60 text-sm font-sans">{post.date}</p>
        </div>
      </section>

      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={1080}
              height={675}
              priority
              className="rounded-md shadow-[0px_40px_112px_-24px_rgba(0,0,0,0.12)] w-full h-auto mb-12"
            />
          )}
          <div
            className="post-content text-ink/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contentToHtml(post.content) }}
          />
          <p className="mt-12">
            <Link href="/blog" className="text-teal font-sans font-semibold text-sm hover:underline">
              &larr; Back to Blog
            </Link>
          </p>
        </div>
      </article>

      <section className="bg-navy py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <Link href="/contact-us" className="btn-white">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
