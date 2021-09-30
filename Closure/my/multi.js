const add = (x) => (y) => {
  const z = x * y;
  console.log(x + '*' + y + '=' + z);
  return add(z);
};
add(1)(2)(3)(4)(5)(6)