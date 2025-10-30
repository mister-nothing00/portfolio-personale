// app/projects/page.js
import ProjectsClient from '@/components/ProjectsClient'
import { projects } from '@/data/projects'

// ============================================
// METADATA SSR
// ============================================
export const metadata = {
  title: 'Projects',
  description: 'Portfolio completo dei progetti sviluppati da Francesco di Vita. Web app, mobile app e soluzioni innovative con React, Next.js, React Native e Node.js.',
  openGraph: {
    title: 'Projects - Francesco di Vita',
    description: 'Portfolio progetti di Francesco di Vita - Full-Stack Developer',
    url: 'https://francescodivita.dev/projects',
    type: 'website',
  },
}

// ============================================
// PROJECTS PAGE - SSR
// ============================================
export default function ProjectsPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Portfolio Progetti - Francesco di Vita',
            description: 'Raccolta dei progetti sviluppati da Francesco di Vita',
            url: 'https://francescodivita.dev/projects',
            author: {
              '@type': 'Person',
              name: 'Francesco Davide di Vita',
            },
            hasPart: projects.map(project => ({
              '@type': 'CreativeWork',
              name: project.title,
              description: project.description,
              url: project.demo,
              image: project.thumbnail,
            })),
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
                  name: 'Projects',
                  item: 'https://francescodivita.dev/projects',
                },
              ],
            },
          }),
        }}
      />

      {/* Client Component con filtri interattivi */}
      <ProjectsClient />
    </>
  )
}