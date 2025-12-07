
import SkillsSection from "@/components/home/skills-section";
import HeroSection from "../components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ProjectsSection from "@/components/home/projects-section";
import EducationSection from "@/components/home/education-section";
import ExperienceSection from "@/components/home/experience-section";
import ContactSection from "@/components/home/contact-section";
import BlogsSection from "@/components/home/blogs-section";
import ServicesSection from "@/components/home/services-section";


export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection/>
      <ExperienceSection />
      <ProjectsSection/>
      <EducationSection/>
      <BlogsSection/>
     <ContactSection/>

    </div>
  );
}