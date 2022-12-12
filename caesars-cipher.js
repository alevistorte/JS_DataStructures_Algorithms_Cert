function rot13(str) {
  let newStr = ''
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alphaNumericPattern = /[A-Z]/
  for(let i = 0; i < str.length; i++){
    if(!alphaNumericPattern.test(str[i])) newStr += str[i]  
    else newStr += alphabet[(alphabet.indexOf(str[i]) + 13) % alphabet.length]
  }
  return newStr;
}

let r = rot13("SERR PBQR PNZC");
console.log(r)