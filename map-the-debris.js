function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const transformedData = []
  arr.forEach(obj => {
    transformedData.push({
      name: obj.name,
      orbitalPeriod: Math.round(2*Math.PI*Math.sqrt((earthRadius + obj.avgAlt)**3 / GM))
    })
  })
  return transformedData;
}

let r = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(r)