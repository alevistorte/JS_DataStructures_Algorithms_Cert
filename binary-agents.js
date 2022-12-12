function binaryAgent(str) {
  let arr = str.split(' ')
  let message = ''
  arr.forEach(binary => {
    let decimal = 0
    for(let i = 0; i < binary.length; i++){
      decimal += Number(binary[binary.length - 1 - i]) * 2 ** i
    }
    message += String.fromCharCode(decimal)
  })
  return message;
}

let r = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log('result: ', r)