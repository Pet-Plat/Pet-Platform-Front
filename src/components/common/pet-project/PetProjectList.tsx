import React from "react";
import PetProjectCard from "@/components/common/pet-project/PetProjectCard.tsx";
import { cn } from "@/lib/utils.ts";
import { PetProjectCardDto } from "@/components/common/pet-project/api.ts";

interface PetProjectListProps {
  className?: string;
  data: PetProjectCardDto[];
}

const PetProjectList: React.FC<PetProjectListProps> = ({ className, data }) => (
  <div
    className={cn(
      "container items-center overflow-auto flex flex-col gap-4",
      "md:gap-6 lg:flex-row lg:items-stretch",
      "xl:flex-wrap",
      className,
    )}
  >
    {data.map((project: PetProjectCardDto) => (
      <PetProjectCard
        className="sm:max-w-165 xl:flex-1"
        key={project.id}
        data={project}
      />
    ))}
  </div>
);

export default PetProjectList;
