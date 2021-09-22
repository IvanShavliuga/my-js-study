import "./styles.css";

/* toString & toNumber */
function Temperature(degress) {
  this.degress = degress;
}
Temperature.prototype[Symbol.toPrimitive] = function (hint) {
  switch (hint) {
    default:
      return this.degress;
    case "string":
      return this.degress + "\u00b0";
    case "number":
      return this.degress;
    case "default":
      return this.degress + " degress";
  }
};

var fr = new Temperature(-16);
console.log(fr + "!");
console.log(+fr + 2);
console.log(String(fr));

let symtest = Symbol("symtest");
const obj = {
  foo: "bar",
  tts: "*.ts",
  [symtest]: "nu-test"
};

const arr = ["dta", "etr", "fgt"];
for (let sp of arr) {
  let np = Symbol.for(sp);
  obj[np] = sp;
}
console.log("foo" in obj);
console.log("tts" in obj);
for (const pr in obj) console.log(obj[pr]);
console.log(obj["symtest"]);
console.log(obj[symtest]);
console.log("pro" in obj);
for (let sp of arr) {
  let np = Symbol.for(sp);
  console.log(obj[np]);
}
const fn = "cos";
console.log(Math[fn](2 * Math["PI"]));
const str = "2*sin(5*x+3)-2";
console.log(str);
for (let s of str) console.log(s);
const st = new Set([1, 2, 3, 4, 5, 6]);
console.log(st);

/* document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
