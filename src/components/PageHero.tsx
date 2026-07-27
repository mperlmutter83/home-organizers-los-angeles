import Image from 'next/image';
import Link from 'next/link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtext: string;
  ctaText?: string;
  ctaHref?: string;
  bgImage?: string;
  compact?: boolean;
}

/**
 * Divi-style hero: background photo with dark gradient overlay
 * (linear-gradient 180deg rgba(0,0,0,.6) -> rgba(0,0,0,.9)), centered white text.
 */
export default function PageHero({
  eyebrow,
  title,
  subtext,
  ctaText,
  ctaHref,
  bgImage = '/images/hero.jpg',
  compact = false,
}: PageHeroProps) {
  return (
    <section className={`relative flex items-center justify-center ${compact ? 'py-24 md:py-32' : 'py-32 md:py-44'}`}>
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className="object-cover -z-10"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          {subtext}
        </p>
        {ctaText && ctaHref && (
          <Link href={ctaHref} className="btn-teal">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
