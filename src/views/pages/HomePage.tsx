import { cn } from "@/lib/utils.ts";
import { Factory } from "lucide-react";
import { Calendar } from "@/components/ui/calendar.tsx";
import { useState } from "react";

const HomePage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <main className={cn("mt-20")}>
      <section>
        <div
          className={
            "flex justify-center items-center gap-16 lg:flex-row flex-col"
          }
        >
          <div className="flex items-center gap-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Under construction
            </h2>
            <Factory className={"w-10 h-10"} />
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
