import { cn } from "@/lib/utils";
import React from "react";
import HowItWorksCard from "@/components/landing/how-it-works/HowItWorksCard.tsx";


const cards = [
    {
        id: 1,
        title: "Поиск проектов",
        description: "Исследуйте наш каталог проектов и выберите тот, который вам интересен.",
    },
    {
        id: 2,
        title: "Подача заявки",
        description: "Подайте заявку на участие в одном или нескольких проектах, которые вас заинтересовали.",
    },
    {
        id: 3,
        title: "title 3",
        description: "Lorem Ipsum",
    }
];

export default function HowItWorksSection() {
    return (
        <div className={cn("")}>
            <h2 className="container mb-8">Как это работает</h2>

            <div className={cn("grid grid-flow-col gap-4 overflow-auto md:container")}>
                {cards.map(card => (
                    <HowItWorksCard key={card.id} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    )
}