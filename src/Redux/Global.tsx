import { useSelector } from "react-redux";

import { IAppState } from "Types/Redux";

import { IGlobalState, Stages } from "Types/GlobalConfig";

import { AllLangsOptions, ITranslations } from "Assets/Languages";

type ActionsType =
  | {
      type: "global/SET_LANGUAGE";
      language: AllLangsOptions;
    }
  | {
      type: "global/NEXT_STAGE";
    }
  | {
      type: "global/PREV_STAGE";
    };

const initialState: IGlobalState = {
  language: "EN",
  stage: 1,
};

export const GlobalReducer = (
  state = initialState,
  action: ActionsType,
): IGlobalState => {
  switch (action.type) {
    case "global/SET_LANGUAGE":
      return { ...state, language: action.language };
    case "global/NEXT_STAGE":
      return { ...state, stage: (state.stage + 1) as Stages };
    case "global/PREV_STAGE":
      return { ...state, stage: (state.stage - 1) as Stages };
    default:
      return state;
  }
};

export const useGlobalState = () =>
  useSelector<IAppState, IGlobalState>(store => store.global);

export function useLanguage<T extends keyof ITranslations>(
  page: keyof ITranslations,
) {
  return useSelector<IAppState, ITranslations[T]>(store => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Language = require(`Assets/Languages/${page}`).default;

    return Language[store.global.language] as ITranslations[T];
  });
}

export const GlobalActions = {
  setLanguage(language: AllLangsOptions) {
    return {
      type: "global/SET_LANGUAGE",
      language,
    };
  },
};
