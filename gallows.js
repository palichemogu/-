let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
//---------------------functions-----------------------
var pickWord = function () {
 // Возвращает случайно выбранное слово

 var words = [
 "программа",
 "макака",
 "прекрасный",
 "оладушек"
 ];
 let fails=0;
 // Выбираем случайное слово
 var word = words[Math.floor(Math.random() * words.length)];
 return word;
};//complete

var setupAnswerArray = function (word) {
 // Возвращает итоговый массив для заданного слова word
 // Создаем итоговый массив
 var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
 }
 return answerArray;
};//complete

var showPlayerProgress = function (answerArray) {
 // С помощью alert отображает текущее состояние игры
 // Показываем состояние игры
 alert(answerArray.join(" "));
};//complete

var getGuess = function () {
 // Запрашивает ответ игрока с помощью prompt
 // Запрашиваем вариант ответа
 var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
 return guess;
};//complete

var updateGameState = function (guess, word, answerArray) {
 // Обновляет answerArray согласно ответу игрока (guess)
 // возвращает число, обозначающее, сколько раз буква guess
 // встречается в слове, чтобы можно было обновить значение
 // remainingLetters
 guess=guess.toLowerCase();
 var numberGuess=0;
 for (var j = 0; j < word.length; j++) {
 if (word[j] === guess && answerArray[j]==="_") {
 answerArray[j] = guess;
 numberGuess++;
 }
 }
 return numberGuess;
};
var showAnswerAndCongratulatePlayer = function (answerArray) {
 // С помощью alert показывает игроку отгаданное слово 
 // и поздравляет его с победой
 // Отображаем ответ и поздравляем игрока
 alert(answerArray.join(" "));
 alert("Отлично! Было загадано слово " + word);
};
//---------------------functions-----------------------
//---------------------game----------------------------
// Создайте здесь свои функции
// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
var kolvoPopitok=0;
var test=true;

while (remainingLetters > 0 && kolvoPopitok<6) {
    showPlayerProgress(answerArray);
 // guess: ответ игрока
 var guess = getGuess(); 
 if (guess === null) {
test=false;
 break;
 }
  else if (guess.length !== 1) {
 alert("Пожалуйста, введите одиночную букву.");
 kolvoPopitok++;
 } 
 else {
 // correctGuesses: количество открытых букв
 var correctGuesses = updateGameState(guess, word, 
answerArray);
 remainingLetters -= correctGuesses;
  if(correctGuesses===0)
  {kolvoPopitok++;}
 }

}
if(test===false)
{alert("Вы сдались!");}
else
{if(kolvoPopitok<6){
showAnswerAndCongratulatePlayer(answerArray);}
else{alert("Вы допустили 6 ошибок!");}
}
//---------------------game----------------------------