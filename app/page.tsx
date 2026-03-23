import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Stats from "@/components/stats";
import Process from "@/components/process";
import WhyUs from "@/components/why-us";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import ServicesPreview from "@/components/services-preview";
import ProjectsPreview from "@/components/projects-preview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <Stats />
      <ServicesPreview />
      <ProjectsPreview />
      <Process />
      <WhyUs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
