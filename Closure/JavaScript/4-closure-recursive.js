'use strict';
let arr=[]
let step = 0
const add = (x) => (y) => {
  step++
  const z = x + y;
  console.log(x + '+' + y + '=' + z);
  arr.push({step: step, x: x, y: y, z: z})
  return add(z);
};

// const add = x => y => add(x + y);

// Usage
// Причина ошибки вычисления:  
const a1 = add(5);
const a2 = a1(2); //5+2=7 
const a3 = a2(3);  //7+3=10
const a4 = a1(1); //Ссылка на первый вызов (x=5) 5+1=6
const a5 = a2(10); //Ссылка на второй вызов (x=7) 7+10=17
/* ИтогоЖ:
   a1= add(5)
   a2 = add(5)(2) 5+2
   a3 = add(5)(2)(3) 5+2+3
   a4 = add(5)(1) 5+1
   a5 = add(5)(2)(10) 17 
   *********
   add(5)(2) = return 5+2
   add(5)(2)(10) return (x=z=5+2)(y=10)
   add(5)(2)(3) return (x=z=5+2)(y=3) 
*/ 
console.log('const a1 = add(5);\nconst a2 = a1(2);\nconst a3 = a2(3);\nconst a4 = a1(1);\nconst a5 = a2(10);\n')
// console.log(''+a1, ''+a2, ''+a3, ''+a4, ''+a5);

const res = add(1)(4)(8)(8);
const res2 = add(5)(2)(3)(1)(10);
console.log('const res = add(1)(4)(8)(8);')
// console.log(res);
console.dir(arr);
console.log('5+2+3+1+10='+(+5+2+3+1+10))
console.log('1+4+8+8='+(1+4+8+8))