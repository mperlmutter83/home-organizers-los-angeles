import type { Metadata } from "next";
import { Merriweather, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-worksans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homeorganizerslosangeles.com"),
  title:
    "Home Organizers Los Angeles | Professional organizers, decluttering your space!",
  description:
    "Home Organizers Los Angeles transforms cluttered spaces into harmonious environments. Professional organizing for closets, garages, offices and more. Call (818) 748-2484.",
  openGraph: {
    siteName: "Home Organizers Los Angeles",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Home Organizers Los Angeles",
  url: "https://homeorganizerslosangeles.com",
  telephone: "(818) 748-2484",
  email: "info@homeorganizerslosangeles.com",
  image: "https://homeorganizerslosangeles.com/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11642 Victory Blvd #160",
    addressLocality: "North Hollywood",
    addressRegion: "CA",
    postalCode: "91606",
    addressCountry: "US",
  },
  areaServed: "Los Angeles, CA",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${workSans.variable}`}>
      <head>
        {/* Google tag (gtag.js) — carried over from the WordPress site */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GT-TB7VLCB5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'GT-TB7VLCB5');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
