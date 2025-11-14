import Hero from "@/components/Hero";
import { homeFAQ } from "@/data/faq";

// ============================================
// METADATA SPECIFICI PER HOME PAGE
// ============================================
export const metadata = {
  title: "Francesco di Vita | Full-Stack Developer",
  description:
    "Full-Stack Developer specializzato in React, Next.js e React Native. Creo esperienze digitali moderne e performanti per web e mobile.",
  openGraph: {
    title: "Francesco di Vita | Full-Stack Developer",
    description:
      "Full-Stack Developer specializzato in React, Next.js e React Native.",
    url: "https://portfolio-francesco-davide-divita.vercel.app",
    type: "website",
  },
};

// ============================================
// HOME PAGE - SOLO HERO
// ============================================
export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD - Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Francesco Davide di Vita",
            url: "https://francescodivita.dev",
            image:
              "https://portfolio-francesco-davide-divita.vercel.app/images/profile.jpg",
            email: "francescodavidedivita@gmail.com",
            birthDate: "2001-06-18",
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
                name: "space2earth",
                url: "https://space2earth.it",
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
            url: "https://portfolio-francesco-davide-divita.vercel.app",
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
      {/* Schema.org JSON-LD specifico per la home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Francesco Davide di Vita",
              alternateName: "Francesco di Vita",
              description:
                "Full-Stack Developer specializzato in React, Next.js e React Native",
              url: "https://portfolio-francesco-davide-divita.vercel.app",
              image:
                "https://portfolio-francesco-davide-divita.vercel.app/images/profile.png",
              sameAs: [
                "https://github.com/mister-nothing00",
                "https://www.linkedin.com/in/francesco-di-vita-113355183/",
                "https://www.instagram.com/francesco.divi",
              ],
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://portfolio-francesco-davide-divita.vercel.app",
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFAQ.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero Section - Full Page */}
      <Hero />
    </>
  );
}
