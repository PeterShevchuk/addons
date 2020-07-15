import users from "./users.js";

const classTasks = [
  "",
  document.querySelector(".task1"),
  document.querySelector(".task2"),
  document.querySelector(".task3"),
  document.querySelector(".task4"),
  document.querySelector(".task5"),
  document.querySelector(".task6"),
  document.querySelector(".task7"),
  document.querySelector(".task8"),
  document.querySelector(".task9"),
];

const task1 = {
  btnClick: classTasks[1].querySelector("[type='button']"),
  inputCheck: classTasks[1].querySelector("[type='year']"),
  intercalary: ["Високосний", "Не високосний"],
  years: 0,
  createText: "",

  check() {
    this.years = this.inputCheck.value;
    if (Boolean(this.years)) {
      this.createText = document.createElement("p");
      this.createText.append(`${this.years} - ${new Date(this.years, 1, 29).getMonth() === 1 ? this.intercalary[0] : this.intercalary[1]}`);
      classTasks[1].append(this.createText);
    } else {
      alert("Введено не вірно!");
    }
  },
};

task1.btnClick.addEventListener("click", () => {
  task1.check();
});

const task2 = {
  btnClick: classTasks[2].querySelector("[type='button']"),
  inputCheck: classTasks[2].querySelector("[type='number']"),
  text: ["Вітаю ви вгадали число ", "Ви програли, компютер загадав "],
  checkNumber() {
    this.createNewNumber();
    this.number = Number(this.inputCheck.value);
    alert(this.number === this.numberComp ? this.text[0] + this.numberComp : this.text[1] + this.numberComp);
  },
  createNewNumber() {
    this.numberComp = Math.floor(Math.random() * Math.floor(10));
  },
};

task2.btnClick.addEventListener("click", () => {
  task2.checkNumber();
});

const task3 = {
  btnClick: classTasks[3].querySelector("[type='button']"),
  inputCheck: classTasks[3].querySelector("[name='react']"),
  firstNumber: classTasks[3].querySelector("#firstNumber"),
  secondNumber: classTasks[3].querySelector("#secondNumber"),
  text: ["Сума", "Різниця", "Добуток", "Частка"],

  calculator() {
    classTasks[3].querySelector(".result").textContent = `${this.text[this.inputCheck.value]} чисел a i b = ${this.react(this.firstNumber.value, this.secondNumber.value, this.inputCheck.value)}`;
  },
  react(a, b, c) {
    a = Number(a);
    b = Number(b);
    return c === "0" ? a + b : c === "1" ? a - b : c === "2" ? a * b : a / b;
  },
};

task3.btnClick.addEventListener("click", () => {
  task3.calculator();
});
