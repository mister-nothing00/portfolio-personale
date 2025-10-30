export const metadata = {
  title: 'Terms of Service',
  description: 'Termini di Servizio di Francesco di Vita',
}

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-[var(--text-secondary)]">
          <p>
            <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
          </p>

          <section>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-4">
              1. Accettazione dei Termini
            </h2>
            <p>
              Accedendo e utilizzando questo sito web, accetti di essere vincolato 
              da questi Termini di Servizio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-4">
              2. Proprietà Intellettuale
            </h2>
            <p>
              Tutti i contenuti presenti su questo sito, inclusi testi, grafica, 
              logo e codice, sono di proprietà di Francesco di Vita.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-4">
              3. Contatti
            </h2>
            <p>
              Per domande sui Termini di Servizio:{' '}
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
