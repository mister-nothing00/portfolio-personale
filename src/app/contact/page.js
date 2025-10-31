// app/contact/page.js
import ContactForm from '@/components/ContactForm'

// ============================================
// METADATA SSR
// ============================================
export const metadata = {
  title: 'Contatti',
  description: 'Contatta Francesco di Vita per collaborazioni, progetti freelance o opportunità lavorative. Full-Stack Developer disponibile per nuove sfide.',
  openGraph: {
    title: 'Contatti - Francesco di Vita',
    description: 'Contatta Francesco di Vita per collaborazioni e progetti',
    url: 'https://portfolio-personale-alpha.vercel.app/contact',
    type: 'website',
  },
}

// ============================================
// CONTACT PAGE - SSR
// ============================================
export default function ContactPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contatti - Francesco di Vita',
            description: 'Pagina contatti di Francesco di Vita',
            url: 'https://portfolio-personale-alpha.vercel.app/contact',
            author: {
              '@type': 'Person',
              name: 'Francesco Davide di Vita',
              email: 'francescodavidedivita@gmail.com',
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://portfolio-personale-alpha.vercel.app',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Contact',
                  item: 'https://portfolio-personale-alpha.vercel.app/contact',
                },
              ],
            },
          }),
        }}
      />

      {/* Client Component con form */}
      <ContactForm />
    </>
  )
}