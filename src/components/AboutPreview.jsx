import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] rounded-2xl blur-2xl opacity-20" />

              {/* Image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[var(--border-light)] shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Francesco di Vita"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold text-xl">
                        F
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          Francesco di Vita
                        </p>
                        <p className="text-sm text-gray-300">
                          Full-Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30">
              <span className="text-sm font-semibold text-[var(--accent-primary)]">
                CHI SONO
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Spirito Libero,
              <span className="text-gradient"> Mente Pragmatica</span>
            </h2>

            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                24 anni, nato il 18 giugno. Sviluppatore{" "}
                <strong className="text-[var(--text-primary)]">
                  Full-Stack
                </strong>{" "}
                con una passione per la tecnologia che va oltre il codice.
              </p>

              <p>
                Attualmente lavoro per{" "}
                <strong className="text-[var(--text-primary)]">
                  Space2Earth
                </strong>{" "}
                e{" "}
                <strong className="text-[var(--text-primary)]">
                  GeospatialX
                </strong>
                , dove sviluppo soluzioni web e mobile innovative nel settore
                geospaziale.
              </p>

              <p>
                Il mio approccio combina{" "}
                <strong className="text-[var(--text-primary)]">
                  ambizione
                </strong>
                ,{" "}
                <strong className="text-[var(--text-primary)]">
                  determinazione
                </strong>{" "}
                e un costante desiderio di{" "}
                <strong className="text-[var(--text-primary)]">
                  evoluzione
                </strong>
                . Credo nel potere del codice pulito e nelle soluzioni che fanno
                la differenza.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <span className="text-lg">🎓</span>
                  </div>
                  <span className="font-semibold text-[var(--text-primary)]">
                    start2impact University
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] pl-10">
                  Master Full-Stack & Front-End
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <span className="text-lg">💼</span>
                  </div>
                  <span className="font-semibold text-[var(--text-primary)]">
                    2+ Anni
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] pl-10">
                  Esperienza Professionale
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Scopri di più su di me
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
