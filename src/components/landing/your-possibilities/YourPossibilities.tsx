import { possibilities } from "@/data/possibilities.ts";
import { Check } from "lucide-react";

const YourPossibilities = () => {
  return (
    <div className={"container"}>
      <h2>Ваши возможности</h2>
      <div className={"grid grid-cols-2 gap-7"}>
        {possibilities.map((possibility) => (
          <div className={"bg-purple p-9 rounded-2xl flex flex-col gap-6"}>
            <h3>{possibility.name}</h3>
            <div className={"grid grid-cols-[0.08fr_0.7fr]"}>
              <Check />
              {possibility.line1}
            </div>
            <div className={"grid grid-cols-[0.08fr_0.7fr]"}>
              <Check />
              {possibility.line1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPossibilities;
