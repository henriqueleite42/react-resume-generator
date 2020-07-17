import AllLangs from "Assets/Languages";

export interface IForm {
  reactResumeGenerator: string;
  by: string;
  name: string;
  headline: string;
  contact: string;
  graduation: string;
  portfolio: string;
  competences: string;
  languages: string;
  observation: string;
  salaryExpectation: string;
  age: string;
  about: string;
  employment: string;
  actualJob: string;
  academic: string;
  submit: string;
  profilePicture: string;
  uploadFile: string;
  buttonRemove: string;
  buttonEdit: string;
  buttonSelect: string;
  language: string;
  currency: string;
  phone: string;
}

const EN: IForm = {
  reactResumeGenerator: "React Resume Generator",
  by: "By",
  name: "Name",
  headline: "Headline",
  contact: "Contact",
  graduation: "Graduation",
  portfolio: "Portfolio",
  competences: "Competences",
  languages: "Languages",
  observation: "Observations",
  salaryExpectation: "Salary Expectation",
  age: "Age",
  about: "About You",
  employment: "Employment History",
  actualJob: "Present",
  academic: "Academic Formation",
  submit: "Submit",
  profilePicture: "Profile Picture",
  uploadFile: "Upload a Image",
  buttonEdit: "Edit",
  buttonRemove: "Remove",
  buttonSelect: "Select",
  language: "Language",
  currency: "Currency",
  phone: "Phone Number",
};

const BR: IForm = {
  reactResumeGenerator: "Gerador de Currículos React",
  by: "Por",
  name: "Nome",
  headline: "Titúlo Profissional",
  graduation: "Graduação",
  contact: "Contato",
  portfolio: "Portfólio",
  competences: "Competências",
  languages: "Idiomas",
  observation: "Obserações",
  salaryExpectation: "Pretensão Salárial",
  age: "Idade",
  about: "Sobre Você",
  employment: "Experiência Profissional",
  actualJob: "Presente",
  academic: "Formação Academica",
  submit: "Enviar",
  profilePicture: "Foto de Perfil",
  uploadFile: "Upload de Imagem",
  buttonEdit: "Editar",
  buttonRemove: "Remover",
  buttonSelect: "Selecionar",
  language: "Idioma",
  currency: "Moeda",
  phone: "Número de Telefone",
};

const ES: IForm = {
  reactResumeGenerator: "Generadora de Currículum React",
  by: "Por",
  name: "Nombre",
  headline: "Título Profesional",
  contact: "Contacto",
  graduation: "Graduación",
  portfolio: "Portafolio",
  competences: "Competencias",
  languages: "Idiomas",
  observation: "Observaciones",
  salaryExpectation: "Expectativa Salarial",
  age: "Años",
  about: "Acerca de Ti",
  employment: "Historial de Empleo",
  actualJob: "Presente",
  academic: "Formación Académica",
  submit: "Enviar",
  profilePicture: "Foto de Perfil",
  uploadFile: "Upload una Imagen",
  buttonEdit: "Editar",
  buttonRemove: "Eliminar",
  buttonSelect: "Seleccione",
  language: "Idioma",
  currency: "Moneda",
  phone: "Número de Teléfono",
};

const Form: { [T in keyof typeof AllLangs]: IForm } = {
  EN,
  BR,
  ES,
};

export default Form;
