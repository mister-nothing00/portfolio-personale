export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy di Francesco di Vita',
}

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-[var(--text-secondary)]">
          <p>
            <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
          </p>

          <section>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-4">
              1. Introduzione
            </h2>
            <p>
              Questo sito web è gestito da Francesco di Vita. La tua privacy è importante 
              per me e mi impegno a proteggere i tuoi dati personali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-4">
              2. Dati Raccolti
            </h2>
            <p>
              Questo sito non raccoglie attivamente dati personali. Non utilizzo cookie 
              di tracciamento o analytics di terze parti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-4">
              3. Contatti
            </h2>
            <p>
              Per qualsiasi domanda riguardo questa Privacy Policy, puoi contattarmi a:{' '}
              <a 
                href="mailto:francescodavidedivita@gmail.com"
                className="text-[var(--accent-primary)] hover:underline"
              >
                francescodavidedivita@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}