import { json } from "@sveltejs/kit";

export async function POST( {request} : any)  {
    const { values } = await request.json();

    const calculate = (item) =>  {


        let stack = [];
        let num: number | string = '';
        let operator = null
    
        
        for(let i = 0; i <= item.length; i++){    

          const curr = item[i];
          
          // if item is whitespace
          if(curr === ' ') continue;

          // if item is number
          if(!isNaN(curr)) {
            num+=curr;
          }

          // if we hav eoperator (+ - * /)
          if(isNaN(curr)){
            num = Number(num)
            switch(operator){
              case '+':
              case null:
                stack.push(num)
                break;
              case '-':
                stack.push(-num)
                break; 
              case '*':            
                stack.push(stack.pop()*num)
                break;
              case '/':
                stack.push(parseFloat(stack.pop()/num, 10))
                break;           
            }
            
            operator = curr;         
            num = '';
          }
        }
       
        return stack.reduce((a,b)=> a + b,0)
      };
    

    return json(calculate(values));
}








// find the index of item if item +1 === *
// slice item, item+1, item+2 if item+1 === *
// reduce sliced items
// splice the reduced sliced items to index of item.















































// let multys = [];
// let splitMul = values.split("*")
//     splitMul.forEach((item: string) => {
//         multys.push(parseInt(item));
//     })
// let multiplication = multys.reduce((acc, curr) => acc * curr)    

// let div = [];
// let splitDiv = values.split("/")
//     splitDiv.forEach((item: string) => {
//         div.push(parseInt(item));
//     })

// let division = div.length == 0 ? null : div.reduce((acc, curr) => acc / curr, null)

// let result = (multiplication / (division ? division : '') );























 
   