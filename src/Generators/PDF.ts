// Documentação PDFKit
// https://pdfkit.org/

import BlobStream from "blob-stream";
import PDFDocument from "pdfkit";
import { AllowedFonts } from "Types/Fonts";
import {
  ICompleteLineBuilder,
  IHorizontalLineBuilder,
  IVerticalLineBuilder,
} from "Types/Pdf";
import { IResume } from "Types/Resume";

import { AllLangsOptions } from "Assets/Languages";

const A4 = [595.28, 841.89];

const CONFIG = {
  LINE_WIDTH: 2,
  MARGIN: 50,
  PAGE: A4,
  X: A4[0],
  Y: A4[1],
};

class PDF {
  // PDF Doc

  doc: PDFKit.PDFDocument;
  stream: any;

  // Color

  primaryColor = "#00000";
  secondaryColor = "#00000";
  tertiaryColor = "#00000";

  // Config

  font: AllowedFonts = "Montserrat";
  language: AllLangsOptions = "EN";
  config = CONFIG;

  // Resume Fields

  resumeData: IResume;

  constructor(language: AllLangsOptions, resumeData: IResume) {
    this.language = language;

    this.doc = new PDFDocument({
      margin: this.config.MARGIN,
      size: this.config.PAGE,
    });

    this.doc.info = {
      Title: "resume",
      Author: "React Resume Generator - Henrique Leite",
      Creator: "React Resume Generator - Henrique Leite",
      Keywords: "Resume",
      CreationDate: new Date(),
    };

    this.stream = this.doc.pipe(BlobStream());

    this.resumeData = resumeData;
  }

  setFont(type?: "bold" | "regular") {
    const FONT_PATH = "Assets/Fonts";

    switch (type) {
      case "bold":
        this.doc.font(`${FONT_PATH}/${this.font}/Bold.ttf`);
        break;
      case "regular":
      default:
        this.doc.font(`${FONT_PATH}/${this.font}/Regular.ttf`);
        break;
    }
  }

  horizontalLine({ start, end, startX, size, color }: IHorizontalLineBuilder) {
    this.line({
      size: size,
      color: color,
      startX: startX || this.config.MARGIN,
      startY: start,
      endY: start,
      endX: end ? end + this.config.MARGIN : this.config.X - this.config.MARGIN,
    });
  }

  verticalLine({ start, end, size, color }: IVerticalLineBuilder) {
    this.line({
      size: size || this.config.LINE_WIDTH,
      color: color,
      startX: start,
      startY: this.config.MARGIN,
      endY: end ? end + this.config.MARGIN : this.config.X - this.config.MARGIN,
      endX: start,
    });
  }

  create(): Promise<string> {
    return new Promise(resolve => {
      this.doc.end();

      this.stream.on("finish", () => {
        // Get a Blob URL, to display PDF in Browser
        const url = this.stream.toBlobURL("application/pdf");

        resolve(url);
      });
    });
  }

  // Protected

  protected line({
    startX,
    startY,
    endX,
    endY,
    size,
    color,
  }: ICompleteLineBuilder) {
    this.doc
      .lineWidth(size || this.config.LINE_WIDTH)
      .moveTo(startX, startY)
      .lineTo(endX, endY)
      .strokeColor(color || "#000000")
      .stroke();
  }
}

export default PDF;
