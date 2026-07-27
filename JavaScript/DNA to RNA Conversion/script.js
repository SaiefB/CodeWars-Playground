function DNAtoRNA(dna) {
  let rnaStrand = [];
  let dnaStrandString = dna.split("");
  console.log(dnaStrandString);

  for (i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rnaStrand.push("U");
      console.log(rnaStrand);
    } else {
      rnaStrand.push(dna[i]);
      console.log(rnaStrand);
    }
  }

  let finalRNAStand = rnaStrand.join("");
  console.log(finalRNAStand);
  return finalRNAStand;
}
