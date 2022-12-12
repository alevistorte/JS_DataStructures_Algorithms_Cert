function uniteUnique(...arr) {
  let uniqueArr = []
  arr.forEach(a => {
    a.forEach(item =>{
      if(!uniqueArr.includes(item)) uniqueArr.push(item)
    })
  })
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);