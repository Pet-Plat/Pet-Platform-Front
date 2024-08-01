import { navBarLinks } from "@/data/links.ts";
import { cn } from "@/lib/utils.ts";

const NavBar = () => {
  const signButton =
    "border-[1px] border-white p-6 pt-3 pb-3 rounded-full text-[1rem] hover:bg-[#ABABAB] duration-500 hover:text-black";
  return (
    <div className={"container pt-12 flex justify-between"}>
      <div className={"flex gap-3 items-center"}>
        <div className={"w-10 h-10 bg-green rounded-md flex justify-center"}>
          <img
            src={"/logo/logo.png"}
            className={"aspect-square object-contain"}
          />
        </div>
        <p className={"font-bold text-[1.5rem]"}>Pet-Plat</p>
      </div>
      <div className={"flex gap-5 items-center"}>
        {navBarLinks.map((link) => (
          <div className={"cursor-pointer link-hover-underline"}>
            {link.name}
          </div>
        ))}
        <button className={signButton}>Зарегистрироваться</button>
        <button className={cn(signButton, "text-black bg-white")}>Войти</button>
      </div>
    </div>
  );
};

export default NavBar;
