function convertToRoman(num) {
  const arabicNumberDict = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumberArr = ['M','CM','D','CD','C', "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let romanNumber = ''
  let index = 0
  while(num > 0){
    while(num < arabicNumberDict[index]) index ++
    num -= arabicNumberDict[index]
    romanNumber += romanNumberArr[index]
  }
  return romanNumber;
}

convertToRoman(36);