export namespace Resume {
  interface ICompleteLineInterface {
    startX: number;
    endX: number;
    startY: number;
    endY: number;
    size?: number;
    color?: string;
  }

  interface ILineInterface {
    start: number;
    end?: number;
    size?: number;
    color?: string;
    startX?: number;
    endX?: number;
    startY?: number;
    endY?: number;
  }

  interface IResume {
    filename: string;
    margin?: number;
    page?: string;
    lang?: string;
    info?: {
      title?: string;
      author?: string;
      keywords?: string;
    };
    name: string;
    headline: string;
    age: number;
    graduation: string;
    salaryExpectation: string;
    contact?: IDataSectionInterface[];
    portfolio?: IDataSectionInterface[];
    competences?: CopetencesInterface[];
    languages?: IDataSectionInterface[];
    about?: string;
    employment?: ICompanyInterface[];
    academic?: ICompanyInterface[];
  }

  interface IResumeLanguage {
    age: string;
    contact: string;
    portfolio: string;
    competences: string;
    languages: string;
    about: string;
    employment: string;
    academic: string;
    observation: string;
    salaryExpectation: string;
    months: Array<string>;
    actualJob: string;
  }

  interface IDataSectionInterface {
    title?: string;
    info: string;
    link?: string;
    percentage?: number;
  }

  interface ICopetencesInterface {
    name: string;
    experience?: number;
  }

  interface ICompanyInterface {
    company: string;
    role?: string;
    start: Date;
    end?: Date;
    actualJob?: boolean;
    list?: Array<string>;
  }
}
