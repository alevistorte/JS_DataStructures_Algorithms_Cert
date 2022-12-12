function telephoneCheck(str) {
  str = str.replace(/\s/g,'');

  const notAcceptableValues = /[^0-9()-]/gi;
  const notNumberRegex = /[^0-9]/;

  if (notAcceptableValues.test(str)) return false;

  // Checking last 4 digits
  const last4Digits = str.slice(str.length - 4);
  if (notNumberRegex.test(last4Digits)) return false;

  // Checking separator
  let separator = notNumberRegex.test(str[str.length - 5])
    ? str[str.length - 5]
    : "";
  let index = separator === "" ? 5 : 6;

  // Checking 3 middle numbers
  const middleNumbers = str.slice(
    str.length - index - 2,
    str.length - index + 1
  );
  if (notNumberRegex.test(middleNumbers)) return false;
  index += 3;

  //   Checking possible separator
  if (str[str.length - index] === separator) index++;
  let areaCode;
  if (str[str.length - index] === ")") {
    if (str[str.length - index - 4] !== "(") return false;
    else {
      areaCode = str.slice(
        str[str.length - index - 3],
        str[str.length - index]
      );
      index += 4;
    }
  } else {
    areaCode = str.slice(
      str[str.length - index - 2],
      str[str.length - index + 1]
    );
    index += 2;
  }

  if (notNumberRegex.test(areaCode)) return false;
  //   Checking country code
  if (index !== str.length && str.slice(0, str.length - index) !== '1') return false;
  return true;
}

let r = telephoneCheck("1(123) 456 7890");
console.log(r);