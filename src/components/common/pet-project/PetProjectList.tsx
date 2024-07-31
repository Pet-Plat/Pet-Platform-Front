import React from 'react';
import PetProjectCard from "@/components/common/pet-project/PetProjectCard.tsx";
import {cn} from "@/lib/utils.ts";
import {PetProjectCardDto} from "@/components/common/pet-project/api.ts";


interface PetProjectListProps {
    className?: string;
    data: PetProjectCardDto[];
}

const PetProjectList: React.FC<PetProjectListProps> = ({ className, data }) => (
    <div className={cn(
        "container items-center flex flex-col gap-4",
        "overflow-auto md:gap-6 md:flex-row md:items-stretch",
        className,
    )}>
        {
            data.map((project: PetProjectCardDto) => (
                <PetProjectCard key={project.id} data={project}/>
            ))
        }
    </div>
);

export default PetProjectList;