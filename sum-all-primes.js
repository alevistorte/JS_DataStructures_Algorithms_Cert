function sumPrimes(num) {
  let sum = 0
  for(let n = 2; n <= num; n++){
    let d = 2
    while(n % d != 0 && d*d <= n) d++
    if(d*d > n) sum += n
  }
  return sum;
}

sumPrimes(10);