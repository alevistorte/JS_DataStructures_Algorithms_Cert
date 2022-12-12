function convertHTML(str) {
  const translateEntitie = {
    '&':'&amp;',
    '<':'&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  let convertedStr = ''
  for(let i = 0; i < str.length; i++){
    convertedStr += translateEntitie[str[i]] || str[i]
  }
  return convertedStr;
}

let r = convertHTML("Dolce & Gabbana");

