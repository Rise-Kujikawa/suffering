setTimeout(() => {
	console.log('setTimeout 1')
})

const promise = new Promise((res, rej) => {
	res('after promise')
})

let promise2 = null

setTimeout(() => {
	console.log('setTimeout 2')
	promise2 = new Promise((res, rej) => {
		console.log('after setTimeout 2')
		res('promise inside setTimeout 2');
	})
})

promise
	.then((res) => console.log(res))


// | |
// | |
// |console.log('setTimeout 2')
// new Promise((res, rej) => {
// 	console.log('after setTimeout 2')
// 	res('promise inside setTimeout 2');
// }).then((res) => console.log(res)) |

// [
// 	then((res) => console.log(res)) |
// ]

console.log('END')

