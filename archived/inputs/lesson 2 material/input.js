const inputs = document.querySelectorAll('.checkbox')
const list = document.querySelector('.list')

const tmpList = [];

for (let input of inputs) {
	input.addEventListener('click', (el) => {
		if (tmpList.includes(el.target.value)) {	
			const index = tmpList.findIndex(tmp => tmp === el.target.value)
			tmpList.splice(index, 1)
		} else {
			tmpList.push(el.target.value)
		}
		
		list.textContent = tmpList.join(', ')
	})
}


const radioInputs = document.querySelectorAll('.radio')
const gift = document.querySelector('.gift')

for (let radio of radioInputs) {
	radio.addEventListener('click', (el) => {
		gift.textContent = el.target.value
	})
}

