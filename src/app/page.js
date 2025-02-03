import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#000000] to-[#0a0402] text-white min-h-screen">
      {/* Header */}
      <Header className="sticky top-0 left-0 w-full z-50" />

      {/* Sections */}
      <section id="intro" className="md:px-6 md:py-12">
        <Intro />
      </section>
      <section id="about" className="px-6 py-12">
        <About />
      </section>
      {/* <section id="skills" className="px-6 py-12">
        <Skills />
      </section> */}
      <section id="projects" className="px-6 py-12">
        <Projects />
      </section>
      <section id="contact" className="px-6 py-12">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
