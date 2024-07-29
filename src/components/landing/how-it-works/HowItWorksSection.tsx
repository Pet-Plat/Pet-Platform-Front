import React from "react";
import HowItWorksCard from "@/components/landing/how-it-works/HowItWorksCard.tsx";


// TODO: set type
export default function HowItWorksSection() {
    return (
        <div className="mb-36">
            <h2 className="container mb-8">Как это работает</h2>

            <div className="overflow-auto flex gap-4 px-5 md:container md:gap-6 md:flex-col">
                <div className="flex gap-4 md:gap-6 md:flex-1">
                    <HowItWorksCard
                        className="md:flex-4"
                        title="Поиск проектов"
                        description="Исследуйте наш каталог проектов и выберите тот, который вам интересен."
                    />
                    <HowItWorksCard
                        className="md:flex-2 lg:min-w-72"
                        title="Подача заявки"
                        description="Подайте заявку на участие в одном или нескольких проектах, которые вас заинтересовали."
                    />
                    <HowItWorksCard
                        className="md:flex-5"
                        title="Создание команды"
                        description="Мы подберём единомышленников, и вы начнёте работу над проектом. Не забывайте, что вы можете пригласить своих друзей в команду!"
                    />
                </div>

                <div className="flex flex-row gap-4 md:gap-6 md:flex-1">
                    <HowItWorksCard
                        className="flex-1"
                        title="Получите менторскую поддержку"
                        description="К вашей команде будет прикреплен наставник, который поможет организовать работу и будет направять вас."
                    />
                    <HowItWorksCard
                        className="flex-1"
                        title="Завершите проект"
                        description="Совершенствуйте себя, завершайте проект, получайте отзывы отментора и платформы, добавляйте проект в своё портфолио иполучайте предложения о работе или аутсорсе."
                    />
                </div>
            </div>
        </div>
    )
}