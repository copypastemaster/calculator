<script lang="ts">
   type Arr = number[];
   type Val = string;
   
   let defaultValues: Arr = []
   let val: Val = '';
   let result: number | string = '';


   // push the textcontent on array;
   // join the array and bind onto val;   
   const handleInput = (e): string => {
    defaultValues.push(e.target.textContent);
    val = defaultValues.join('');
    console.log(`Values -- ${val}`)
    return val;
   }


   // post the values to SSR
   // set val as the returned total
    async function sendData (values: string) {
        const res = await fetch("http://localhost:5173/api/calc", {
            method: "POST",
            body: JSON.stringify({
                values,
            })
        })
        const total = await res.json();
        val = total;
        console.log(total);
    }


    
    const handleEqual = () => {
        sendData(val);
    }



    const clear = () => {
        defaultValues.length = 0;
        val = '';
    }

</script>

<svelte:head>
    <title>Calculator</title>
</svelte:head>

<main>
    <input type="text" bind:value={val}/>
    <div class="operators">
        <button on:click={handleInput}>+</button>
        <button on:click={handleInput}>-</button>
        <button on:click={handleInput}>*</button>
        <button on:click={handleInput}>/</button>
    </div>
    <div class="numbers">
        <button on:click={handleInput}>7</button>
        <button on:click={handleInput}>8</button>
        <button on:click={handleInput}>9</button>
        <button on:click={handleInput}>4</button>
        <button on:click={handleInput}>5</button>
        <button on:click={handleInput}>6</button>
        <button on:click={handleInput}>1</button>
        <button on:click={handleInput}>2</button>
        <button on:click={handleInput}>3</button>
        <button on:click={handleInput}>0</button>
        <button on:click={clear}>C</button>
        <button on:click={handleEqual}>=</button>

    </div>
</main>

<style>
    main {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 1rem;
        border: 1px solid;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        gap: 10px;
    }

    input {
        font-size: 2rem;
    }

    .operators {
        display: flex;
    }

    .operators button {
        flex-grow: 1;
    }

    .operators button, .numbers button {
        font-size: 2rem;
    }

    .numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .numbers button {
        width: 120px;
    }
</style>


