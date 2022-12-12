function spinalCase(str) {
  str = str.trim();
  let strArr = [str[0].toLowerCase()];
  const capitalLetterPattern = /[A-Z]/;
  const notAlphaNumPattern = /[^a-z0-9]/i;
  for (let i = 1; i < str.length; i++) {
    let char = str[i];
    if (capitalLetterPattern.test(char)) {
      if (strArr[strArr.length - 1] !== "-") strArr.push("-");
      strArr.push(char.toLowerCase());
    } else if (
      notAlphaNumPattern.test(char) &&
      strArr[strArr.length - 1] !== "-"
    )
      strArr.push("-");
    else strArr.push(char);
  }
  return strArr.join("");
}

let r =spinalCase('This Is Spinal Tap');
console.log(r)