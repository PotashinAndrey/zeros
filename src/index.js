module.exports = function zeros(expression) {
  let multipliers = expression.split("*");
  let numbers = [];

  for (let i = 0; i < multipliers.length; i++) {
    numbers.push(quantityOfTwoAndFive(multipliers[i]));
  }

  numbers = calculateZeros(numbers);

  console.log(numbers);

  return numbers;
}

function quantityOfTwoAndFive(multiplier) {
  let number = toNumber(multiplier);

switch ( multiplier.length - ('' + number).length) {
  case 1:
    return factorial(number, 1);

  case 2:
      return factorial(number, 2);

  default:
    break;
}



return [two, five];
}

function toNumber(str) {
  let number = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] != "!") {
      number += str[i];
    } else {
      number = (+number);
      break;
    }
  }

  return number;
}

function factorial(number, version){
  let five = 0;
  let two = 0;

  for (let i = number; i > 1; i-=version) {
    number = i;
    while (number % 5 == 0) {
      five++;
      number = number/5;
    }
    while (number % 2 == 0) {
      two++;
      number = number/2;
    }
  }

  return [two, five];
}

function calculateZeros(numbers) {
  twoAndFive = [0, 0]

  for (let i = 0; i < numbers.length; i++) {
    twoAndFive[0] += numbers[i][0];
    twoAndFive[1] += numbers[i][1];
  }

  return twoAndFive[0] < twoAndFive[1] ? twoAndFive[0] : twoAndFive[1];
}