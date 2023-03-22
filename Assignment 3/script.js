var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLis = document.querySelectorAll('li')

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// eventListener para todos os Li adicionados e os seus respectivos botoes de exclusao e eventListeners
	li.addEventListener("click", event => {
		if (event.target.classList.contains('done')) {
			event.target.classList.remove('done')
		} else {
			event.target.classList.add('done')
		}
	})

	const buttonElement = document.createElement('button')
	buttonElement.textContent = 'delete'

	li.appendChild(buttonElement)

	buttonElement.addEventListener("click", event => {
		ul.removeChild(li)
	})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// eventListener para todos os Li previamente definidos e para criar botoes de exclusao e seus eventListeners
allLis.forEach(liElement => {
	liElement.addEventListener("click", event => {
		if (event.target.classList.contains('done')) {
			event.target.classList.remove('done')
		} else {
			event.target.classList.add('done')
		}
	})

	const buttonElement = document.createElement('button')
	buttonElement.textContent = 'delete'

	liElement.appendChild(buttonElement)

	buttonElement.addEventListener("click", event => {
		ul.removeChild(liElement)
	})
})