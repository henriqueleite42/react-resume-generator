import { IDate } from "Assets/Languages/Date";
import { IError } from "Assets/Languages/Error";
import { IForm } from "Assets/Languages/Form";

export const AllLangs = {
  EN: "English",
  BR: "Português (Brasil)",
  ES: "Español",
};

export interface ITranslations {
  Form: IForm;
  Date: IDate;
  Error: IError;
}

export type AllLangsOptions = keyof typeof AllLangs;

export default AllLangs;
