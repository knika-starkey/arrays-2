// let arr = {
//   vasya: "apple",
//   petya: "banana",
//   valya: "chestnut",
// };
// alert(arr.vasya);
let phrases = [
  "Звучить погано",
  "Так, це безперечно треба зробити",
  "Не думаю, що це хороша ідея",
  "Може, не сьогодні?",
  "Комп'ютер каже: ні!",
]; // масив відповідей

let question = prompt("Задайте питання ворожці"); // отримати питання
let randomIndex = Math.floor(Math.random() * phrases.length); // отримати випадковий індекс із масиву відповідей
let answer = phrases[randomIndex]; // отримати відповідь з масиву питань щодо випадкового індексу
alert(answer); // показати відповідь
