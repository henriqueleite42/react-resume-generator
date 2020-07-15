// Documentação PDFKit
// https://pdfkit.org/

// Dependencies
import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

// Interfaces

// Constants

import { Resume } from "../Types/Resume";

import LANGUAGES from "Config/languages.json";
import SIZES from "Config/sizes.json";

class PDF {
  public doc: PDFKit.PDFDocument;

  protected fontPath = path.resolve(__dirname, "..", "..", "fonts");
  protected pdfPath = path.resolve(__dirname, "..", "..", "pdfs");

  // public font: string;

  public name: string;
  public headline: string;
  public age: number;
  public graduation: string;
  public salaryExpectation: string;
  public contact?: Resume.IDataSectionInterface[];
  public portfolio?: Resume.IDataSectionInterface[];
  public competences?: Resume.ICopetencesInterface[];
  public languages?: Resume.IDataSectionInterface[];
  public about?: string;
  public employment?: Resume.ICompanyInterface[];
  public academic?: Resume.ICompanyInterface[];

  public ResumeLang: Resume.IResumeLanguage = LANGUAGES["EN"];

  public stColor = "#000";
  public ndColor = "#000";
  public thColor = "#000";

  public lang = "PT";

  public config = {
    MARGIN: 50,
    PAGE: SIZES["A4"],
    X: SIZES["A4"][0],
    Y: SIZES["A4"][1],
  };

  public constructor(PdfConfig: Resume.IResume) {
    const { filename, margin, page, info, lang } = PdfConfig;

    if (margin) this.config.MARGIN = margin;

    // if (lang && LANGUAGES[lang]) this.ResumeLang = LANGUAGES[lang];

    // if (page && SIZES[page]) {
    //   this.config.PAGE = SIZES[page];
    //   this.config.X = SIZES[page][0];
    //   this.config.Y = SIZES[page][1];
    // }

    this.doc = new PDFDocument({
      margin: this.config.MARGIN,
      size: this.config.PAGE,
    });

    this.doc.pipe(fs.createWriteStream(this.pdfPath + "/" + filename + ".pdf"));

    if (info) {
      const docInfo: PDFKit.DocumentInfo = {};

      if (info.title) docInfo.Title = info.title;
      if (info.author) docInfo.Author = info.author;
      if (info.keywords) docInfo.Keywords = info.keywords;

      this.doc.info = docInfo;
    }

    this.name = PdfConfig.name;
    this.headline = PdfConfig.headline;
    this.age = PdfConfig.age;
    this.graduation = PdfConfig.graduation;
    this.contact = PdfConfig.contact;
    this.salaryExpectation = PdfConfig.salaryExpectation;
    this.portfolio = PdfConfig.portfolio;
    this.competences = PdfConfig.competences;
    this.languages = PdfConfig.languages;
    this.about = PdfConfig.about;
    this.employment = PdfConfig.employment;
    this.academic = PdfConfig.academic;
  }

  public bold() {
    // this.doc.font(this.fontPath + "/" + (this.font + "-Bold") + ".ttf");
  }

  public regular() {
    // this.doc.font(this.fontPath + "/" + this.font + ".ttf");
  }

  public line(options: Resume.ICompleteLineInterface) {
    const { startX, startY, endX, endY, size, color } = options;

    this.doc
      .lineWidth(size || 2)
      .moveTo(startX, startY)
      .lineTo(endX, endY)
      .strokeColor(color || "#000000")
      .stroke();
  }

  public horizontalLine(options: Resume.ILineInterface) {
    const { start, end, size, color, startX, endX } = options;

    this.line({
      size: size || 2,
      color: color,
      startX: startX || this.config.MARGIN,
      startY: start,
      endY: start,
      endX: end ? end + this.config.MARGIN : this.config.X - this.config.MARGIN,
    });
  }

  public verticalLine(options: Resume.ILineInterface) {
    const { start, end, size, color } = options;

    this.line({
      size: size || 2,
      color: color,
      startX: start,
      startY: this.config.MARGIN,
      endY: end ? end + this.config.MARGIN : this.config.X - this.config.MARGIN,
      endX: start,
    });
  }
}

export default PDF;
