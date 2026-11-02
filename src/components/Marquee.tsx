import {
  FaHtml5,
  FaDatabase,
  FaWordpress,
  FaAws,
  FaPython,
} from "react-icons/fa";

export default function Marquee() {
  const techStack = [
    { name: "HTML", icon: FaHtml5 },
    { name: "SQL", icon: FaDatabase },
    { name: "WordPress", icon: FaWordpress },
    { name: "Cloud", icon: FaAws },
    { name: "Python", icon: FaPython },
  ];

  // 1. Duplicate the stack 4 times to ensure it covers even ultra-wide screens
  const duplicatedStack = [
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,
  ];

  return (
    <div className="absolute bottom-24 left-0 right-0 w-full overflow-hidden py-5 flex ">
      {/* 2. Plain CSS animation (see .animate-marquee in index.css) rather than
          framer-motion's x prop: this loop never stops and never gets
          interrupted, so it belongs off the main thread. Shifting by -50%
          lands on the identical second half, which is why the loop is seamless. */}
      <div className="flex w-max animate-marquee">
        {duplicatedStack.map((tech, idx) => (
          <div
            key={idx}
            // 3. Added flex-shrink-0 so the browser never accidentally squishes the items
            className="flex flex-shrink-0 flex-col md:flex-row items-center justify-center gap-x-3 px-8 md:px-12 font-medium"
          >
            <tech.icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#EE7319]" />
            <span className="text-white text-sm md:text-base mt-2 md:mt-0 uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
