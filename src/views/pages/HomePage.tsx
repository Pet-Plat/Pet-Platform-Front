import HowItWorksSection from "@/components/landing/how-it-works/HowItWorksSection.tsx";
import PetProjectsSection from "@/components/landing/pet-projects/PetProjectsSection.tsx";
import React from "react";


const HomePage: React.FC<void> = () => {
  return (
    <main>
        <PetProjectsSection className="mb-18 md:mb-30" />
        <HowItWorksSection className="mb-18 md:mb-36" />
    </main>
  );
};

export default HomePage;
