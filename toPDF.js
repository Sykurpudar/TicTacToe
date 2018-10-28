var markdownpdf = require("markdown-pdf")

 
markdownpdf().from("./docs/design_report.md").to("./artifacts/design_report_pdf.pdf", function () {
  console.log("Done")
})

markdownpdf().from("./docs/administration_manual.md").to("./artifacts/administration_manual_pdf.pdf", function () {
  console.log("Done")
})

markdownpdf().from("./docs/development_manual.md").to("./artifacts/development_manual_pdf.pdf", function () {
  console.log("Done")
})

