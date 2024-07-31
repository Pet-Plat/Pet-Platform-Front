import React from 'react';
import {PetProjectCardDto, PetProjectCardState, PetProjectDifficulty} from "@/components/common/pet-project/api.ts";
import {cn} from "@/lib/utils.ts";


interface PetProjectCardProps {
    // className?: string;
    data: PetProjectCardDto;
}

const PetProjectCard: React.FC<PetProjectCardProps> = ({ data }) => (
    <div className={cn(
        "flex flex-col justify-between",
        "bg-darkPurpleBlue rounded-2xl",
        "shadow-pet-project-card backdrop-blur-pet-project-card",
        "pl-4 pr-8 pt-4 pb-6 max-w-[335px]",
    )}>
        {/** description */}
        <div className="flex flex-col mb-10">
            {/** state & difficulty */}
            <div className="flex justify-between items-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-white rounded-lg text-darkblue px-3 py-2 min-w-56">
                    <img src="../../../../public/icons/landing/exclamation-mark.svg" alt="exclamation-mark-icon" className="icon"/>
                    <span className="text-sm">{stateToString(data.state)}</span>
                </div>
                <DifficultyDots difficulty={data.difficulty} />
            </div>

            {/** title & description */}
            <div>
                <h3 className="text-lg font-bold mb-2">{data.name}</h3>
                <p className="text-sm">{data.description}</p>
            </div>
        </div>

        {/** languages */}
        <div className="flex flex-wrap gap-2">
            {data.languages.map((language: string) => (
                <span className="bg-white px-3 py-[10px] rounded-lg text-darkblue text-center">{language}</span>
            ))}
        </div>
    </div>
);


interface DifficultyDotsProps {
    difficulty: PetProjectDifficulty;
}

const DifficultyDots: React.FC<DifficultyDotsProps> = ({ difficulty }) => (
    <div className="flex gap-1">
        <span className={cn(
            "block rounded-full w-2 h-2",
            (difficulty == PetProjectDifficulty.EASY) ? "bg-yellow" : "bg-white",
        )}></span>
        <span className={cn(
            "block rounded-full w-2 h-2",
            (difficulty == PetProjectDifficulty.MEDIUM) ? "bg-yellow" : "bg-white",
        )}></span>
        <span className={cn(
            "block rounded-full w-2 h-2",
            (difficulty == PetProjectDifficulty.DIFFICULT) ? "bg-yellow" : "bg-white",
        )}></span>
    </div>
)

function stateToString(state: PetProjectCardState): string {
    switch (state) {
        case PetProjectCardState.AWAITING_CREATORS:
            return "Ожидает создателей"
        case PetProjectCardState.AWAITING_REINFORCEMENT: return "Ожидает подкрепление"
        case PetProjectCardState.IN_DEVELOPMENT: return "В разработке"
    }
}


export default PetProjectCard
