'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { projects } from '@/data/projects'

// ============================================
// BREADCRUMB DATA
// ============================================
const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
]

// ============================================
// PROJECTS PAGE - CLIENT COMPONENT
// ============================================
export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Estrai tutti i tag unici dai progetti
  const allTags = [...new Set(projects.flatMap(p => p.tags))]

  // Filtra progetti
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter))

  // Featured projects
  const featuredProjects = projects.filter(p => p.featured)

  // Stats
  const totalProjects = projects.length
  const totalTech = allTags.length

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
              Una selezione dei lavori che ho realizzato, dalle web app alle mobile app.
              Ogni progetto rappresenta una sfida superata e nuove competenze acquisite.
            </p>

            {/* Stats */}
            <div className="flex justify-start gap-8 pt-6 border-t border-[var(--border-light)]">
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">{totalProjects}</div>
                <div className="text-sm text-[var(--text-muted)]">Progetti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">{totalTech}</div>
                <div className="text-sm text-[var(--text-muted)]">Tecnologie</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">100%</div>
                <div className="text-sm text-[var(--text-muted)]">Completati</div>
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
                  <ProjectCard key={project.id} project={project} index={index} featured />
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
              Sono sempre aperto a nuove sfide e collaborazioni. Parliamo del tuo prossimo progetto!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#10b981] text-white font-semibold hover:bg-[#059669] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contattami Ora
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
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
          {project.tags.map(tag => (
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
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-white text-sm font-semibold text-center hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-[var(--border-medium)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] text-sm font-semibold hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}