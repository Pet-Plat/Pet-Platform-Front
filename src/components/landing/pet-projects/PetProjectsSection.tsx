import React, { useState } from "react";
import { cn } from "@/lib/utils.ts";
import PetProjectList from "@/components/common/pet-project/PetProjectList.tsx";
import {
  PetProjectCardDto,
  PetProjectCardState,
  PetProjectDifficulty,
} from "@/components/common/pet-project/api.ts";
import { Button } from "@/components/ui/button.tsx";

interface PetProjectsSectionProps {
  className?: string;
}

const PetProjectsSection: React.FC<PetProjectsSectionProps> = ({
  className,
}) => {
  const [projects, _] = useState<PetProjectCardDto[]>([
    {
      id: 1,
      name: "Приложение для скорочтения",
      description:
        "Приложение/онлайн-сервис, который помогает пользователям тренировать навыки скорочтения. Слова показываются по одному и очень быстро. Пользователи могут читать встроенные книги или добавлять свои собственные.",
      difficulty: PetProjectDifficulty.EASY,
      state: PetProjectCardState.AWAITING_CREATORS,
      topics: ["Мобильная разработка", "Веб-разработка"],
      languages: ["Go", "Python", "Java", "C++", "JavaScript"],
    },
    {
      id: 2,
      name: "Бот для тренировки решения бизнес-кейсов",
      description:
        "Телеграм бот, который помогает пользователям тренироваться в решении бизнес-кейсов. Бот даёт обратную связь по каждому решению.",
      difficulty: PetProjectDifficulty.MEDIUM,
      state: PetProjectCardState.AWAITING_REINFORCEMENT,
      topics: ["Телеграм боты", "Машинное обучение"],
      languages: ["Python"],
    },
    {
      id: 3,
      name: "Бот-калькулятор школьных оценок",
      description:
        "Телеграм бот, который позволяет пользователям получать уведомления о новых оценках из электронного дневника, а также рассчитывать изменения среднего при добавлении новых оценок.",
      difficulty: PetProjectDifficulty.HARD,
      state: PetProjectCardState.IN_DEVELOPMENT,
      topics: ["Телеграм боты", "Парсинг"],
      languages: ["Python"],
    },
  ]);

  return (
    <>
      <h2 className="container">Галерея pet-проектов</h2>
      <PetProjectList className="mb-4 md:mb-8" data={projects} />

      <div className="container flex justify-center">
        <Button>Смотреть все проекты</Button>
      </div>
    </>
  );
};

export default PetProjectsSection;
