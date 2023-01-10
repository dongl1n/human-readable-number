let arrOneDigit = ['one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine'];
let arrTwoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let getOneDigit = (number) => {
  return String(arrOneDigit[number-1]);  
}
let getTwoDigit = (number) => {
  let twoDigit=String(number).split()[0];
  if(number<20 && twoDigit[0]!=0) return arrTwoDigit[number-10];
  let twoDigitFisrtNumber=(Number(twoDigit[0]))?arrTwoDigit[Number(twoDigit[0])+8]:'';
  let oneDigit=(Number(twoDigit[1]))?arrOneDigit[twoDigit[1]-1]:'';
  return twoDigitFisrtNumber.trimEnd()+' '+oneDigit;  
}
let getThreeDigit = (number) => {
  let threeDigit=String(number).split()[0];
  return arrOneDigit[threeDigit[0]-1].trimEnd()+" hundred "+getTwoDigit(String(number).slice(1)).trimStart();
}

module.exports = function toReadable (number) {
  if(number==0) return 'zero';
  switch(String(number).length){
      case 1: return getOneDigit(number).trimEnd();
      case 2: return getTwoDigit(number).trimEnd();
      case 3: return getThreeDigit(number).trimEnd();
    }
}
