import ProjectsClient from '@/components/ProjectsClient'
import { projects } from '@/data/projects'
import { CollectionPageSchema, BreadcrumbSchema } from '@/components/schema/SEOSchemas'

export const metadata = {
  title: "Projects | Portfolio Francesco di Vita",
  description: "Portfolio completo: web app con React/Next.js, mobile app con React Native, soluzioni geospaziali. 20+ progetti completati per startup e clienti.",
  keywords: [
    "Portfolio Francesco di Vita",
    "Progetti React Next.js",
    "Web app geospaziali",
    "Mobile app React Native",
    "Portfolio developer Sicilia",
    "Progetti space2earth"
  ],
  openGraph: {
    title: "Projects - Francesco di Vita",
    description: "Portfolio progetti Full-Stack Developer",
    url: "https://portfolio-francesco-davide-divita.vercel.app/projects",
    type: "website",
  },
}

export default function ProjectsPage() {
  return (
    <>
      <CollectionPageSchema projects={projects} />
      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" }
        ]} 
      />
      <ProjectsClient />
    </>
  )
}