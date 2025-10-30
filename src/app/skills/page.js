// app/skills/page.js
import SkillsClient from '@/components/SkillsClient'
import { skills } from '@/data/skills'

// ============================================
// METADATA SSR
// ============================================
export const metadata = {
  title: 'Skills & Competenze',
  description: 'Stack tecnologico completo di Francesco di Vita: React, Next.js, React Native, Node.js, WordPress e molto altro. Competenze tecniche e soft skills per progetti full-stack.',
  openGraph: {
    title: 'Skills & Competenze - Francesco di Vita',
    description: 'Stack tecnologico e competenze di Francesco di Vita - Full-Stack Developer',
    url: 'https://francescodivita.dev/skills',
    type: 'website',
  },
}

// ============================================
// SKILLS PAGE - SSR
// ============================================
export default function SkillsPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemPage',
            name: 'Competenze Tecniche - Francesco di Vita',
            description: 'Stack tecnologico e competenze di Francesco di Vita',
            url: 'https://francescodivita.dev/skills',
            author: {
              '@type': 'Person',
              name: 'Francesco Davide di Vita',
              knowsAbout: skills.flatMap(cat => cat.technologies.map(tech => tech.name)),
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
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Skills',
                  item: 'https://francescodivita.dev/skills',
                },
              ],
            },
          }),
        }}
      />

      {/* Client Component con tabs interattive */}
      <SkillsClient />
    </>
  )
}