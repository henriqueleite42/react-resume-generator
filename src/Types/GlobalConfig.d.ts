import { AllLangsOptions } from "Assets/Languages";

export type Stages = 1 | 2 | 3 | 4 | 5;

export interface IGlobalState {
  language: AllLangsOptions;
  stage: Stages;
}
