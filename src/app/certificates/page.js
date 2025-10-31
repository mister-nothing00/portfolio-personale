// app/certificates/page.js
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { certificates } from "@/data/certificates";

// ============================================
// METADATA SSR
// ============================================
export const metadata = {
  title: "Certificazioni",
  description:
    "Certificazioni ufficiali di Francesco di Vita: Master Full-Stack Development e Front-End Development da start2impact University. Competenze certificate e validate.",
  openGraph: {
    title: "Certificazioni - Francesco di Vita",
    description:
      "Certificazioni professionali di Francesco di Vita - Full-Stack Developer",
    url: "https://portfolio-personale-alpha.vercel.app/certificates",
    type: "website",
  },
};

// ============================================
// BREADCRUMB DATA
// ============================================
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Certificates", href: "/certificates" },
];

// ============================================
// CERTIFICATES PAGE - SSR
// ============================================
export default function CertificatesPage() {
  // Stats
  const totalCertificates = certificates.length;
  const latestYear = new Date(certificates[0].date).getFullYear();
  const totalProjects = certificates.reduce((acc, cert) => {
    const match = cert.description.match(/(\d+)\s+progetti/);
    return acc + (match ? parseInt(match[1]) : 0);
  }, 0);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemPage",
            name: "Certificazioni - Francesco di Vita",
            description: "Certificazioni professionali di Francesco di Vita",
            url: "https://portfolio-personale-alpha.vercel.app/certificates",
            author: {
              "@type": "Person",
              name: "Francesco Davide di Vita",
              hasCredential: certificates.map((cert) => ({
                "@type": "EducationalOccupationalCredential",
                name: cert.title,
                credentialCategory: "certificate",
                recognizedBy: {
                  "@type": "Organization",
                  name: cert.issuer,
                },
                dateCreated: cert.date,
              })),
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://portfolio-personale-alpha.vercel.app",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Certificates",
                  item: "https://portfolio-personale-alpha.vercel.app/certificates",
                },
              ],
            },
          }),
        }}
      />

      <section className="section min-h-screen">
        <div className="container">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* ============================================ */}
          {/* HEADER + STATS */}
          {/* ============================================ */}
          <div className="text-left max-w-8xl mx-auto mb-16 animate-fade-in-up mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 mb-6">
              <span className="text-sm font-semibold text-[var(--accent-primary)]">
                CERTIFICAZIONI
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Formazione <span className="text-gradient">Certificata</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl">
              Certificazioni ufficiali che attestano le mie competenze acquisite
              attraverso formazione strutturata e progetti pratici. Ogni
              certificato rappresenta un traguardo raggiunto nel mio percorso di
              crescita professionale.
            </p>

            {/* Stats */}
            <div className="flex justify-start gap-8 pt-6 border-t border-[var(--border-light)]">
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {totalCertificates}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  Certificati
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {totalProjects}+
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  Progetti Completati
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {latestYear}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  Ultimo Conseguito
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* CERTIFICATES GRID */}
          {/* ============================================ */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">
              🏆 I Miei <span className="text-gradient">Certificati</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <article
                  key={cert.id}
                  className="card group hover:shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-[var(--bg-tertiary)]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <a
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-all"
                      >
                        Vedi credenziale →
                      </a>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass border border-white/20 text-white text-xs font-semibold">
                      {new Date(cert.date).getFullYear()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold flex-shrink-0">
                        🏆
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold font-heading text-[var(--text-primary)] line-clamp-2 mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-muted)]">
                      {cert.description}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-light)]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        Completato il{" "}
                        {new Date(cert.date).toLocaleDateString("it-IT", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ============================================ */}
          {/* ABOUT CERTIFICATION */}
          {/* ============================================ */}
          <div className="mb-20">
            <div className="card p-8 md:p-12 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
                  🎓 Perché le Certificazioni{" "}
                  <span className="text-gradient">Contano</span>
                </h2>

                <div className="space-y-4 text-[var(--text-secondary)]">
                  <p>
                    Ogni certificato rappresenta{" "}
                    <strong className="text-[var(--text-primary)]">
                      ore di studio
                    </strong>
                    ,
                    <strong className="text-[var(--text-primary)]">
                      {" "}
                      progetti pratici
                    </strong>{" "}
                    e
                    <strong className="text-[var(--text-primary)]">
                      {" "}
                      competenze validate
                    </strong>
                    .
                  </p>

                  <p>
                    I master completati presso{" "}
                    <strong className="text-[var(--text-primary)]">
                      start2impact University
                    </strong>{" "}
                    mi hanno permesso di acquisire competenze concrete
                    attraverso un approccio
                    <strong className="text-[var(--text-primary)]">
                      {" "}
                      pratico e project-based
                    </strong>
                    .
                  </p>

                  <p>
                    Ogni certificazione include progetti reali valutati da
                    mentor professionisti, garantendo una preparazione{" "}
                    <strong className="text-[var(--text-primary)]">
                      pronta per il mercato
                    </strong>
                    .
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[var(--border-light)]">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📚</div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] mb-1">
                        Teoria + Pratica
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        Apprendimento bilanciato
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-2xl">👨‍🏫</div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] mb-1">
                        Mentor Esperti
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        Feedback professionale
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] mb-1">
                        Job-Ready
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        Skills applicabili subito
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* SKILLS LINK */}
          {/* ============================================ */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <Link
              href="/skills"
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white text-2xl flex-shrink-0">
                  💻
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    Competenze Tecniche
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Scopri il mio stack tecnologico completo e le competenze
                    acquisite.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-semibold group-hover:gap-3 transition-all">
                    Esplora le skills
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/projects"
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white text-2xl flex-shrink-0">
                  🚀
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    Progetti Realizzati
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Vedi come applico le competenze certificate in progetti
                    reali.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-semibold group-hover:gap-3 transition-all">
                    Scopri i progetti
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* ============================================ */}
          {/* CTA FINALE */}
          {/* ============================================ */}
          <div className="text-center p-12 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-secondary)]">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Cerchi un Developer Certificato?
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Le mie competenze certificate sono pronte per il tuo prossimo
              progetto. Lavoriamo insieme!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#10b981] text-white font-semibold hover:bg-[#059669] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contattami
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
