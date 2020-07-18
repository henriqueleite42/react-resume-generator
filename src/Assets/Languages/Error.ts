import AllLangs from "Assets/Languages";

export interface IError {
  required: string;
  invalidEmail: string;
  invalidLinkedin: string;
}

const EN: IError = {
  required: "This Field Is Required.",
  invalidEmail: "Invalid Email.",
  invalidLinkedin: "Invalid Linkedin Profile.",
};

const BR: IError = {
  required: "Este Campo é Obrigatório.",
  invalidEmail: "Email inválido.",
  invalidLinkedin: "Perfil do Linkedin Inválido.",
};

const ES: IError = {
  required: "Este Campo es Requerido.",
  invalidEmail: "Email inválido.",
  invalidLinkedin: "Perfil de Linkedin no Válido.",
};

const Form: { [T in keyof typeof AllLangs]: IError } = {
  EN,
  BR,
  ES,
};

export default Form;
