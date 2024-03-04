const els = document.querySelectorAll('p')

// hasAttribute(name) -> void
// getAttribute(name) -> значение аттрибута
// setAttribute(name, value) -> void
// removeAttribute(name) -> void

for (let el of els) {

	if (el.textContent === 'Hello') {
		el.setAttribute('class', 'green')
		el.setAttribute('foo', 'test')
	} else {
		el.setAttribute('class', 'red')
		el.setAttribute('bar', 'test')
	}

	const obj = {
		addEventListener: 'heloo'
	}

	el.addEventListener('click', () => {
		if (el.getAttribute('class') === 'green') {
			el.textContent += ' Its green text'
		}
	
		if (el.getAttribute('class') === 'red') {
			el.textContent += ' its red text'
		}
	})

	el.addEventListener('mouseover', () => {
		if (el.hasAttribute('foo')) {
			el.style.fontSize = '26px'
		} 
		if (el.hasAttribute('bar')) {
			el.style.fontSize = '36px'
		}
		el.removeAttribute('class')
	})

	el.addEventListener('mouseleave', () => {
		el.style.fontSize = '12px'
	})
}