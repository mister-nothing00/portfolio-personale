"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  Layers } from "lucide-react";
import Image from "next/image";

export default function BottomNav() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
    {
      id: "about",
      label: "About",
      href: "/about",
    },
   
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
      submenu: [
        { label: "All Projects", href: "/projects" },
        { label: "Skills", href: "/skills" },
        { label: "Certificates", href: "/certificates" },
      ],
    },
    {
      id: "ambitions",
      label: "Ambitions",
      href: "/ambitions",
    },
     {
      id: "contact",
      label: "Contact",
      href: "/contact",
    },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Menu Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[250]"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-300 bg-(--bg-primary)/80 backdrop-blur-lg border-t border-(--border-light) shadow-2xl">
        <div className="container max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Logo - Left */}
            <Link
              href="/"
              className="flex items-center group relative"
            >
              <div className="relative">
                <Image
                  src="/logo/icon0.svg"
                  alt="Francesco Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 bg-white  rounded-full relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
                </div>
            </Link>

            {/* Menu Button - Right */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="relative group"
              aria-label="Menu"
            >
              <div
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 relative z-10 ${
                  showMenu
                    ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 scale-110"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:scale-105"
                }`}
              >
                <Layers className="w-6 h-6" />
              </div>
              {/* Border effect */}
              <div
                className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                  showMenu
                    ? "border-[var(--accent-primary)] scale-105"
                    : "border-[var(--accent-primary)]/90 group-hover:border-[var(--accent-primary)]/60"
                }`}
              />
              {/* Glow when active */}
              {showMenu && (
                <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-xl blur-lg animate-pulse-slow" />
              )}
            </button>

            {/* Main Menu */}
            {showMenu && (
              <div className="absolute bottom-full right-4 mb-3 w-64 bg-[var(--bg-primary)]/95 backdrop-blur-xl border-2 border-[var(--accent-primary)]/30 rounded-xl shadow-2xl overflow-hidden">
                {navItems.map((item, index) => (
                  <div key={item.id}>
                    {/* Main Nav Item */}
                    <Link
                      href={item.href}
                      onClick={() => setShowMenu(false)}
                      className={`block px-5 py-3 text-base font-semibold transition-all duration-300 animate-slide-in-right relative group ${
                        isActive(item.href)
                          ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {item.label}
                      {/* Active indicator line */}
                      {isActive(item.href) && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-r-full" />
                      )}
                    </Link>

                    {/* Submenu Items */}
                    {item.submenu && (
                      <div className="bg-[var(--bg-secondary)]/30 border-l-2 border-[var(--accent-primary)]/20 ml-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setShowMenu(false)}
                            className={`block pl-8 pr-5 py-2.5 text-sm font-medium transition-all duration-300 animate-slide-in-right relative ${
                              pathname === subItem.href
                                ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/5"
                                : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50"
                            }`}
                            style={{
                              animationDelay: `${
                                (index + subIndex + 1) * 50
                              }ms`,
                            }}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-[var(--accent-primary)] text-xs font-bold">
                                →
                              </span>
                              {subItem.label}
                            </span>
                            {/* Mini indicator for active subitem */}
                            {pathname === subItem.href && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[var(--accent-primary)] rounded-r-full" />
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer per evitare che il contenuto vada sotto la bottom nav */}
      <div className="h-20" />

      <style jsx global>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}