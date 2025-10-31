"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function BottomNav() {
  const pathname = usePathname();
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: (active) => (
        <svg
          className="w-6 h-6"
          fill={active ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 0 : 2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: "about",
      label: "About",
      href: "/about",
      icon: (active) => (
        <svg
          className="w-6 h-6"
          fill={active ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 0 : 1}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
      hasSubmenu: true,
      submenu: [
        { label: "All Projects", href: "/projects" },
        { label: "Skills", href: "/skills" },
        { label: "Certificates", href: "/certificates" },
      ],
      icon: (active) => (
        <svg
          className="w-6 h-6"
          fill={active ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 0 : 2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "ambitions",
      label: "Ambitions",
      href: "/ambitions",
      icon: (active) => (
        <svg
          className="w-6 h-6"
          fill={active ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 0 : 2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Projects Submenu Overlay */}
      {showProjectsMenu && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[250]"
          onClick={() => setShowProjectsMenu(false)}
        />
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[300] bg-[var(--bg-primary)]/80 backdrop-blur-lg border-t border-[var(--border-light)] shadow-2xl">
        <div className="container max-w-2xl mx-auto">
          <div className="flex items-center justify-between py-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <div key={item.id} className="relative">
                  {/* Nav Item */}
                  {item.hasSubmenu ? (
                    <button
                      onClick={() => setShowProjectsMenu(!showProjectsMenu)}
                      className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                        active
                          ? "text-[var(--accent-primary)] scale-110"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:scale-105"
                      }`}
                    >
                      {item.icon(active)}
                      <span className="text-xs font-medium">{item.label}</span>

                      {/* Dropdown indicator */}
                      <svg
                        className={`w-3 h-3 absolute -top-1 right-2 transition-transform duration-300 ${
                          showProjectsMenu ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                        active
                          ? "text-[var(--accent-primary)] scale-110"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:scale-105"
                      }`}
                    >
                      {item.icon(active)}
                      <span className="text-xs font-medium">{item.label}</span>
                    </Link>
                  )}

                  {/* Active Indicator */}
                  {active && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                  )}

                  {/* Submenu */}
                  {item.hasSubmenu && showProjectsMenu && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setShowProjectsMenu(false)}
                          className={`block px-4 py-3 text-sm font-medium transition-colors ${
                            pathname === subItem.href
                              ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                              : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Spacer per evitare che il contenuto vada sotto la bottom nav */}
      <div className="h-20" />
    </>
  );
}
