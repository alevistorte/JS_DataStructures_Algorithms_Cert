function addTogether(...a) {
  if(a.every(item => typeof item === 'number')){
    if(a.length === 2) return a[0] + a[1]
    return function(x){
      if(typeof x === 'number') return a[0] + x
      return
    }
  }
  return
 
}

const curried = x => y => x + y

let r = addTogether(5)(7);
console.log(r)