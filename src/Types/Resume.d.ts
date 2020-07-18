type ResumeTemplates = "Berlin";

export interface IResume {
  template: ResumeTemplates;
  profilePicture: string;
  name: string;
  headline: string;
  about: string;
  age: string;
  phone: string;
  graduation: string;
  email: string;
  linkedin: string;
  salaryExpectation: string;
  competences: Array<string>;
  languages: Array<string>;
}
