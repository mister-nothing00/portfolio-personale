// app/page.js
import Hero from "@/components/Hero";
import { PersonSchema, WebSiteSchema, FAQPageSchema, BreadcrumbSchema } from "@/components/schema/SEOSchemas";
import { homeFAQ } from "@/data/faq";

export const metadata = {
  title: "Francesco di Vita | Full-Stack Developer Geospaziale",
  description: "Full-Stack Developer specializzato in React, Next.js e React Native. Sviluppo soluzioni web e mobile per startup geospaziali. Portfolio progetti e competenze.",
  keywords: [
    "Francesco di Vita",
    "Full-Stack Developer Bologna",
    "Sviluppatore React Next.js",
    "Developer geospaziale",
    "Space2Earth developer",
    "GeospatialX",
    "Programmatore MERN stack Italia",
    "React Native developer",
    "start2impact University",
    "Web developer Bologna"
  ],
  openGraph: {
    title: "Francesco di Vita | Full-Stack Developer",
    description: "Full-Stack Developer specializzato in React, Next.js e tecnologie geospaziali",
    url: "https://portfolio-francesco-davide-divita.vercel.app",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Schema.org validati e centralizzati */}
      <PersonSchema />
      <WebSiteSchema />
      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" }
        ]} 
      />
      <FAQPageSchema faqs={homeFAQ} />

      {/* Hero Section */}
      <Hero />
    </>
  );
}