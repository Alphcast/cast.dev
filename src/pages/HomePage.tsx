import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { GitHubReposSection } from '../components/GitHubReposSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { WhyHireMeSection } from '../components/WhyHireMeSection'
import { ContactSection } from '../components/ContactSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubReposSection />
      <ExperienceSection />
      <WhyHireMeSection />
      <ContactSection />
    </>
  )
}
