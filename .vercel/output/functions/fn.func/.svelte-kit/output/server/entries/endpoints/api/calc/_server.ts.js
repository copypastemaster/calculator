import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const { firstNumber, secondNumber, operatorer } = await request.json();
  console.log({ firstNumber, secondNumber, operatorer });
  let total = 0;
  switch (operatorer) {
    case "+":
      total = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      total = Number(firstNumber) - Number(secondNumber);
      break;
    case "*":
      total = Number(firstNumber) * Number(secondNumber);
      break;
    case "/":
      total = Number(firstNumber) / Number(secondNumber);
      break;
  }
  return json(total);
}
export {
  POST
};
