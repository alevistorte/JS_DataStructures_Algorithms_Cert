function palindrome(str) {
  let correctedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
  let left = 0
  let rigth = correctedStr.length - 1
  while(rigth > left){
    if(correctedStr[rigth] !== correctedStr[left]) return false
    rigth--
    left++
  }
  return true;
}

palindrome("eye");