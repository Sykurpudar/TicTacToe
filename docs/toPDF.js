var markdownpdf = require("markdown-pdf")

 
markdownpdf().from("./design_report.md").to("./design_report_pdf.pdf", function () {
  console.log("Done")
})

markdownpdf().from("./administration_manual.md").to("./administration_manual_pdf.pdf", function () {
  console.log("Done")
})

markdownpdf().from("./development_manual.md").to("./development_manual_pdf.pdf", function () {
  console.log("Done")
})

