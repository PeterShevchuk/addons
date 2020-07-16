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

const result = (task, message) => {
  let createText = document.createElement("p");
  createText.append(message);
  classTasks[task].append(createText);
}

const task1 = {
  btnClick: classTasks[1].querySelector("[type='button']"),
  inputCheck: classTasks[1].querySelector("[type='year']"),
  intercalary: ["Високосний", "Не високосний"],
  years: 0,

  check() {
    this.years = this.inputCheck.value;
    if (Boolean(this.years)) {
      result(1, `${this.years} - ${new Date(this.years, 1, 29).getMonth() === 1 ? this.intercalary[0] : this.intercalary[1]}`);
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
  check() {
    this.createNewNumber();
    this.number = Number(this.inputCheck.value);
    alert(this.number === this.numberComp ? this.text[0] + this.numberComp : this.text[1] + this.numberComp);
  },
  createNewNumber() {
    this.numberComp = Math.floor(Math.random() * Math.floor(10));
  },
};

task2.btnClick.addEventListener("click", () => {
  task2.check();
});

const task3 = {
  btnClick: classTasks[3].querySelector("[type='button']"),
  inputCheck: classTasks[3].querySelector("[name='react']"),
  firstNumber: classTasks[3].querySelector("#firstNumber"),
  secondNumber: classTasks[3].querySelector("#secondNumber"),
  text: ["Сума", "Різниця", "Добуток", "Частка"],

  check() {
    result(3, `${this.text[this.inputCheck.value]} чисел ${this.firstNumber.value} i ${this.secondNumber.value} = ${this.react(this.firstNumber.value, this.secondNumber.value, this.inputCheck.value)}`)
  },
  react(a, b, c) {
    a = Number(a);
    b = Number(b);
    return c === "0" ? a + b : c === "1" ? a - b : c === "2" ? a * b : a / b;
  },
};

task3.btnClick.addEventListener("click", () => {
  task3.check();
});

const task4 = {
  btnClick: classTasks[4].querySelector("[type='button']"),
  inputCheck: classTasks[4].querySelector("[type='number']"),
  inputCheckTwo: classTasks[4].querySelector("[name='react']"),
  check() {
    this.inputCheckTwo.value === "0"? result(4,  `${this.inputCheck.value}°C цельсія дорівнює ${this.inputCheck.value * 1.8 + 32}°F фаренгейта`) : result(4, `${this.inputCheck.value}°F фаренгейта дорівнює  ${this.inputCheck.value - 32 / 1.8}°C цельсія`);
  },
};

task4.btnClick.addEventListener("click", () => {
  task4.check();
});

const task5 = {
  btnClick: classTasks[5].querySelector("[type='button']"),
  inputCheck: classTasks[5].querySelector("[type='number']"),
  check() {
    this.inputCheck.value >= 55 && this.inputCheck.value <= 99
      ? result(5, ` Число ${this.inputCheck.value} входить в діапазон від 55 до 99`)
      : result(5, ` Число ${this.inputCheck.value} не входить в діапазон від 55 до 99`);
  },
};

task5.btnClick.addEventListener("click", () => {
  task5.check();
});

const task6 = {
  btnClick: classTasks[6].querySelector("[type='button']"),
  inputCheck: [classTasks[6].querySelector("[name='input1']"), classTasks[6].querySelector("[name='input2']"), classTasks[6].querySelector("[name='input3']")],
  check() {
    let inputCheckVal = [this.inputCheck[0].value, this.inputCheck[1].value, this.inputCheck[2].value]
    this.maxNumber = inputCheckVal[0];
    if (Number(inputCheckVal[0]) && Number(inputCheckVal[1]) && Number(inputCheckVal[2])) {
      for (const item of inputCheckVal) {
        item > this.maxNumber? this.maxNumber =  item : null
      }
      result(6, `Найбільше число: ${this.maxNumber}`);
    } else {
      alert('Введіть число!')
    }
  }
}
task6.btnClick.addEventListener("click", () => {
  task6.check();
});

const task7 = {
  btnClick: classTasks[7].querySelector("[type='button']"),
  inputCheck: classTasks[7].querySelector("[type='number']"),
  check() {
    this.rating = Number(this.inputCheck.value);
    if (this.rating > 100) {alert('оцінка не може бути більшою ніж 100'); return;}
    if (this.rating >= 89 && this.rating <= 100) {this.mess = 'A'}
    if (this.rating < 89) {this.mess = 'B'}
    if (this.rating < 75) {this.mess = 'C'}
    if (this.rating < 60) {this.mess = 'D'}
    if (this.rating < 45) {this.mess = 'E'}
    if (this.rating < 20) {this.mess = 'F'}

    result(7, `Оцінка студента: ${this.mess}`);
  }
}
task7.btnClick.addEventListener("click", () => {
  task7.check();
});


const task8 = {
  btnClick: classTasks[8].querySelector("[type='button']"),
  inputCheck: classTasks[8].querySelector("[type='number']"),
  check() {
    result(8, `${Math.trunc(this.inputCheck.value/60)}:${this.inputCheck.value%60}`);
  }
}
task8.btnClick.addEventListener("click", () => {
  task8.check();
});

const task9 = {
  btnClick: classTasks[9].querySelector("[type='button']"),
  inputCheck: classTasks[9].querySelector("[name='react']"),
  text: [['Камінь', 'Ножиці', 'Папір'],['нічия', 'Ви виграли', 'Ви програли']],
  check() {
    this.compNumber = Math.floor(Math.random() * Math.floor(2));
    this.userNumber = Number(this.inputCheck.value);

    if (this.userNumber === this.compNumber) {this.message = this.text[1][0]}
    if (this.userNumber === 0 && this.compNumber === 1 || this.userNumber === 1 && this.compNumber === 2 || this.userNumber === 2 && this.compNumber === 0) {this.message = this.text[1][1]}
    if (this.userNumber === 0 && this.compNumber === 2 || this.userNumber === 1 && this.compNumber === 0 || this.userNumber === 2 && this.compNumber === 1) {this.message = this.text[1][2]}
    result(9, `Ви загадали ${this.text[0][this.userNumber]}, компютер загадав ${this.text[0][this.compNumber]}, результати - ${this.message}`);
  }
}
task9.btnClick.addEventListener("click", () => {
  task9.check();
});