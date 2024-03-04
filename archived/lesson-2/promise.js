const promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		console.log('promise 1')
		res('promise 1')
	}, 1000)
})

const promise2 = new Promise((res, rej) => {
	setTimeout(() => {
		console.log('promise 2')
		res('promise 2')
	}, 500)
})

const promise3 = new Promise((res) => {
	setTimeout(() => {
		console.log('promise 3')
		res('promise 3')
	}, 3000)
})

// Promise
// 	.all([promise1, promise2, promise3])
// 	.then((result) => {
// 		console.log('then',result)
// 	})
// 	.catch(err => {
// 		console.log('Err', err)
// 	})

// Promise
// 	.allSettled([promise1, promise2, promise3])
// 	.then((result) => {
// 		console.log('then',result)
// 	})
// 	.catch(err => {
// 		console.log('Err', err)
// 	})

// Promise
// 	.race([promise1, promise2, promise3])
// 	.then((result) => {
// 		console.log('then',result)
// 	})
// 	.catch(err => {
// 		console.log('Err', err)
// 	})