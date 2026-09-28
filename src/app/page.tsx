import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import TechOverview from "@/components/sections/TechOverview/TechOverview";
import SelectedProjects from "@/components/sections/SelectedProjects/SelectedProjects";
import Experience from "@/components/sections/Experience/Experience";
import About from "@/components/sections/About/About";
import Teaching from "@/components/sections/Teaching/Teaching";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TechOverview />
        <About />
        <SelectedProjects />
        <Experience />
        <Teaching />
        <Contact />
      </main>
    </>
  );
}
