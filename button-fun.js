alert('Правила просты: \nНажми "Да", если согласен со своей оценкой.\nНажми "Нет" для изменения оценки.'); // Вывод сообщения сразу
if (1 == 1){
	
}

// Функция для утверждения оценки
function agreeMark() {
	alert('Поздравляем!\n' + document.getElementById('mark-info').innerHTML); // Вывод сообщения
	window.open("index.html", "_self"); // Переход на другую страницу
}

// Вывод сообщения
function changeMark(mark) {
	elem = document.getElementById('mark-info'); // Получение элемента по его id
	elem.innerHTML = "Ваша оценка - " + mark; // Изменение содержимого элемента
}

// Получение случайного числа от и до
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Перемещение кнопки
function moveRandomButton(button) {
	//alert('На меня навели');
	posX = getRandomIntInclusive(0, 1000);
	posY = getRandomIntInclusive(0, 500);
	button.style.marginLeft = posX + "px";
	button.style.marginTop = posY + "px";
}

console.log('Тестовое сообщение');