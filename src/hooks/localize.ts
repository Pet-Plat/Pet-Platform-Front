interface LocaleObject {
  [key: string]: string;
}

const translations: LocaleObject = {
  Registration: "Регистрация",
  "Sign-in": "Вход",
};

// TODO: turn it into a hook (if it will be possible in future to change the language).
export const localizeMe = (data: string) => {
  if (navigator.language == "ru") {
    return translations[data];
  } else {
    if (!Object.keys(translations).includes(data)) {
      throw new Error(
        `Translation module Error! '${data}' isn't in translations base`,
      );
    }
    return data;
  }
};
