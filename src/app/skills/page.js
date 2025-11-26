// app/skills/page.js
import SkillsClient from '@/components/SkillsClient'
import { skills } from '@/data/skills'
import { ItemPageSchema, BreadcrumbSchema } from '@/components/schema/SEOSchemas'

export const metadata = {
  title: "Skills & Competenze | Francesco di Vita",
  description: "Stack tecnologico: MERN (MongoDB, Express, React, Node.js), Next.js, Vue.js, React Native, WordPress, Leaflet. 40+ tecnologie per sviluppo full-stack e geospaziale.",
  keywords: [
    "Competenze React developer",
    "Skills Next.js developer",
    "MERN stack developer",
    "React Native mobile developer",
    "Tecnologie geospaziali Leaflet",
    "Full-Stack skills Sicilia",
    "Vue.js developer Italia"
  ],
  openGraph: {
    title: "Skills & Competenze - Francesco di Vita",
    description: "Stack tecnologico completo Full-Stack Developer",
    url: "https://portfolio-francesco-davide-divita.vercel.app/skills",
    type: "website",
  },
}

export default function SkillsPage() {
  const allSkills = skills.flatMap(cat => cat.technologies.map(tech => tech.name))
  
  return (
    <>
      <ItemPageSchema type="skills" items={allSkills} />
      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Skills", href: "/skills" }
        ]} 
      />
      <SkillsClient />
    </>
  )
}