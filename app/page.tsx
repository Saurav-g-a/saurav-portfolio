import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollEffects from "@/components/ScrollEffects";
import Skills from "@/components/Skills";
import { Section } from "@/components/ui";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-4 top-[-60px] z-[100] rounded-lg bg-accent px-3.5 py-2.5 font-semibold text-white focus:top-4"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <span className="absolute -left-[140px] -top-[160px] h-[520px] w-[520px] animate-drift rounded-full bg-[radial-gradient(circle,var(--accent),transparent_65%)] opacity-55 blur-[90px] [:root[data-theme=light]_&]:opacity-25" />
        <span
          className="absolute -right-[160px] top-[120px] h-[460px] w-[460px] animate-drift rounded-full bg-[radial-gradient(circle,var(--accent-2),transparent_65%)] opacity-55 blur-[90px] [:root[data-theme=light]_&]:opacity-25"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Section
          id="projects"
          index="03"
          title="Selected work"
          sub="Twelve production projects across Shopify apps, SaaS platforms and jewellery storefronts."
        >
          <Projects />
        </Section>
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
      <ScrollEffects />
    </>
  );
}
