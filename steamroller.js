function steamrollArray(arr, newArr = []) {
  if(!Array.isArray(arr)) {
     newArr.push(arr)
     return
  }
  arr.forEach(item => {
    steamrollArray(item, newArr)
  })
  return newArr;
}

let r =steamrollArray([1, {}, [3, [[4]]]]);
console.log(r)