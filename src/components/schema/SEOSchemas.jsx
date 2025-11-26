// components/SEOSchemas.jsx
"use client";

/**
 * Componente centralizzato per gestire tutti gli Schema.org del sito
 * Genera JSON-LD strutturati e validati per massima indicizzazione
 */

// ============================================
// DATI BASE - Modificabili qui per tutto il sito
// ============================================
const BASE_URL = "https://portfolio-francesco-davide-divita.vercel.app";
const PERSON_DATA = {
  name: "Francesco Davide di Vita",
  alternateName: "Francesco di Vita",
  email: "francescodavidedivita@gmail.com",
  birthDate: "2001-06-18",
  gender: "Male",
  nationality: "Italian",
  jobTitle: "Full-Stack Developer",
  description: "Full-Stack Developer specializzato in React, Next.js, React Native e tecnologie geospaziali",
  
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gela",
    addressRegion: "Sicilia",
    addressCountry: "IT"
  },
  
  image: `${BASE_URL}/images/profile.png`,
  url: BASE_URL,
  
  sameAs: [
    "https://github.com/mister-nothing00",
    "https://www.linkedin.com/in/francesco-di-vita/",
    "https://www.instagram.com/__ciccio18"
  ],
  
  worksFor: [
    {
      "@type": "Organization",
      name: "Space2Earth",
      url: "https://www.space2earth.it",
      description: "Startup innovativa nel settore geospaziale"
    },
    {
      "@type": "Organization",
      name: "GeospatialX",
      description: "Soluzioni geospaziali avanzate"
    }
  ],
  
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "start2impact University",
    url: "https://www.start2impact.it",
    description: "Università online per competenze digitali"
  },
  
  knowsAbout: [
    "React",
    "Next.js", 
    "React Native",
    "Node.js",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "WordPress",
    "Full-Stack Development",
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "Web Development",
    "Geospatial Technology",
    "HTML5",
    "CSS3",
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "SEO"
  ],
  
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Master in Full-Stack Development",
      credentialCategory: "certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "start2impact University"
      },
      dateCreated: "2024-12-01"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      name: "Master in Front-End Development",
      credentialCategory: "certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "start2impact University"
      },
      dateCreated: "2024-11-04"
    }
  ]
};

// ============================================
// SCHEMA GENERATORS
// ============================================

/**
 * Schema Person - Informazioni complete sulla persona
 */
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    ...PERSON_DATA
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema WebSite - Informazioni sul sito web
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Francesco di Vita Portfolio",
    url: BASE_URL,
    description: "Portfolio professionale di Francesco di Vita, Full-Stack Developer specializzato in tecnologie web moderne e geospaziali",
    author: {
      "@type": "Person",
      name: PERSON_DATA.name
    },
    inLanguage: "it-IT",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/projects?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema ProfilePage - Per pagina specifica (es. About)
 */
export function ProfilePageSchema({ pageName = "Home" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: PERSON_DATA.name,
      alternateName: PERSON_DATA.alternateName,
      description: PERSON_DATA.description,
      url: BASE_URL,
      image: PERSON_DATA.image,
      sameAs: PERSON_DATA.sameAs
    },
    name: `${pageName} - ${PERSON_DATA.name}`,
    url: `${BASE_URL}${pageName === "Home" ? "" : `/${pageName.toLowerCase()}`}`
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema BreadcrumbList - Navigazione gerarchica
 */
export function BreadcrumbSchema({ items = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`
    }))
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema CollectionPage - Per pagina progetti
 */
export function CollectionPageSchema({ projects = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Progetti - Francesco di Vita",
    description: "Raccolta completa dei progetti sviluppati da Francesco di Vita",
    url: `${BASE_URL}/projects`,
    author: {
      "@type": "Person",
      name: PERSON_DATA.name
    },
    hasPart: projects.map(project => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.demo,
      image: project.thumbnail,
      author: {
        "@type": "Person",
        name: PERSON_DATA.name
      },
      dateCreated: project.year.toString(),
      keywords: project.tags.join(", ")
    }))
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema ItemPage - Per pagina skills/certificates
 */
export function ItemPageSchema({ type = "skills", items = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: type === "skills" 
      ? "Competenze Tecniche - Francesco di Vita"
      : "Certificazioni - Francesco di Vita",
    description: type === "skills"
      ? "Stack tecnologico completo e competenze professionali"
      : "Certificazioni ufficiali e percorsi formativi completati",
    url: `${BASE_URL}/${type}`,
    author: {
      "@type": "Person",
      name: PERSON_DATA.name,
      knowsAbout: type === "skills" ? items : undefined,
      hasCredential: type === "certificates" ? items : undefined
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema FAQPage - Per FAQ
 */
export function FAQPageSchema({ faqs = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema ContactPage - Per pagina contatti
 */
export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contatti - Francesco di Vita",
    description: "Contatta Francesco di Vita per collaborazioni, progetti freelance o opportunità lavorative",
    url: `${BASE_URL}/contact`,
    author: {
      "@type": "Person",
      name: PERSON_DATA.name,
      email: PERSON_DATA.email,
      address: PERSON_DATA.address,
      sameAs: PERSON_DATA.sameAs
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Schema Organization - Per aziende
 */
export function OrganizationSchema({ org }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    ...org,
    employee: {
      "@type": "Person",
      name: PERSON_DATA.name
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// EXPORT DATI BASE per uso in altre pagine
// ============================================
export { BASE_URL, PERSON_DATA };