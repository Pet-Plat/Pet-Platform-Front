import { MainButton } from "@/components/ui/custom/button.main.tsx";

const AboutPetPlat = () => {
  return (
    <div className={"container mt-52"}>
      <img
        src={"/glows/landing/LeftGlow.svg"}
        className={"absolute -z-10 left-0 top-0  hidden lg:block w-fit"}
        alt={""}
      />
      <img
        src={"/glows/landing/LeftGlowMobile.svg"}
        className={"absolute -z-10 left-0 top-0  lg:hidden w-full"}
        alt={""}
      />
      <div className={"flex flex-col gap-6"}>
        <h1 className={"mb-0 hidden lg:block"}>
          Pet-Plat — это уникальная платформа <br /> для IT-специалистов всех
          уровней.
        </h1>
        <h1 className={"mb-0 lg:hidden"}>
          Pet-Plat — это <br /> уникальная платформа для IT-специалистов всех
          уровней.
        </h1>
        <p>
          Поможем найти проекты, объединиться в команды <br /> и карьерно расти
          при поддержке менторов.
        </p>
        <div className={"lg:block flex justify-center"}>
          <MainButton>Выбрать проект</MainButton>
        </div>
      </div>
      <img
        src={"/glows/landing/RightGlow.svg"}
        className={"absolute -z-10 right-0 -top-24 hidden lg:block w-fit"}
        alt={""}
      />
      <img
        src={"/glows/landing/RightGlowMobile.svg"}
        className={"absolute -z-10 right-0 -top-24  lg:hidden w-full"}
        alt={""}
      />
    </div>
  );
};

export default AboutPetPlat;
