import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BottomNav from "@/components/ui/BottomNav";

// Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ============================================
// METADATA SEO
// ============================================
export const metadata = {
  metadataBase: new URL("https://portfolio-personale-alpha.vercel.app/"),

  title: {
    default: "Francesco di Vita | Full-Stack Developer & Mobile Specialist",
    template: "%s | Francesco di Vita",
  },

  description:
    "Full-Stack Developer specializzato in React, Next.js, React Native e WordPress. Creo esperienze digitali moderne e performanti. Attualmente in Space2Earth e GeospatialX.",

  keywords: [
    "Francesco di Vita",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "React Native",
    "WordPress Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
    "Mobile Development",
    "JavaScript",
    "Node.js",
    "Space2Earth",
    "GeospatialX",
    "start2impact",
  ],

  authors: [
    {
      name: "Francesco Davide di Vita",
      url: "https://portfolio-personale-alpha.vercel.app/",
    },
  ],

  creator: "Francesco di Vita",
  publisher: "Francesco di Vita",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://portfolio-personale-alpha.vercel.app/",
    title: "Francesco di Vita | Full-Stack Developer",
    description:
      "Full-Stack Developer specializzato in React, Next.js e React Native. Creo esperienze digitali moderne e performanti.",
    siteName: "Francesco di Vita Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Francesco di Vita - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Francesco di Vita | Full-Stack Developer",
    description:
      "Full-Stack Developer specializzato in React, Next.js e React Native.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://portfolio-personale-alpha.vercel.app/",
  },

  verification: {
    google: "your-google-verification-code",
  },

  category: "technology",
};

// ============================================
// VIEWPORT
// ============================================
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

// ============================================
// ROOT LAYOUT
// ============================================
export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        {/* Preconnect per font esterni */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org JSON-LD - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Francesco Davide di Vita",
              url: "https://francescodivita.dev",
              image: "https://portfolio-personale-alpha.vercel.app/images/profile.jpg",
              email: "francescodavidedivita@gmail.com",
              birthDate: "2000-06-18",
              gender: "Male",
              nationality: "Italian",

              sameAs: [
                "https://github.com/mister-nothing00",
                "https://www.linkedin.com/in/francesco-di-vita-113355183/",
                "https://www.instagram.com/francesco.divi",
              ],

              jobTitle: "Full-Stack Developer",

              worksFor: [
                {
                  "@type": "Organization",
                  name: "Space2Earth",
                  url: "https://space2earth.com",
                },
                {
                  "@type": "Organization",
                  name: "GeospatialX",
                },
              ],

              alumniOf: {
                "@type": "EducationalOrganization",
                name: "start2impact University",
                url: "https://www.start2impact.it",
              },

              knowsAbout: [
                "React",
                "Next.js",
                "React Native",
                "Node.js",
                "Express.js",
                "JavaScript",
                "WordPress",
                "Full-Stack Development",
                "Frontend Development",
                "Backend Development",
                "Mobile Development",
                "Web Development",
                "HTML",
                "CSS",
                "SCSS",
                "Tailwind CSS",
                "MongoDB",
                "MySQL",
                "GraphQL",
                "Git",
                "GitHub",
                "Vercel",
                "SEO",
              ],

              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Master in Full-Stack Development",
                  credentialCategory: "certificate",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "start2impact University",
                  },
                  dateCreated: "2024-11-04",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Master in Front-End Development",
                  credentialCategory: "certificate",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "start2impact University",
                  },
                  dateCreated: "2024-04-11",
                },
              ],
            }),
          }}
        />

        {/* Schema.org JSON-LD - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Francesco di Vita Portfolio",
              url: "https://portfolio-personale-alpha.vercel.app/",
              description:
                "Portfolio professionale di Francesco di Vita, Full-Stack Developer",
              author: {
                "@type": "Person",
                name: "Francesco Davide di Vita",
              },
              inLanguage: "it-IT",
            }),
          }}
        />
      </head>

      <body className={inter.variable} suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content per accessibilità */}
          <a href="#main-content" className="skip-to-content">
            Vai al contenuto principale
          </a>

          {/* Main Content */}
          <main id="main-content" className="min-h-screen ">
            {children}
          </main>

          {/* Bottom Navigation */}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
