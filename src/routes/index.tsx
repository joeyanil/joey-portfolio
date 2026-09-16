import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { FooterSection } from "@/components/jack/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Joey · A | Full-Stack Developer",
      },
      {
        name: "description",
        content:
          "Joey · A — Full-stack developer building practical software and exploring the systems behind it.",
      },
      {
        property: "og:title",
        content: "Joey · A | Full-Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Joey · A — Full-stack developer building practical software and exploring the systems behind it.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
