<script lang="ts">
   type Arr = number[];
   type Val = number;
   
   let defaultValues: Arr = []
   let val: Val = 0;

   let firstNum: number | null = null
   let secondNum: number | null = null
   let operator: string = '';

   
   let check = [];
   
   console.log(`${check.length} -- check length`);
   
   const handleInput = (e): number => {
    defaultValues.push(e.target.textContent);
    val = +(defaultValues.join(''));
    return val;
   }

   const handleOperator = (e) => {
     switch (e.target.innerText) {
        case '+':
            operator = '+';
            checker();
            clear();
            break;
        case '-':
            operator = '-';
            checker();
            clear();
            break;
        case '*':
            operator = '*';
            checker();
            break;
        case '/':
            operator = '/';
            checker();
            break;
     }
   }

   

   const checker = () => {
    if (firstNum == null ) {
        firstNum = val;
    }
   

   }

   const clear = () => {
    val = 0;
    defaultValues.length = 0;
   }

   async function sendData (firstNumber: number | null, secondNumber: number | null, operatorer: string) {
            const res = await fetch("http://localhost:5173/api/calc", {
                method: "POST",
                body: JSON.stringify({
                    firstNumber,
                    secondNumber,
                    operatorer,
                })
            })
            const total = await res.json().then(data => val = data).catch(err => console.log(err));
            console.log(`total is ${total}`);
            firstNum = total;
            console.log(`firstnum - ${firstNumber} secondnum - ${secondNumber} operator - ${operatorer}`)
            return total;

        return 'hi'
   }

   const handleEqual = () => {
        return sendData(firstNum, secondNum = val, operator);
   }

</script>

<svelte:head>
    <title>Calculator</title>
</svelte:head>

<main>
    <input type="text" bind:value={val}/>
    <div class="operators">
        <button on:click={handleOperator}>+</button>
        <button on:click={handleOperator}>-</button>
        <button on:click={handleOperator}>*</button>
    </div>
    <div class="numbers">
        <button on:click={handleInput}>1</button>
        <button on:click={handleInput}>2</button>
        <button on:click={handleInput}>3</button>
        <button on:click={clear}>C</button>
        <button on:click={handleEqual}>=</button>

    </div>
</main>

<style>
    .operators button, .numbers button {
        font-size: 2rem;
    }
</style>


