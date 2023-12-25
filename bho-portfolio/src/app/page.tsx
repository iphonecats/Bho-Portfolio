import HomeSection from "./components/HomeSection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import CatImageGenerator from "./components/CatImageGenerator"
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Brandon Ho',
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-3 sm:px-6 md:max-w-5xl">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <CatImageGenerator />
    </main>
  )
}
