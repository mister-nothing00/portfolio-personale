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
  metadataBase: new URL("https://portfolio-francesco-davide-divita.vercel.app"),

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
      url: "https://portfolio-francesco-davide-divita.vercel.app",
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
    url: "https://portfolio-francesco-davide-divita.vercel.app",
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
    canonical: "https://portfolio-francesco-davide-divita.vercel.app",
  },

  verification: {
    google: process.env.NEXT_GOOGLE_VERIFICATION,
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
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
          <main id="main-content" className=" min-h-screen ">
            {children}
          </main>

          {/* Bottom Navigation */}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
