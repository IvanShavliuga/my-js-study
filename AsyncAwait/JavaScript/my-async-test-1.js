const arr = [-5, -3, 1, 2, -3, 6, -7, 8, 3, 1]
let step = 0
let curr1 = 0
let curr2 = 0

const sleep = (msec) => new Promise((resolve) => {
  setTimeout(resolve, msec);
});


const sum1 = async function() {
  curr1 += arr[step]
  step++
  await sleep(1000);
  return curr1 
};
const sum2 = async function() {
  curr2 += (arr[step]> 0)?(1):(-1)*arr[step]
  step++
  return curr1 
};
do {
(async () => {
  setTimeout(await sum1, 1000);
  setTimeout(await sum2, 1000);
  console.log('await sum1 =', curr1);
  console.log('await sum2  =', curr2);
  console.log('step: ' + step)


})();
} while (step < arr.length)