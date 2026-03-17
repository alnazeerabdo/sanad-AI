import ScrollAnimation from "@/components/scroll-animation";

export default function Partners() {
  const technologies = [
    "OpenAI",
    "Python",
    "TensorFlow",
    "LangChain",
    "Azure AI",
    "Google Cloud AI",
  ];

  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <p className="text-center text-sm text-muted-foreground mb-6">التقنيات اللي نشتغل فيها</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-xl font-semibold">{tech}</span>
                {index < technologies.length - 1 && (
                  <span className="hidden md:inline text-border mx-4">•</span>
                )}
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
