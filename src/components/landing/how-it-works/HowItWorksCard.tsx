import { cn } from "@/lib/utils.ts";

type T = { title: string; description: string; className: string };

export default function HowItWorksCard({ className, title, description }: T) {
  return (
    <div
      className={cn(
        "p-4 border-white border-2 rounded-2xl min-h-48 min-w-60 bg-darkblue",
        className,
      )}
    >
      <h4 className="text-lg font-bold mb-2 md:text-2xl md:mb-4">{title}</h4>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
}
