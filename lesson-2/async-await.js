
async function foo() {
	const promise = new Promise((res,rej) => {
		setTimeout(() => rej('promise'))
	})
	let result = null
	try {
		result = await promise
	} catch(err) {
		console.log('My err ', err)
	}

	console.log(result)

	console.log('console')

}

// foo()


async function fetchPosts() {
	let request = null;
	try {
		request = await fetch('https://jsonplaceholder.typicode.com/posts')
	} catch(err) {
		request = 'Request error'
	}

	return request
}

async function fetchUsers() {
	const request = await fetch('https://jsonplaceholder.typicode.com/users')

	return request
}

let data = null
const main = document.querySelector('.main')

async function fillPosts() {
	try {
		data = await fetchPosts() 
		if (data === 'Request error') {
			console.log('Error', data)
		} else {
			const posts = await data.json()

			posts.forEach(element => {
				const post = document.createElement('p')
				post.textContent = element.title
				main.appendChild(post)
			})
		}
	} catch(err) {
		console.log(err)
	}
}

fillPosts()