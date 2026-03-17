"use client";

import { useEffect, useRef } from "react";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const technologies = [
  { name: "OpenAI", logo: `${basePath}/companylogos/openAI.png` },
  { name: "Claude AI", logo: `${basePath}/companylogos/claude-ai.png` },
  { name: "Google", logo: `${basePath}/companylogos/Google.png` },
  { name: "Google Cloud", logo: `${basePath}/companylogos/Google_Cloud.png` },
  { name: "LangChain", logo: `${basePath}/companylogos/langchain-1.svg` },
  { name: "Python", logo: `${basePath}/companylogos/Python.png` },
  { name: "N8n", logo: `${basePath}/companylogos/N8n.png` },
  { name: "CrewAI", logo: `${basePath}/companylogos/crewai.png` },
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollContainer.scrollWidth > 0) {
        // Reset when we've scrolled half (since we duplicate items)
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(animate); };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate items for seamless infinite scroll
  const allItems = [...technologies, ...technologies];

  return (
    <section className="py-12 border-y border-border bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <p className="text-center text-sm text-muted-foreground mb-8">
            التقنيات اللي نشتغل فيها
          </p>
        </ScrollAnimation>

        <div
          ref={scrollRef}
          className="flex items-center gap-12 overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {allItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 md:h-12 w-auto max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
