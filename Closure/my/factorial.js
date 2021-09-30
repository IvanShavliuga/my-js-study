const fact = (x) => { 
  if (!x) return 1
  const z = x * fact(x-1);
  console.log(x+' : '+z);
  return z;
};
fact(6)