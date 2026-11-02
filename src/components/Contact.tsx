import cvFile from "../assets/CV_MichalisBafaloukos_ENG.pdf";

const EMAIL = "m.bafalukos@gmail.com";

// A real form would need a server to post to, and this site is static on
// GitHub Pages. A mailto opens the visitor's own client and always works.
const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}?subject=Project enquiry`,
    primary: true,
  },
  { label: "LinkedIn", value: "in/mbafalukos", href: "https://linkedin.com/in/mbafalukos" },
  { label: "GitHub", value: "MBafalukos", href: "https://github.com/MBafalukos" },
  { label: "CV", value: "Download PDF", href: cvFile },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full scroll-mt-24 px-4 pb-20 pt-10 md:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="mb-4 inline-flex items-center gap-2 font-Manrope text-xs uppercase tracking-[0.2em] text-white/50">
            <span className="h-2 w-2 rounded-full bg-[#EE7319]" />
            Available for freelance work
          </p>

          <h2
            id="contact-heading"
            className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Got something you need <span className="text-[#EE7319]">built</span>?
          </h2>

          <p className="mb-10 max-w-2xl font-Manrope text-base font-light leading-relaxed text-white/60 md:text-lg">
            Based in Athens, working with clients anywhere. Tell me what you
            have in mind and I will come back to you with an honest answer on
            scope and timing.
          </p>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  {...(c.label === "CV" ? { download: true } : {})}
                  className={[
                    "group flex h-full flex-col justify-between gap-6 rounded-xl border p-5",
                    "transition-[background-color,border-color,transform] duration-150 ease-out",
                    "active:scale-[0.98]",
                    c.primary
                      ? "border-[#EE7319]/40 bg-[#EE7319]/10 hover:bg-[#EE7319]/20"
                      : "border-white/10 bg-white/5 hover:bg-white/10",
                  ].join(" ")}
                >
                  <span className="font-Manrope text-xs uppercase tracking-[0.2em] text-white/40">
                    {c.label}
                  </span>
                  <span className="break-words font-Manrope text-sm font-light text-white/90">
                    {c.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
