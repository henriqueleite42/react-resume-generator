import { Resume } from "../Types/Resume";
import PDF from "./PDF";

class Berlin extends PDF {
  // public constructor(PdfConfig: Resume.IResume) {
  //   super(PdfConfig);
  //   this.font = "LiberationSans";
  //   this.stColor = "#212121";
  //   this.ndColor = "#777";
  //   this.thColor = "#dadada";
  //   // Lines
  //   this.horizontalLine({
  //     size: 1,
  //     start: 140,
  //     color: this.thColor,
  //   });
  //   this.doc
  //     .moveDown(0.7)
  //     .lineWidth(1)
  //     .moveTo(260, 140)
  //     .lineTo(260, this.config.Y - this.config.MARGIN)
  //     .strokeColor(this.thColor)
  //     .stroke();
  //   // Header
  //   this.bold();
  //   this.doc
  //     .fontSize(36)
  //     .fillColor(this.stColor)
  //     .text(PdfConfig.name.toUpperCase(), this.doc.x, this.doc.y, {
  //       characterSpacing: 5,
  //     });
  //   this.regular();
  //   this.doc
  //     .moveDown(0.2)
  //     .fontSize(14)
  //     .fillColor(this.ndColor)
  //     .text(
  //       [
  //         PdfConfig.headline,
  //         PdfConfig.graduation,
  //         PdfConfig.age + " " + this.ResumeLang.age,
  //       ].join("  -  "),
  //     );
  //   // Left Side
  //   if (this.contact) this.contactSection();
  //   if (this.portfolio) this.portfolioSection();
  //   if (this.competences) this.competencesSection();
  //   if (this.languages) this.languagesSection();
  //   if (this.salaryExpectation) this.salaryExpectationSection();
  //   this.obsSection();
  //   // Right Side
  //   this.doc.x = 280;
  //   this.doc.y = 134.7;
  //   if (this.about) this.aboutSection();
  //   if (this.employment) this.employmentSection();
  //   this.doc.end();
  // }
  // protected sectionTitle(title: string) {
  //   this.bold();
  //   this.doc
  //     .moveDown(2)
  //     .fontSize(10)
  //     .fillColor(this.stColor)
  //     .text(title.toUpperCase(), this.doc.x, this.doc.y, {
  //       characterSpacing: 2,
  //     });
  //   this.horizontalLine({
  //     start: this.doc.y + 5,
  //     end: this.doc.x + 30 - this.config.MARGIN,
  //     size: 2,
  //     startX: this.doc.x,
  //   });
  //   this.regular();
  //   this.doc.y += 7;
  // }
  // protected sectionEnd() {
  //   this.horizontalLine({
  //     size: 1,
  //     start: this.doc.y + 15,
  //     startX: this.doc.x,
  //     color: this.thColor,
  //   });
  //   this.doc.y += 10;
  // }
  // protected contactSection() {
  //   this.sectionTitle(this.ResumeLang.contact);
  //   for (const d of this.contact) {
  //     const options: PDFKit.Mixins.TextOptions = {
  //       width: 240 - this.config.MARGIN,
  //     };
  //     if (d.link) {
  //       options.link = d.link;
  //       options.underline = true;
  //     }
  //     this.doc
  //       .moveDown(1)
  //       .fillColor(this.stColor)
  //       .text(d.title.toUpperCase())
  //       .moveDown(0.5)
  //       .fillColor(this.ndColor)
  //       .text(d.info, this.doc.x, this.doc.y, options);
  //   }
  // }
  // protected portfolioSection() {
  //   this.sectionTitle(this.ResumeLang.portfolio);
  //   for (const d of this.portfolio) {
  //     this.doc
  //       .moveDown(1)
  //       .fillColor(this.ndColor)
  //       .text(d.info, this.doc.x, this.doc.y, {
  //         width: 240 - this.config.MARGIN,
  //         link: d.link,
  //         underline: true,
  //       });
  //   }
  // }
  // protected competencesSection() {
  //   this.sectionTitle(this.ResumeLang.competences);
  //   for (const d of this.competences) {
  //     this.doc
  //       .moveDown(1)
  //       .fillColor(this.ndColor)
  //       .text(d.name, this.doc.x, this.doc.y, {
  //         width: 240 - this.config.MARGIN,
  //       });
  //   }
  // }
  // protected languagesSection() {
  //   this.sectionTitle(this.ResumeLang.languages);
  //   for (const d of this.languages) {
  //     this.doc
  //       .moveDown(1)
  //       .fillColor(this.ndColor)
  //       .text(d.info, this.doc.x, this.doc.y, {
  //         width: 240 - this.config.MARGIN,
  //       });
  //   }
  // }
  // protected salaryExpectationSection() {
  //   this.sectionTitle(this.ResumeLang.salaryExpectation);
  //   this.doc
  //     .moveDown(1)
  //     .fillColor(this.ndColor)
  //     .text(this.salaryExpectation, this.doc.x, this.doc.y, {
  //       width: 240 - this.config.MARGIN,
  //     });
  // }
  // protected obsSection() {
  //   this.sectionTitle(this.ResumeLang.observation);
  //   this.doc
  //     .moveDown(1)
  //     .fillColor(this.ndColor)
  //     .text("Este PDF foi criado por um ", this.doc.x, this.doc.y, {
  //       width: 240 - this.config.MARGIN,
  //       continued: true,
  //     })
  //     .text("Gerador de Currículos Gratuito", this.doc.x, this.doc.y, {
  //       continued: true,
  //       underline: true,
  //       link: "https://github.com/henriqueleite42/resume-generator",
  //     })
  //     .text(" que eu mesmo desenvolvi.", this.doc.x, this.doc.y, {
  //       underline: false,
  //     });
  // }
  // protected aboutSection() {
  //   this.sectionTitle(this.ResumeLang.about);
  //   this.doc
  //     .moveDown(1)
  //     .fillColor(this.ndColor)
  //     .text(this.about);
  //   this.sectionEnd();
  // }
  // protected employmentSection() {
  //   this.sectionTitle(this.ResumeLang.employment);
  //   for (const d of this.employment) {
  //     const year = d.start.getFullYear();
  //     const month = d.start.getMonth();
  //     let end: string;
  //     if (d.actualJob) {
  //       end = this.ResumeLang.actualJob;
  //     } else {
  //       end =
  //         this.ResumeLang.months[d.end.getMonth()] +
  //         " " +
  //         d.end.getUTCFullYear();
  //     }
  //     this.doc
  //       .moveDown(1)
  //       .fillColor(this.stColor)
  //       .text(d.role + ", " + d.company)
  //       .fillColor(this.ndColor)
  //       .moveDown(0.5)
  //       .fontSize(8)
  //       .text(this.ResumeLang.months[month] + " " + year + "  -  " + end)
  //       .fontSize(10)
  //       .moveDown(1)
  //       .list(d.list, this.doc.x, this.doc.y, {
  //         bulletRadius: 2,
  //       });
  //   }
  // }
}

export default Berlin;
