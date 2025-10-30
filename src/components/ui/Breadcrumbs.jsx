import Link from 'next/link'

/**
 * Breadcrumbs Component
 * Navigazione gerarchica per migliorare UX e SEO
 * 
 * @param {Array} items - Array di breadcrumb items
 * @example
 * <Breadcrumbs items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'About', href: '/about' }
 * ]} />
 */
export default function Breadcrumbs({ items = [] }) {
  // Se non ci sono items, non mostrare nulla
  if (!items || items.length === 0) return null

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-4 animate-fade-in "
    >
      <ol 
        className="flex justify-start  gap-2 text-sm "
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={item.href || index}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {/* Link o testo */}
              {isLast ? (
                <span
                  className="font-medium text-[var(--text-primary)]"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  
                  {/* Separator */}
                  <svg 
                    className="w-4 h-4 text-[var(--text-muted)]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </>
              )}

              {/* Schema.org position */}
              <meta itemProp="position" content={index + 1} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}