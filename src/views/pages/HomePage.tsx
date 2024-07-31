import HowItWorksSection from "@/components/landing/how-it-works/HowItWorksSection.tsx";
import PetProjectList from "@/components/common/pet-project/PetProjectList.tsx";
import {PetProjectCardDto, PetProjectCardState, PetProjectDifficulty} from "@/components/common/pet-project/api.ts";
import { useState } from "react";

const HomePage = () => {
    const [projects, _] = useState<PetProjectCardDto[]>([
        {
            id: 1,
            name: "Приложение для скорочтения",
            description: "Приложение/онлайн-сервис, который помогает пользователям тренировать навыки скорочтения. Слова показываются по одному и очень быстро. Пользователи могут читать встроенные книги или добавлять свои собственные.",
            difficulty: PetProjectDifficulty.EASY,
            state: PetProjectCardState.AWAITING_CREATORS,
            topics: ["Мобильная разработка", "Веб-разработка"],
            languages: ["Go", "Python", "Java", "C++", "JavaScript"],
        },
        {
            id: 2,
            name: "Бот для тренировки решения бизнес-кейсов",
            description: "Телеграм бот, который помогает пользователям тренироваться в решении бизнес-кейсов. Бот даёт обратную связь по каждому решению.",
            difficulty: PetProjectDifficulty.EASY,
            state: PetProjectCardState.AWAITING_CREATORS,
            topics: ["Телеграм боты", "Машинное обучение"],
            languages: ["Python"],
        },
        {
            id: 3,
            name: "Бот-калькулятор школьных оценок",
            description: "Телеграм бот, который позволяет пользователям получать уведомления о новых оценках из электронного дневника, а также рассчитывать изменения среднего при добавлении новых оценок.",
            difficulty: PetProjectDifficulty.EASY,
            state: PetProjectCardState.AWAITING_CREATORS,
            topics: ["Телеграм боты", "Парсинг"],
            languages: ["Python"],
        }
    ]);

  return (
    <main>
        <PetProjectList className="mb-18 md:mb-32" data={projects} />

        <HowItWorksSection className="mb-18 md:mb-36" />
    </main>
  );
};

export default HomePage;
