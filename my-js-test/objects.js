const Person = {
  login: "No",
  age: 0,
  ["First name"]: "Noname",
  ["Last name"]: "Nonexs",
  toString() {
    return `@${this.login}: ${this["First name"]} ${this["Last name"]} ${this.age}`;
  },
  valueOf() {
    return 0 + this.age;
  }
};

const Person1 = Object.create(Person);
const Person2 = Object.create(Person);

Person1.age = 33;
Person1.login = "iv2";
Person1["First name"] = "Ivan";
Person1["Last name"] = "Ivanov";

Person2.age = 6;
Person2.login = "nunex";
Person2["First name"] = "Max";
Person2["Last name"] = "Brunev";

console.log(`${Person1}`);
console.log(`${Person2}`);

console.log(+Person1);
console.log(+Person2);

console.log(Person1 > Person2);
// window.onload = () => {
document.getElementById("app").innerHTML += `
<h3>Object Person</h3>
<pre>
const Person = {
  login: "No",
  age: 0,
  ["First name"]: "Noname",
  ["Last name"]: "Nonexs",
  // converting an object to a string
  toString() {
    return ${'`@${this.login}: ${this["First name"]} ${this["Last name"]} ${this.age}`;'}
  },
  // converting an object to a number
  valueOf() {
    return 0 + this.age;
  }
};
// Creating two new objects by inheritance
const Person1 = Object.create(Person);
const Person2 = Object.create(Person);
// First Person
Person1.age = 33;
Person1.login = "iv2";
Person1["First name"] = "Ivan";
Person1["Last name"] = "Ivanov";
// Last Person
Person2.age = 6;
Person2.login = "nunex";
Person2["First name"] = "Max";
Person2["Last name"] = "Brunev";
// call function toString
console.log(\`${Person1}\`); // = ${Person1}
console.log(\`${Person2}\`); // = ${Person2}
// call function valueOf
console.log(+Person1); // = ${+Person1}
console.log(+Person2); // = ${+Person2}
// The comparison of the two objects should be carried out by age
console.log(Person1 > Person2) // = ${Person1 > Person2}
</pre>
`;
// } 
/* let bncode = 0b1010;
console.log(bncode.toString(2));
console.log((bncode << 1).toString(2));
console.log((bncode & 0b1000).toString(2));
console.log((bncode | 0b0001).toString(2));
console.log((bncode ^ 0b1100).toString(2));
console.log((bncode >> 2).toString(2));
let bytecode = 0xff;
for (let n = 1; n <= 8; n++) {
  console.log(
    `${bytecode.toString(2)}&${(2 ** n).toString(2)}=${(
      bytecode &
      (2 ** n)
    ).toString(2)}`
  );
  console.log(
    `${bytecode.toString(2)}|${(2 ** n).toString(2)}=${(
      bytecode |
      (2 ** n)
    ).toString(2)}`
  );
  console.log(
    `${bytecode.toString(2)}^${(2 ** n).toString(2)}=${(
      bytecode ^
      (2 ** n)
    ).toString(2)}`
  );
}
*/
