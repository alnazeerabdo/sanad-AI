"use client";

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
  return (
    <section className="py-12 border-y border-border bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <p className="text-center text-sm text-muted-foreground mb-8">
            التقنيات اللي نشتغل فيها
          </p>
        </ScrollAnimation>

        {/* CSS-based infinite scroll carousel */}
        <div className="relative overflow-hidden" dir="ltr">
          <div className="flex items-center gap-16 animate-scroll-x hover:[animation-play-state:paused]">
            {/* First set */}
            {technologies.map((tech, index) => (
              <div
                key={`a-${index}`}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 md:h-12 w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
            {/* Duplicated set for seamless loop */}
            {technologies.map((tech, index) => (
              <div
                key={`b-${index}`}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
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
      </div>
    </section>
  );
}
