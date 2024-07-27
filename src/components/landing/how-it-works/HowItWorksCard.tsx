import React from "react";

type T = { title: string; description: string }

export default function HowItWorksCard({ title, description }: T) {
    return (
        <div className="p-4 border-white border-2 rounded-2xl min-w-60 bg-darkblue">
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <p className="text-sm">{description}</p>
        </div>
    )
}