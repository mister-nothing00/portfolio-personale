// components/SkillsClient.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { skills, softSkills } from "@/data/skills";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
];

export default function SkillsClient() {
  const [activeCategory, setActiveCategory] = useState(skills[0].id);

  const activeSkillSet = skills.find((s) => s.id === activeCategory);
  const totalTechnologies = skills.reduce(
    (acc, cat) => acc + cat.technologies.length,
    0
  );
  const avgLevel = Math.round(
    skills.reduce(
      (acc, cat) =>
        acc +
        cat.technologies.reduce((sum, tech) => sum + tech.level, 0) /
          cat.technologies.length,
      0
    ) / skills.length
  );

  return (
    <section className="section min-h-screen">
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />

        {/* HEADER + STATS */}
        <div className="text-left max-w-8xl mx-auto mb-16 animate-fade-in-up mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 mb-6">
            <span className="text-sm font-semibold text-[var(--accent-primary)]">
              COMPETENZE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Il Mio <span className="text-gradient">Arsenal</span> Tecnologico
          </h1>

          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl">
            Strumenti e tecnologie che padroneggio per creare soluzioni digitali
            di impatto. Ogni skill è frutto di esperienza pratica su progetti
            reali.
          </p>

          <div className="flex justify-start gap-8 pt-6 border-t border-[var(--border-light)]">
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">
                {totalTechnologies}+
              </div>
              <div className="text-sm text-[var(--text-muted)]">Tecnologie</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">
                {skills.length}
              </div>
              <div className="text-sm text-[var(--text-muted)]">Categorie</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">
                {avgLevel}%
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                Livello Medio
              </div>
            </div>
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">
            💻 Competenze <span className="text-gradient">Tecniche</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-start gap-3 mb-12">
            {skills.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-white shadow-lg scale-105"
                    : "bg-[var(--bg-secondary)] border border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:scale-105"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {activeSkillSet?.technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="card hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-[var(--text-primary)]">
                    {tech.name}
                  </span>
                  <span className="text-sm font-medium text-[var(--accent-primary)]">
                    {tech.level}%
                  </span>
                </div>

                <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            🌟 Oltre il <span className="text-gradient">Codice</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-3xl">
            Le competenze tecniche sono fondamentali, ma ciò che fa davvero la
            differenza sono le soft skills: comunicazione, problem solving e
            capacità di lavorare in team.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={skill.id}
                className="card text-center hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold font-heading mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LEARNING PATH */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            📚 Il Mio <span className="text-gradient">Percorso</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-3xl">
            L'apprendimento è un viaggio continuo. Ecco come ho costruito le mie
            competenze nel tempo.
          </p>

          <div className="space-y-6">
            <div className="card hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold font-heading">
                      Formazione Ufficiale
                    </h3>
                    <span className="text-sm text-[var(--text-muted)]">
                      2023-2024
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Master in Full-Stack e Front-End Development presso
                    start2impact University. 12 progetti pratici completati su
                    tecnologie moderne.
                  </p>
                  <Link
                    href="/certificates"
                    className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all font-semibold"
                  >
                    Vedi certificati
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

            <div className="card hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  💼
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold font-heading">
                      Esperienza Professionale
                    </h3>
                    <span className="text-sm text-[var(--text-muted)]">
                      2022-Presente
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Sviluppo di applicazioni web e mobile per startup nel
                    settore geospaziale. Lavoro quotidiano con React, Next.js,
                    React Native e Node.js.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all font-semibold"
                  >
                    Vedi progetti
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

            <div className="card hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  🚀
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold font-heading">
                      Apprendimento Continuo
                    </h3>
                    <span className="text-sm text-[var(--text-muted)]">
                      Sempre
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Studio costante di nuove tecnologie, best practices e design
                    patterns. Partecipazione a community tech e contributi open
                    source.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINALE */}
        <div className="text-center p-12 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-secondary)]">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Vuoi Lavorare Insieme?
          </h3>
          <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
            Mettiamo le mie competenze al servizio del tuo progetto. Creiamo
            qualcosa di straordinario insieme!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Vedi i Progetti
            </Link>
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
      </div>
    </section>
  );
}
