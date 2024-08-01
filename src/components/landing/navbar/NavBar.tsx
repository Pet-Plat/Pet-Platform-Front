import { navBarLinks } from "@/data/links.ts";
import { cn } from "@/lib/utils.ts";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/custom/sheet.landing.tsx";

const NavBar = () => {
  const signButton =
    "border-[1px] border-white p-2 pl-5 pr-5 lg:p-6 lg:pt-3 lg:pb-3 rounded-full text-[1rem] hover:bg-[#ABABAB] duration-500 hover:text-black ";
  return (
    <div className={"container lg:pt-12 pt-8 flex justify-between"}>
      <div className={"flex gap-3 items-center"}>
        <div className={"w-10 h-10 bg-green rounded-md flex justify-center"}>
          <img
            src={"/logo/logo.png"}
            className={"aspect-square object-contain"}
          />
        </div>
        <p className={"font-bold text-2xl"}>Pet-Plat</p>
      </div>
      <div className={"flex gap-5"}>
        <div className={"lg:flex gap-5 items-center hidden"}>
          {navBarLinks.map((link) => (
            <div className={"cursor-pointer link-hover-underline"}>
              {link.name}
            </div>
          ))}
        </div>
        <div className={"flex gap-5 items-center"}>
          <button className={cn(signButton, "hidden lg:block")}>
            Зарегистрироваться
          </button>
          <button className={cn(signButton, "text-black bg-white")}>
            Войти
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className={"w-8 h-8 lg:hidden cursor-pointer"} />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle className={"flex gap-3 items-center"}>
                  <div
                    className={
                      "w-12 h-12 bg-green rounded-lg flex justify-center"
                    }
                  >
                    <img
                      src={"/logo/logo.png"}
                      className={"aspect-square object-contain"}
                    />
                  </div>
                  Pet-Plat
                </SheetTitle>
              </SheetHeader>
              <div className={"flex flex-col gap-8 mt-3"}>
                {navBarLinks.map((link) => (
                  <a className={"font-bold text-lg"}>{link.name}</a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
