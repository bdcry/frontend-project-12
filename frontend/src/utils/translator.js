let translator = (key) => key;

export const setTranslator = (t) => {
  translator = t;
};

export const getTranslator = () => translator;
