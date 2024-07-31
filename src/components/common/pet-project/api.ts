

export enum PetProjectCardState {
    AWAITING_CREATORS,
    AWAITING_REINFORCEMENT,
    IN_DEVELOPMENT,
}

export enum PetProjectDifficulty {
    EASY,
    MEDIUM,
    DIFFICULT,
}

export interface PetProjectCardDto {
    id: number;
    name: string;
    description: string;
    difficulty: PetProjectDifficulty;
    state: PetProjectCardState;
    topics: string[];
    languages: string[];
}