function checkCashRegister(price, cash, cid) {
  const response = {
    status: "",
    change: [],
  };

  const convertion = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  const funds = cid.reduce((sum, item) => (sum += item[1]), 0);
  let change = cash - price;
  if (change > funds) response.status = "INSUFFICIENT_FUNDS";
  else if (change === funds) {
    response.status = "CLOSED";
    response.change = cid;
  } else {
    // Calculating change
    let index = cid.length - 1;
    while (change >= 0 && index >= 0) {
      let value = convertion[cid[index][0]];
      if (value <= change) {
        let quantity =
          change < cid[index][1]
            ? Math.floor(change / value) * value
            : cid[index][1];
        change = (change * 1000 - quantity * 1000) / 1000; // due to problems with float values
        cid[index][1] -= quantity;
        response.change.push([cid[index][0], quantity]);
      }
      index--;
    }
    if (change === 0) {
      response.status = "OPEN";
    } else {
      response.status = "INSUFFICIENT_FUNDS";
      response.change = [];
    }
  }
  return response;
}

let r = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(r);
