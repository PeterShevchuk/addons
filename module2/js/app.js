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
];

const result = (task, message) => {
  let createText = document.createElement("p");
  createText.append(message);
  classTasks[task].querySelector(".result").append(createText);
};

const task1 = {
  btnClick: classTasks[1].querySelector("[type='button']"),
  inputCheck: classTasks[1].querySelector("[type='text']"),
  check() {
    let str = this.inputCheck.value;
    this.out = str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    result(1, this.out)
  },
};

task1.btnClick.addEventListener("click", () => {
  task1.check();
});


const task2 = {
  btnClick: classTasks[2].querySelector("[type='button']"),
  inputCheck: classTasks[2].querySelector("[type='text']"),
  check() {
    let str = this.inputCheck.value.toLowerCase().split(""); 
    let strI = "eyuioaуеіаоєяиюїыэ"; 
    this.out = str.reduce((sum, val) => { strI.indexOf(val) !== -1? sum++ : null; return sum; }, 0);
    result(2, `Кількість голосних букв: ${this.out}`)
  },
};

task2.btnClick.addEventListener("click", () => {
  task2.check();
});


const task5 = {
  btnClick: classTasks[5].querySelector("[type='button']"),
  inputCheck: classTasks[5].querySelector("[type='text']"),
  check() {
    result(5, `Собачці ${this.inputCheck.value*7} людських років`)
  },
};

task5.btnClick.addEventListener("click", () => {
  task5.check();
});
