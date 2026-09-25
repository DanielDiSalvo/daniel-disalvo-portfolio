import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import TechOverview from "@/components/sections/TechOverview/TechOverview";
import SelectedProjects from "@/components/sections/SelectedProjects/SelectedProjects";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TechOverview />
        <SelectedProjects />
      </main>
    </>
  );
}
