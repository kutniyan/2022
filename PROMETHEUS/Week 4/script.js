function count(num1, num2, mark) {
  let res;
  switch (mark) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
  }
  return res;
}
count(9, 3, "/");
