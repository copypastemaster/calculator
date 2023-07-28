import { json } from "@sveltejs/kit";

export async function POST( {request} : any)  {
    const { values } = await request.json();

    const calculate = (s) =>  {
        let stack = [];
        let num: number | string = '';
        let sign = null
        
        for(let i = 0; i <= s.length; i++){    
          const curr = s[i];
          //handle space
          if(curr === ' ') continue;
          //if char is a number
          if(!isNaN(curr)) num+=curr;
          //if we have a  sign + - / *
          if(isNaN(curr)){
            num = Number(num)
            switch(sign){
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
                
                stack.push(parseInt(stack.pop()/num, 10))
                break;           
            }
            
            sign = curr;
            
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























 
   