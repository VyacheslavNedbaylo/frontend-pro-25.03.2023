

const currency = prompt("Choose currency:\n\n1. Euro - €.\n2. Dollar - $");
const euroCourse = 41.99;
const dollarCourse = 26.00;
let result = "";

switch (currency && currency.toLowerCase()) {
  case "euro":
  case "€":
  case "1": {
    for (let i = 10; i <= 100; i += 10) {
      result += `${i}€ = ${Math.round(i * euroCourse)}₴;\n`;
    }
    alert(result);
    break;
  }
  case "dollar":
  case "$":
  case "2": {
    for (let i = 10; i <= 100; i += 10) {
      result += `${i}$ = ${Math.round(i * dollarCourse)}₴;\n`;
    }
    alert(result);
    break;
  }
  default: {
    alert("Currency is not recognized, enter valid currency like 1 or Euro");
  }
}
