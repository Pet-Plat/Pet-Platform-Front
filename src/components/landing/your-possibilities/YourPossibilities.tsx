import { possibilities } from "@/data/possibilities.ts";
import { Check } from "lucide-react";

const YourPossibilities = () => {
  const cardLine =
    "grid lg:grid-cols-[0.05fr_0.7fr] grid-cols-[0.1fr_1fr] lg:gap-1 gap-2 text-sm lg:text-base";
  return (
    <div className={"container"}>
      <h2>Ваши возможности</h2>
      <div className={"grid grid-cols-1 gap-7 lg:grid-cols-2"}>
        {possibilities.map((possibility) => (
          <div
            className={
              "bg-purple lg:p-9 p-7 lg:rounded-2xl rounded-xl flex flex-col gap-6"
            }
          >
            <h3>{possibility.name}</h3>
            {possibility.lines.map((line, index) => (
              <div key={index} className={cardLine}>
                <Check />
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPossibilities;
