import { IDate } from "Assets/Languages/Dates";
import { IForm } from "Assets/Languages/Form";

export const AllLangs = {
  EN: "English",
  BR: "Português (Brasil)",
  ES: "Español",
};

export type AllLangsOptions = keyof typeof AllLangs;

export interface ITranslations {
  Form: IForm;
  Date: IDate;
}

export default AllLangs;
