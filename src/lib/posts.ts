import {
  getPosts as getApiPosts,
  getPost as getApiPost,
  formatDate,
} from './api';
import { blogPosts, getPostBySlug } from './blog-data';

export const SITE_DOMAIN = 'homeorganizerslosangeles.com';

export interface SitePost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  content: string;
}

/**
 * Merged blog feed: local migrated posts + central Yes Crew API posts.
 * Central API wins on slug conflicts (Agent SEO publishes there).
 */
export async function getMergedPosts(): Promise<SitePost[]> {
  const map = new Map<string, SitePost>();
  for (const p of blogPosts) {
    map.set(p.slug, { ...p });
  }
  const apiPosts = await getApiPosts(SITE_DOMAIN);
  for (const p of apiPosts) {
    map.set(p.slug, {
      slug: p.slug,
      title: p.title,
      date: formatDate(p.publish_at || p.created_at),
      category: p.category || 'Home Organization',
      excerpt: p.excerpt || '',
      image: p.image_url || undefined,
      content: p.content,
    });
  }
  return Array.from(map.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getMergedPost(slug: string): Promise<SitePost | null> {
  const apiPost = await getApiPost(SITE_DOMAIN, slug);
  if (apiPost) {
    return {
      slug: apiPost.slug,
      title: apiPost.title,
      date: formatDate(apiPost.publish_at || apiPost.created_at),
      category: apiPost.category || 'Home Organization',
      excerpt: apiPost.excerpt || '',
      image: apiPost.image_url || undefined,
      content: apiPost.content,
    };
  }
  const local = getPostBySlug(slug);
  return local ? { ...local } : null;
}
