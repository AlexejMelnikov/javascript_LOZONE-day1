// чекбокс  
// оббъявили переменную чекбокс и передаём ей ссылку на чекбокс
const checkbox = document.querySelectorAll('.filter-check_checkbox');
// отображае элемента в виде объекта
console.dir(checkbox);
// использование функции для каждого элемента массива
checkbox.forEach( function(element, index) {
	// прослушивать выбранный элемент
element.addEventListener('change', function(){
	// this это ссыка на контекст вызова
	// === рекомендуется к использованию. Более строгое сравнение,но быстрее

	if(this.checked === true){
		// обращение к следующему элементу "брат"
		this.nextElementSibling.classList.add('checked');
	}else {
		this.nextElementSibling.classList.remove('checked');
	}
	});
});

// у стрелочной функции нет контекста вызова и $this это в данном случае ссылка на window
// checkbox.addEventListener('change', () =>{
// 	console.log(this);
// })
// обработчик события изменения состояния
// более старый метод взамен порслушиванию события
// checkbox.onchange = function(){
	
// }
// end чекбокс 
// корзина
const ctnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeCart = document.querySelector('.cart-close');

ctnCart.addEventListener('click', () => {
	// свойство котороеотменяет скрол картинки при открытом окне корзины
	document.body.style.overflow = 'hidden';
	modalCart.style.display = 'flex';
	
	// modalCart.style.backgroundColor = 'red';
});
closeCart.addEventListener('click', () => {
	
	modalCart.style.display = 'none';
	// убираем свойство которое отменяет скрол картинки при открытом окне корзины
	document.body.style.overflow = '';
});
//end корзина

// работа с товаром
const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper'),
cartEmpty = document.getElementById('cart-empty');
cards.forEach( function(element, index) {
	const btn = element.querySelector('button');
	btn.addEventListener('click', () => {
		// клонировали окно карточки по которой щелкнули
		const cardClone = element.cloneNode(true);
		// добавили клонированный элемент в обертку корзины
		cartWrapper.appendChild(cardClone);
		cartEmpty.remove();
		showData();
	});
});

function showData(){
	const cardsCart = cartWrapper.querySelectorAll('.card'),
	counter = document.querySelector('.counter');
	// textContent свойство позволяющее записывать текст внутрь элемента
	counter.textContent = cardsCart.length;
}
//end работа с товаром
