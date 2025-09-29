// MajorCredits interface
interface MajorCredits {
  credits: number;
  _majorBrand: "major";
}

// MinorCredits interface
interface MinorCredits {
  credits: number;
  _minorBrand: "minor";
}

// sumMajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _majorBrand: "major" };
}

// sumMinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _minorBrand: "minor" };
}

// Example
const maj1: MajorCredits = { credits: 3, _majorBrand: "major" };
const maj2: MajorCredits = { credits: 4, _majorBrand: "major" };

const min1: MinorCredits = { credits: 2, _minorBrand: "minor" };
const min2: MinorCredits = { credits: 1, _minorBrand: "minor" };

console.log(sumMajorCredits(maj1, maj2)); // { credits: 7, _majorBrand: 'major' }
console.log(sumMinorCredits(min1, min2)); // { credits: 3, _minorBrand: 'minor' }
