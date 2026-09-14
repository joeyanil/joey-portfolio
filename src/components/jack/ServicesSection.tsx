import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    n: "01",
    name: "Software Development",
    desc: "Building reliable, well-structured software solutions tailored to real-world problems, with a focus on clean code and maintainability.",
  },
  {
    n: "02",
    name: "Web Development",
    desc: "Designing and developing modern, responsive websites and web applications using current frameworks and best practices.",
  },
  {
    n: "03",
    name: "Desktop Application Development",
    desc: "Creating efficient cross-platform desktop applications with intuitive interfaces and solid performance.",
  },
  {
    n: "04",
    name: "Database Design & Management",
    desc: "Designing, structuring, and managing databases to ensure data integrity, scalability, and efficient querying.",
  },
  {
    n: "05",
    name: "Technical Problem Solving",
    desc: "Analyzing complex technical challenges and delivering clear, efficient, and well-thought-out solutions.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C]">
      <div
        className="
          max-w-7xl mx-auto
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border border-white/10
          bg-[#0C0C0C]
          px-6 sm:px-8 md:px-12
          py-12 sm:py-16 md:py-20
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
        "
      >
        {/* Title */}
        <FadeIn y={40}>
          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              tracking-tight
              text-center
              mb-16 sm:mb-20 md:mb-28
              text-white
            "
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
            }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services */}
        <div className="max-w-5xl mx-auto">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.1} y={30}>
              <div
                className="
                  group
                  flex flex-col md:flex-row
                  md:items-center
                  gap-6 sm:gap-10 md:gap-14
                  py-8 sm:py-10 md:py-12
                  px-4 md:px-6
                  rounded-3xl
                  border border-transparent
                  transition-all duration-300
                  hover:bg-white/5
                  hover:border-white/10
                  hover:backdrop-blur-sm
                  hover:-translate-y-1
                "
                style={{
                  borderTop:
                    i === 0
                      ? "1px solid rgba(255,255,255,0.12)"
                      : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {/* Number */}
                <div
                  className="
                    font-black
                    shrink-0
                    transition-all duration-300
                    group-hover:opacity-40
                  "
                  style={{
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div
                    className="
                      font-medium
                      uppercase
                      transition-all duration-300
                      group-hover:translate-x-2
                    "
                    style={{
                      color: "#FFFFFF",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.name}
                  </div>

                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{
                      color: "#FFFFFF",
                      opacity: 0.65,
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}