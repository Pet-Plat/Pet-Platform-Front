const AboutPetPlat = () => {
  return (
    <div className={"container mt-72"}>
      <img
        src={"/glows/landing/LeftGlow.svg"}
        className={"absolute -z-10 left-0 top-12 blur-md"}
        alt={""}
      />
      <div className={"flex flex-col gap-6"}>
        <h1 className={"mb-0"}>
          Pet-Plat — это уникальная платформа <br /> для IT-специалистов всех
          уровней.
        </h1>
        <p>
          Поможем найти проекты, объединиться в команды <br /> и карьерно расти
          при поддержке менторов.
        </p>
        <button className={"main-button"}>Выбрать проект</button>
      </div>
      <img
        src={"../glows/landing/RightGlow.svg"}
        className={"absolute -z-10 right-0 -top-24 blur-md"}
        alt={""}
      />
    </div>
  );
};

export default AboutPetPlat;
