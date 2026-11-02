const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Plain anchors: html has scroll-behavior: smooth (behind a reduced-motion
// query), so the scrolling comes for free and still works without JS.
export default function SiteNav() {
  return (
    <nav
      aria-label="Sections"
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0"
    >
      <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1 shadow-2xl backdrop-blur-md">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="block rounded-full px-4 py-2 font-Manrope text-xs font-light uppercase tracking-[0.15em] text-white/60 transition-[color,background-color,transform] duration-150 ease-out hover:bg-white/10 hover:text-white active:scale-[0.97] md:text-sm"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
