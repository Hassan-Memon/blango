// function sayHello(yourName) {
//   if (yourName === undefined) {
//     console.log('Hello, no name')
//   } else {
//     console.log("Hello," + yourName)
//   }
// }

// const yourName = 'Hassan Memon'

// console.log("Before setTimeout")

// setTimeout(() => {
//     sayHello(yourName)
//   }, 2000
// )

// console.log('After setTimeout')

for(let i = 0; i < 10; i += 1) {
  console.log('for loop i: ' + i)
}

let j = 0
while(j < 10) {
  console.log("while loop j: " + j)
  j += 1
}

let k = 10

do{
  console.log("do while loop k: " + k)
} while(k < 10)

const numbers = [0,1,2,3,4,5,6,7,8,9]

numbers.forEach((value => {
  console.log("forEach loop value + " + value)
}))

const double = numbers.map(value => value * 2)
console.log("map function value")
console.log(double)