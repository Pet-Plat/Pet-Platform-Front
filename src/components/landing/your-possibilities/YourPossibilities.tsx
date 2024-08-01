import { possibilities } from "@/data/possibilities.ts";
import { Check } from "lucide-react";

const YourPossibilities = () => {
  return (
    <div className={"container"}>
      <h2>Ваши возможности</h2>
      <div className={"grid grid-cols-1 gap-7 lg:grid-cols-2"}>
        {possibilities.map((possibility) => (
          <div className={"bg-purple p-9 rounded-2xl flex flex-col gap-6"}>
            <h3>{possibility.name}</h3>
            <div
              className={
                "grid lg:grid-cols-[0.05fr_0.7fr] grid-cols-[0.1fr_1fr] gap-1"
              }
            >
              <Check />
              {possibility.line1}
            </div>
            <div
              className={
                "grid lg:grid-cols-[0.05fr_0.7fr] grid-cols-[0.1fr_1fr] gap-1"
              }
            >
              <Check />
              {possibility.line2}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPossibilities;
