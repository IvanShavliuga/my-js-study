// Old style code
function Userold(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}

Userold.prototype.raiseSalary = function (percent) {
  this.salary *= 1 + percent / 100;
};

Userold.prototype.print = function () {
  return `@${this.name} (${this.age}) -> ${this.salary.toFixed(3)}`;
};

const userold1 = new Userold("nunex", 18, 30);
const userold2 = new Userold("iv2", 33, 76);

userold1.raiseSalary(3);
userold2.raiseSalary(12);

userold1.print();
userold2.print();

//new style

class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  raiseSalary(precent) {
    this.salary *= 1 + precent / 100;
  }
  print() {
    return `@${this.name} (${this.age}) -> ${this.salary.toFixed(3)}`;
  }
}

const usernew1 = new Employee("nunex", 18, 30);
const usernew2 = new Employee("iv2", 33, 76);

usernew1.raiseSalary(3);
usernew2.raiseSalary(12);

usernew1.print();
usernew2.print();

// for (const pr in userold1) console.log(`USR->${pr}:${userold1[pr]}`);
document.getElementById("app").innerHTML = `
<h1>Classes test</h1>
<h3>old style</h3>
<ul>
  <li><code>${userold1.print()}</code></li>
  <li><code>${userold2.print()}</code></li>
</ul>
<h3>new style</h3>
<ul>
  <li><code>${usernew1.print()}</code></li>
  <li><code>${usernew2.print()}</code></li>
</ul>
`;
