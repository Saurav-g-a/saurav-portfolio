import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap" });

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.name} is a ${profile.role} with ${profile.years}+ years in React and TypeScript, building production Shopify apps and modern web products.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://saurav-portfolio-green.vercel.app"),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title,
    description: `${profile.years}+ years in React and TypeScript. Five Shopify apps shipped to production. Building interfaces people enjoy using.`,
    images: ["/images/saurav.jpg"],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: "#0b0f17",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  image: "/images/saurav.jpg",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Mohali", addressRegion: "Punjab", addressCountry: "IN" },
  sameAs: [profile.linkedin],
  worksFor: { "@type": "Organization", name: "CollationHub" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Himachal Pradesh University" },
  knowsAbout: ["React", "TypeScript", "Next.js", "Shopify", "Shopify Polaris", "JavaScript", "Redux", "React Router"],
};

// Applied before paint so a saved light theme never flashes dark first.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${manrope.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className="font-sans text-base leading-relaxed">{children}</body>
    </html>
  );
}
