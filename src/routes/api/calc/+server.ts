import { json } from '@sveltejs/kit';

export async function POST( { request }: any ) {
    const { firstNumber, secondNumber, operator } = await request.json();
    console.log({firstNumber, secondNumber, operator})

    let total: number = 0;

    switch (operator) {
        case '+': 
            total = Number(firstNumber) + Number(secondNumber);
            break;
        case '-': 
            total = Number(firstNumber) - Number(secondNumber);
            break;
        case '*': 
            total = Number(firstNumber) * Number(secondNumber);
            break;
        case '/': 
            total = Number(firstNumber) / Number(secondNumber);
            break;
            
        default:
            break;
    }

    return json(total);
}


