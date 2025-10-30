import Hero from '@/components/Hero'

// ============================================
// METADATA SPECIFICI PER HOME PAGE
// ============================================
export const metadata = {
  title: 'Francesco di Vita | Full-Stack Developer',
  description: 'Full-Stack Developer specializzato in React, Next.js e React Native. Creo esperienze digitali moderne e performanti per web e mobile.',
  openGraph: {
    title: 'Francesco di Vita | Full-Stack Developer',
    description: 'Full-Stack Developer specializzato in React, Next.js e React Native.',
    url: 'https://francescodivita.dev',
    type: 'website',
  },
}

// ============================================
// HOME PAGE - SOLO HERO
// ============================================
export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD specifico per la home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            mainEntity: {
              '@type': 'Person',
              name: 'Francesco Davide di Vita',
              alternateName: 'Francesco di Vita',
              description: 'Full-Stack Developer specializzato in React, Next.js e React Native',
              url: 'https://francescodivita.dev',
              image: 'https://francescodivita.dev/profile.jpg',
              sameAs: [
                'https://github.com/mister-nothing00',
                'https://www.linkedin.com/in/francesco-di-vita-113355183/',
                'https://www.instagram.com/francesco.divi',
              ],
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://francescodivita.dev',
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section - Full Page */}
      <Hero />
    </>
  )
}