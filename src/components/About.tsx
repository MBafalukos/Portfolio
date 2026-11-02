const stats = [
  { value: "4", label: "Production sites" },
  { value: "10", label: "Years teaching" },
  { value: "100+", label: "Students taught" },
];

const stacks = [
  {
    heading: "Building with",
    items: ["React", "TypeScript", "Next.js", "Tailwind", "WordPress"],
  },
  {
    heading: "Also work in",
    items: ["Python", "SQL", "C#", "Java", "R"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full scroll-mt-24 px-4 py-20 md:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2
          id="about-heading"
          className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          About <span className="text-[#EE7319]">me</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5 font-Manrope text-base font-light leading-relaxed text-white/70 md:text-lg">
            <p>
              I studied Applied Mathematical and Physical Sciences at the
              National Technical University of Athens, specialising in computer
              science and statistics, and wrote my thesis on embeddings of
              metric spaces into normed spaces.
            </p>
            <p>
              Then I spent close to a decade teaching maths and physics &mdash;
              over a hundred students, school and university level. The job was
              never really about the equations. It was about finding the one
              explanation that makes a hard idea click for the person in front
              of you.
            </p>
            <p>
              <span className="font-normal text-white">
                That turns out to be the same job as building an interface.
              </span>{" "}
              I moved into development in 2024, and I now design and maintain
              four production websites &mdash; a portfolio, two brand landing
              pages and an e-shop &mdash; handling the work end to end, from
              layout and copy through to deployment and analytics.
            </p>
          </div>

          <div className="space-y-10">
            <dl className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-3xl font-bold text-[#EE7319] md:text-4xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block font-Manrope text-xs font-light leading-snug text-white/50">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            {stacks.map((group) => (
              <div key={group.heading}>
                <h3 className="mb-3 font-Manrope text-xs uppercase tracking-[0.2em] text-white/40">
                  {group.heading}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-Manrope text-sm font-light text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
