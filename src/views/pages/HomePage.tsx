import HowItWorksSection from "@/components/landing/how-it-works/HowItWorksSection.tsx";
import PetProjectsSection from "@/components/landing/pet-projects/PetProjectsSection.tsx";
import AboutPetPlat from "@/components/landing/about/AboutPetPlat.tsx";
import { cn } from "@/lib/utils.ts";
import NavBar from "@/components/landing/navbar/NavBar.tsx";
import YourPossibilities from "@/components/landing/your-possibilities/YourPossibilities.tsx";

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <section
        className={cn(
          "relative",
          "text-base",
          "py-8",
          "max-w-none px-0",
          "space-y-[42px] md:space-y-[80px]",
        )}
      >
        <AboutPetPlat />
      </section>
      <section>
        <YourPossibilities />
      </section>
      <section>
        <PetProjectsSection />
      </section>
      <section>
        <HowItWorksSection />
      </section>
    </main>
  );
};

export default HomePage;
