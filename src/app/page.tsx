import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import TechOverview from "@/components/sections/TechOverview/TechOverview";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TechOverview />
      </main>
    </>
  );
}
