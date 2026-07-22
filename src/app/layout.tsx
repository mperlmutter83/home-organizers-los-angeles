import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home Organizers Los Angeles | Professional Home Organization",
    template: "%s | Home Organizers Los Angeles",
  },
  description: "Professional home organization services in Los Angeles. Closet organization, garage decluttering, kitchen arrangement, and whole-home organization. Call (818) 748-2484.",
  keywords: ["home organizer los angeles", "professional organizer LA", "closet organization", "garage organization", "home decluttering", "north hollywood organizer"],
  openGraph: {
    title: "Home Organizers Los Angeles | Professional Home Organization",
    description: "Professional home organization services in Los Angeles. Transform your cluttered spaces into harmonious, functional environments.",
    url: "https://homeorganizerslosangeles.com",
    siteName: "Home Organizers Los Angeles",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NKKDJC84');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Home Organizers Los Angeles",
              "image": "https://homeorganizerslosangeles.com/logo.png",
              "telephone": "+1-818-748-2484",
              "email": "info@homeorganizerslosangeles.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "11642 Victory Blvd #160",
                "addressLocality": "North Hollywood",
                "addressRegion": "CA",
                "postalCode": "91606",
                "addressCountry": "US"
              },
              "url": "https://homeorganizerslosangeles.com",
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Los Angeles"
              },
              "serviceType": ["Home Organization", "Closet Organization", "Garage Organization", "Kitchen Organization"]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKKDJC84"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
