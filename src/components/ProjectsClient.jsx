"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { projects } from "@/data/projects";

// ============================================
// BREADCRUMB DATA
// ============================================
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

// ============================================
// PROJECTS PAGE - CLIENT COMPONENT
// ============================================
export default function ProjectsClient() {
  // Estrai tutti i tag unici dai progetti
  const allTags = [...new Set(projects.flatMap((p) => p.tags))];

  // Featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  // Stats
  const totalProjects = projects.length;
  const totalTech = allTags.length;

  return (
    <>
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
                PORTFOLIO
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              I Miei <span className="text-gradient">Progetti</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl">
              Una selezione dei lavori che ho realizzato, dalle web app alle
              mobile app. Ogni progetto rappresenta una sfida superata e nuove
              competenze acquisite.
            </p>

            {/* Stats */}
            <div className="flex justify-start gap-8 pt-6 border-t border-[var(--border-light)]">
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {totalProjects}+
                </div>
                <div className="text-sm text-[var(--text-muted)]">Progetti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {totalTech}+
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  Tecnologie
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  100%
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  Completati
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* FEATURED PROJECTS */}
          {/* ============================================ */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <div className="flex justify-end items-center gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-heading">
                  ⭐ In <span className="text-gradient">Evidenza</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    featured
                  />
                ))}
              </div>
            </div>
          )}

          {/* ============================================ */}
          {/* CTA FINALE */}
          {/* ============================================ */}
          <div className="mt-20 text-center p-12 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-secondary)]">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Hai un Progetto in Mente?
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Sono sempre aperto a nuove sfide e collaborazioni. Parliamo del
              tuo prossimo progetto!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold  hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contattami Ora
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

// ============================================
// PROJECT CARD COMPONENT
// ============================================
function ProjectCard({ project, index, featured = false }) {
  return (
    <article
      className="card group cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          {featured && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-white text-xs font-semibold">
              ⭐ Featured
            </span>
          )}
          <span className="px-3 py-1 rounded-full glass text-white text-xs font-semibold">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold font-heading group-hover:text-[var(--accent-primary)] transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-xs font-medium text-[var(--accent-primary)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bottom-0 px-4 py-2 rounded-lg border border-[var(--border-medium)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] text-sm font-semibold hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="pe-2"> Live Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-globe-icon lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
