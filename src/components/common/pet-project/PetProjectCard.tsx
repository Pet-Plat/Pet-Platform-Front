import React from 'react';
import {PetProjectCardDto, PetProjectCardState, PetProjectDifficulty} from "@/components/common/pet-project/api.ts";
import {cn} from "@/lib/utils.ts";


interface PetProjectCardProps {
    className?: string;
    data: PetProjectCardDto;
}

const PetProjectCard: React.FC<PetProjectCardProps> = ({ className, data }) => (
    <div className={cn(
        "flex flex-col justify-between",
        "bg-darkPurpleBlue rounded-2xl",
        "shadow-pet-project-card backdrop-blur-pet-project-card",
        "pl-4 pr-8 pt-4 pb-6",
        "lg:p-6 lg:min-w-124 lg:min-h-106",
        className,
    )}>
        {/** description */}
        <div className="flex flex-col mb-10">
            {/** state & difficulty */}
            <div className="flex justify-between items-center gap-4 mb-4 md:mb-6">
                <div className="flex items-center gap-2 bg-white rounded-lg text-darkblue pl-3 pr-9 py-2">
                    <img src="../../../../public/icons/landing/exclamation-mark.svg" alt="exclamation-mark-icon" className="icon"/>
                    <span className="text-sm md:text-base">{stateToString(data.state)}</span>
                </div>
                <Difficulty difficulty={data.difficulty} />
            </div>

            {/** title & description */}
            <div>
                <h3 className="text-lg font-bold mb-2 md:text-2xl md:mb-4">{data.name}</h3>
                <p className="text-sm md:text-base">{data.description}</p>
            </div>
        </div>

        {/** languages & topics */}
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
                {data.languages.map((language: string, index: number) => (
                    <span key={index} className="bg-white px-3 py-[9px] rounded-lg text-darkblue text-center">{language}</span>
                ))}
            </div>
            <div className="hidden md:flex md:flex-wrap md:gap-2">
                {data.topics.map((topic: string, index: number) => (
                    <span key={index} className="bg-lightgray px-3 py-[9px] rounded-lg text-darkblue text-center">{topic}</span>
                ))}
            </div>
        </div>
    </div>
);


interface DifficultyDotsProps {
    difficulty: PetProjectDifficulty;
}

const Difficulty: React.FC<DifficultyDotsProps> = ({difficulty}) => {
    return (
        <div>
            {/** difficulty dots for smaller screens */}
            <div className="flex gap-1 md:hidden">
            <span className={cn(
                "block rounded-full w-2 h-2",
                "bg-yellow" /* every project is at least of EASY difficulty */,
            )}></span>
                <span className={cn(
                    "block rounded-full w-2 h-2",
                    ([PetProjectDifficulty.MEDIUM, PetProjectDifficulty.HARD].some(d => difficulty === d))
                        ? "bg-yellow"
                        : "bg-white",
                )}></span>
                <span className={cn(
                    "block rounded-full w-2 h-2",
                    (difficulty == PetProjectDifficulty.HARD) ? "bg-yellow" : "bg-white",
                )}></span>
            </div>

            {/** difficulty label for bigger screens */}
            <div className="hidden md:block px-3 py-[9px] bg-yellow rounded-lg">
            <span className="text-base text-darkblue">
                { (difficulty == PetProjectDifficulty.EASY) ? "Начальный" : "" }
                { (difficulty == PetProjectDifficulty.MEDIUM) ? "Средний" : "" }
                { (difficulty == PetProjectDifficulty.HARD) ? "Сложный" : "" }
            </span>
            </div>
        </div>
    )
}

function stateToString(state: PetProjectCardState): string {
    switch (state) {
        case PetProjectCardState.AWAITING_CREATORS:
            return "Ожидает создателей"
        case PetProjectCardState.AWAITING_REINFORCEMENT:
            return "Ожидает подкрепление"
        case PetProjectCardState.IN_DEVELOPMENT:
            return "В разработке"
    }
}


export default PetProjectCard
