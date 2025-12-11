import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
