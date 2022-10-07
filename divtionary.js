"use strict";
let words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};
let ball = 0; // Лічильник правильних відповідей
let errors = 0; // лічильник помилок
// for (let key in words) {
//   document.write(key + " зберігає " + words[key] + "<br />");
// }
let n = prompt("Скільки повторень?");
let language = prompt(
  "Переклад з англійської на українську або з української на англійську («enUa» або «uaEn»)"
);
let word;
let translate;
label: for (let i = 0; i < n; i++) {
  for (word in words) {
    switch (language) {
      case "enUa":
        alert("Слово: " + word);
        translate = prompt("Введіть переклад або для завершення -'!'");
        if (translate == "!") {
          break label;
        } else if (translate == words[word]) {
          alert("Правильно!");
          ball++;
        } else {
          alert("Неправильно!");
          errors++;
        }
        break;
      case "uaEn":
        alert("Слово: " + words[word]);
        translate = prompt("Введіть переклад або для завершення -'!'");
        if (translate == "!") {
          break label;
        } else if (translate == word) {
          alert("Правильно!");
          ball++;
        } else {
          alert("Неправильно!");
          errors++;
        }
        break;
      default:
        alert("Мова введена неправильно");
        break label;
    }
  }
}
alert("Правильно: " + ball + ", неправильно: " + errors); // Виводимо повідомлення та значення лічильників правильних та неправильних відповідей
for (word in words) {
  document.write(word + ": " + words[word] + "<br>"); // Виводимо у циклі всі слова словника
}
