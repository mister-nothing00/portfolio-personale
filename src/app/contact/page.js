// app/contact/page.js
import ContactForm from '@/components/ContactForm'
import { ContactPageSchema, BreadcrumbSchema } from '@/components/schema/SEOSchemas'

export const metadata = {
  title: 'Contatti | Francesco di Vita',
  description: 'Contatta Francesco di Vita per collaborazioni professionali, progetti freelance, opportunità lavorative full-stack o consulenze tecniche su React, Next.js e React Native.',
  keywords: [
    "Contatti Francesco di Vita",
    "Freelance Full-Stack developer",
    "Collaborazioni web developer",
    "Consulenza React Next.js",
    "Opportunità lavoro developer Sicilia",
    "Email developer geospaziale"
  ],
  openGraph: {
    title: 'Contatti - Francesco di Vita',
    description: 'Contatta Francesco di Vita per collaborazioni e progetti',
    url: 'https://portfolio-francesco-davide-divita.vercel.app/contact',
    type: 'website',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
]

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactForm />
    </>
  )
}