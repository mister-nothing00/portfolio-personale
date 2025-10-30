"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const titles = [
    "Full-Stack Developer",
    "Mobile Specialist",
    "Problem Solver",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-full-height relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-(--accent-primary) rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-(--accent-tertiary) rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-200" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-(--accent-primary)/30 bg-(--accent-primary)/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent-primary) opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent-primary)"></span>
              </span>
              <span className="text-xs font-medium text-gray-400">
                Disponibile per progetti
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
                Ciao, sono <br />
                <span className="text-gradient">Francesco</span>
              </h1>

              {/* Animated Title */}
              <div className="h-16 md:h-20">
                <p className="text-2xl md:text-5xl font-semibold text-(--text-primary) animate-fade-in">
                  {mounted && titles[currentTitle]}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-lg text-(--text-muted) leading-relaxed max-w-2xl">
              Trasformo idee in{" "}
              <strong className="text-(--text-secondary)">
                esperienze digitali
              </strong>{" "}
              moderne e performanti. Specializzato in{" "}
              <strong className="text-(--text-secondary)">React</strong>,{" "}
              <strong className="text-(--text-secondary)">Next.js</strong> e{" "}
              <strong className="text-(--text-secondary)">React Native</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-2 rounded-xl bg-[#10b981] hover:text-white font-semibold font-heading hover:bg-[#059669] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Vedi i miei progetti
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-2 rounded-xl border-2 border-(--border-medium) bg-(--bg-secondary) text-(--text-primary) font-semibold font-heading hover:bg-(--bg-tertiary) hover:border-(--accent-primary) hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Contattami
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Compatto */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-linear-to-r from-(--accent-primary) to-(--accent-tertiary) rounded-2xl blur-2xl opacity-20 animate-pulse" />

              {/* Main card - PIÙ PICCOLO */}
              <div className="relative glass rounded-xl p-6 border border-(--border-light)">
                <div className="space-y-4">
                  {/* Code snippet - COMPATTO */}
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-(--text-muted)">
                      <span className="text-(--accent-secondary)">const</span>{" "}
                      <span className="text-(--accent-tertiary)">
                        developer
                      </span>{" "}
                      = {"{"}
                    </div>
                    <div className="pl-4 space-y-0.5">
                      <div>
                        <span className="text-(--text-muted)">name:</span>{" "}
                        <span className="text-(--accent-primary)">
                          'Francesco'
                        </span>
                        ,
                      </div>
                      <div>
                        <span className="text-(--text-muted)">age:</span>{" "}
                        <span className="text-(--accent-primary)">24</span>,
                      </div>
                      <div>
                        <span className="text-(--text-muted)">role:</span>{" "}
                        <span className="text-(--accent-primary)">
                          'Full-Stack'
                        </span>
                        ,
                      </div>
                      <div>
                        <span className="text-(--text-muted)">stack:</span> [
                        <span className="text-(--accent-primary)">'React'</span>
                        ,<span className="text-(--accent-primary)">'Vue'</span>,
                        <span className="text-(--accent-primary)">'Next'</span>,
                        <span className="text-(--accent-primary)">'Node'</span>,
                        <span className="text-(--accent-primary)">'...'</span>
                        ],
                      </div>
                      <div>
                        <span className="text-(--text-muted)">passion:</span>{" "}
                        <span className="text-(--accent-primary)">
                          'Build Awesome Things'
                        </span>
                      </div>
                    </div>
                    <div className="text-(--text-muted)">{"}"}</div>
                  </div>

                  {/* Stats - PIÙ PICCOLI */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-(--border-light)">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">2+</div>
                      <div className="text-[10px] text-(--text-muted) mt-0.5">
                        Anni
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">
                        20+
                      </div>
                      <div className="text-[10px] text-(--text-muted) mt-0.5">
                        Progetti
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient">3</div>
                      <div className="text-[10px] text-(--text-muted) mt-0.5">
                        Certificati
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Fixed Right con Glass Effect */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 bg-(--bg-primary)/60 backdrop-blur-md rounded-2xl py-4 px-1 border border-(--border-light)/50 shadow-lg">
        <span className="text-xs font-medium text-(--text-muted) writing-mode-vertical mb-1 px-1">
          Follow me
        </span>

        <a
          href="https://www.instagram.com/francesco.divi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-(--text-muted) hover:text-(--accent-primary) hover:bg-(--bg-secondary) transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/francesco-di-vita-113355183/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-(--text-muted) hover:text-(--accent-primary) hover:bg-(--bg-secondary) transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a
          href="https://github.com/mister-nothing00"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-(--text-muted) hover:text-(--accent-primary) hover:bg-(--bg-secondary) transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-(--text-muted) hover:text-(--accent-primary) hover:bg-(--bg-secondary) transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="email"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>

        {/* Linea decorativa */}
        <div className="w-px h-8 bg-(--border-light)/50 mt-1"></div>
      </div>
    </section>
  );
}
