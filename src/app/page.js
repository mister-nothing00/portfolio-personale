import Hero from '@/components/Hero'
import { homeFAQ } from '@/data/faq'

// ============================================
// METADATA SPECIFICI PER HOME PAGE
// ============================================
export const metadata = {
  title: 'Francesco di Vita | Full-Stack Developer',
  description: 'Full-Stack Developer specializzato in React, Next.js e React Native. Creo esperienze digitali moderne e performanti per web e mobile.',
  openGraph: {
    title: 'Francesco di Vita | Full-Stack Developer',
    description: 'Full-Stack Developer specializzato in React, Next.js e React Native.',
    url: 'https://portfolio-personale-alpha.vercel.app/',
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
              url: 'https://portfolio-personale-alpha.vercel.app/',
              image: 'https://portfolio-personale-alpha.vercel.app/images/profile.png',
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
                  item: 'https://portfolio-personale-alpha.vercel.app/',
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
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: homeFAQ.map(faq => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer,
                    },
                  })),
                }),
              }}
            />

      {/* Hero Section - Full Page */}
      <Hero />

    
    </>
  )
}