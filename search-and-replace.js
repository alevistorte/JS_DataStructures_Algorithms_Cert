function myReplace(str, before, after) {
  const upperCase = /[A-Z]/
  if(upperCase.test(before[0])) after = after[0].toUpperCase() + after.slice(1)
  else after = after[0].toLowerCase() + after.slice(1)
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");