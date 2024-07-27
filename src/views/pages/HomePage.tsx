import { cn } from "@/lib/utils.ts";

const HomePage = () => {
  return (
    <main className={cn("mt-20")}>
      <section>
        <div
          className={
            "flex justify-center items-center gap-16 lg:flex-row flex-col"
          }
        >
          <div className="flex items-center gap-4">
            <h2 className="scroll-m-20 border-b pb-20 tracking-tight first:mt-0 text-4xl">
              Under construction
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
