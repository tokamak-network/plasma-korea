// npm install markdown-pdf 
// node build-pdf.js
// https://github.com/alanshaw/markdown-pdf

var markdownpdf = require("markdown-pdf")

var mdDocs = ["abstract.md", "1_Scalable_Multi-Party_Computation.md", "2_Plasma.md", "3_Design_Stack_and_Smart_Contracts.md", "4_Related_Work.md", "5_Multiparty_Off-Chain_State.md", "6_Blockchains_in_Blockchains.md", "7_Plasma_Proof-of-Stake.md", "8_Economic_Incentives.md", "9_MapReduce_for_the_Blockchain.md", "10_Example Applications.md", "11_Attacks_Risks_and_Mitigations.md", "12_Future_Research.md", "13_Conclusion_and_Summary.md", "14_Acknowledgements.md", "References.md"]
  , bookPath = "plasma-korean.pdf"

markdownpdf().concat.from(mdDocs).to(bookPath, function () {
  console.log("Created", bookPath)
})