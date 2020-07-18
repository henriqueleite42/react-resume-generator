import { useSelector } from "react-redux";
import { IResume } from "Types/Resume";

import { IAppState } from "Types/Redux";

type ActionsType = {
  type: "form/PROFILE_PICTURE";
  profilePicture: string;
};

const initialState: IResume = {
  template: "Berlin",
  profilePicture: "",
  name: "",
  headline: "",
  about: "",
  age: "",
  phone: "",
  graduation: "",
  email: "",
  linkedin: "",
  salaryExpectation: "",
  competences: [""],
  languages: [""],
};

export const ResumeReducer = (
  state = initialState,
  action: ActionsType,
): IResume => {
  switch (action.type) {
    case "form/PROFILE_PICTURE":
      return { ...state, profilePicture: action.profilePicture };
    default:
      return state;
  }
};

export const useResumeReducerState = () =>
  useSelector<IAppState, IResume>(store => store.resume);

export const ResumeReducerActions = {};
