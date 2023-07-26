import { json } from "@sveltejs/kit";

export async function POST( {request} : any) {
    const { firstNumber, secondNumber, operatorer } = await request.json();

    console.log({ firstNumber, secondNumber, operatorer })

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
        default:
            break;
    }

    return json(total);
}
