import cvFile from "../assets/CV_MichalisBafaloukos_ENG.pdf";

export default function QuickLinks() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/MBafalukos",
      // GitHub SVG icon
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mbafalukos",
      // LinkedIn SVG icon
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:m.bafalukos@gmail.com?subject=Reaching out from your Portfolio",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      name: "CV",
      url: cvFile,
      icon: (
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
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="fixed z-50 flex
      /* MOBILE: Horizontal pill at the bottom center */
      bottom-6 left-1/2 -translate-x-1/2 flex-row 
      /* DESKTOP: Vertical pill on the middle left */
      md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 md:flex-col md:translate-x-0
      gap-4 p-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full shadow-2xl"
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name === "Email" ? "_self" : "_blank"}
          rel="noreferrer"
          aria-label={link.name}
          className="relative group p-2 text-white/60 hover:text-[#EE7319] transition-colors duration-300 flex items-center justify-center"
        >
          {link.icon}

          {/* Desktop Hover Tooltip (Hidden on Mobile) */}
          <span className="absolute hidden md:block left-full ml-4 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150 ease-out">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
}
