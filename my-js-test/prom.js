console.log('Import works!')
function countdown(s) {
  let up=s;
  console.log('start countdown')
  for(let i=s; i>=0; i--) {
    console.log('up var: ' + up)
    up--;
    setTimeout(function (){
      console.log('time index: '+i)
    }, (s-i)*1000)
  }
  console.log('end countdown')
}
function countdownprom(s){
  console.log('start promise counter')
  return new Promise(function(resolve, reject) {
    console.log('start promise')
    let up=s;
    for(let i=s; i>=0;i--) {
      console.log('up promise: '+up)
      up--;
      setTimeout(function (){
        if(i===0) resolve({ res: 'success'})
        else if(i===6) reject({res:'error'})
        else console.log('promise index: '+i)
      }, (s-i)*1000)
      if (i==6) break
    }
  }) 
}
countdown(8)
countdownprom(8).then((dt)=>console.log('dt: '+dt.res))