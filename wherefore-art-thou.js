function whatIsInAName(collection, source) {
  const matches = [];
  collection.forEach((item) => {
    let isAMatch = true;
    for (let p in source) {
      if (item[p] !== source[p]) {
        isAMatch = false;
        break;
      }
    }
    if (isAMatch) matches.push(item);
  });
  return matches;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });