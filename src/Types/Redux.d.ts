import { IResume } from "./Resume";

import { IGlobalState } from "./GlobalConfig";

export interface IAppState {
  global: IGlobalState;
  resume: IResume;
}
