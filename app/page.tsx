import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
