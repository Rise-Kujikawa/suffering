setTimeout(() => {
	console.log('setTimeout')
})

const promise = new Promise((res, rej) => {
	console.log('INSIDE PROMISE')
	res('after promise')
})

promise
	.then((res) => console.log(res))


console.log('END')

