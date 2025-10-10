//29-lesson
//Generator functions
// function* generatorFunc() {
// 	yield 1
// 	yield 2
// 	yield 13
// 	yield 4

// 	return 3
// }
// console.log(generatorFunc(2));
//here we use generator functions as iterables
// let value = generatorFunc();
// let sequence = [0, ...generatorFunc()];
// console.log(sequence);
// let one = value.next();
// console.log(value, one);
// let two = value.next();
// console.log(one, two);
// let three = value.next();
// console.log(one, three);
// let four = value.next();
// console.log(one, four);
// let five = value.next();
// console.log(one, five);
// function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) yield i
// }
// console.log(generateSequence(0, 8))
// const uid = () => {
// 	const head = Date.now().toString(36)
// 	const tail = Math.random().toString(36).substring(2)
// 	return head + tail
// }
// const id = uid()
// let dex = id
// console.log(id)
// console.log(id)
// console.log(id)
// console.log(id)
// console.log(dex)
// function* generateSequence() {
// 	yield 1
// 	yield 2
// 	return 3
// }
//return 3 doesn't accept only yield datas add iterable
// let generator = generateSequence()
// for (let v of generator) {
// 	console.log(v)
// }
// let sequence = [...generateSequence()]
// console.log(sequence)
// const myIterable = {
// 	data: [1, 2, 3, 4, 5],
// 	[Symbol.iterator]() {
// 		let index = 0
// 		return {
// 			next: () => {
// 				if (index < this.data.length) {
// 					return { value: this.data[index++], done: false }
// 				}
// 				return { done: true }
// 			},
// 		}
// 	},
// }
// console.log(myIterable)
// let iterator = myIterable[Symbol.iterator]()
// console.log(iterator.next())
// function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) {
// 		yield i
// 	}
// }
// generateSequence(0, 32)
// let i = generateSequence(0, 32)
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// function* generatePasswordCodes() {
// 	// 0..9
// 	yield* generateSequence(48, 57)

// 	// A..Z
// 	yield* generateSequence(65, 90)

// 	// a..z
// 	yield* generateSequence(97, 122)
// }

// let str = ''

// for (let code of generatePasswordCodes()) {
// 	str += String.fromCharCode(code)
// }
// console.log(str)
// function* gen() {
// 	let ask1 = yield '2+2'
// 	console.log(ask1)
// }
// let generator = gen()
// console.log(generator.next().value)
// function* sequence() {
// 	yield 1
// 	yield 2
// 	yield 3
// }
// let seq = sequence()
// console.log(seq.next())
// console.log(seq.next())
// console.log(seq.return('foo'))
// console.log(seq.next())
// console.log(seq.next())
// console.log(seq.next())

//Exercie 1
// function* pseudoRandom(n) {
// 	let next = (n * 16807) % 2147483647
// 	for (let i = 1; next >= i; i++) {
// 		n = n + i
// 		next = (n * 16807) % 2147483647
// 		yield next
// 	}
// }
// let gener = pseudoRandom(1)
// console.log(gener.next().value)
// console.log(gener.next().value)
// console.log(gener.next().value)
// let range = {
// 	from: 1,
// 	to: 5,
// 	[Symbol.iterator]() {
// 		return {
// 			current: this.from,
// 			last: this.to,
// 			next() {
// 				if (this.current <= this.last) {
// 					return { done: false, value: this.current++ }
// 				} else {
// 					return { done: true }
// 				}
// 			},
// 		}
// 	},
// }
// for (let value of range) {
// 	console.log(value)
// }
// let rang = {
// 	from: 1,
// 	to: 5,
// 	[Symbol.asyncIterator]() {
// 		return {
// 			current: this.from,
// 			last: this.to,
// 			async next() {
// 				if (this.current <= this.last) {
// 					return { done: false, value: this.current++ }
// 				} else {
// 					return { done: true }
// 				}
// 			},
// 		}
// 	},
// }
// ;(async () => {
// 	for await (let value of rang) {
// 		console.log(value)
// 	}
// })()
function* generateSequence(start, end) {
	for (let i = start; i <= end; i++) {
		yield i
	}
}

console.log(generateSequence(10, 16))
for (let v of generateSequence(10, 16)) {
	console.log(v)
}
