import en from "../../../translations/en.json";
import nl from "../../../translations/nl.json";

const initialState = {
  selectedLanguage: "en",
  languages: {
    en,
    nl,
  },
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "language/selectLanguage": {
      return {
        ...state,
        selectedLanguage: action.payload.language,
      };
    }
    default: {
      return state;
    }
  }
}
