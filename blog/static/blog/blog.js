// // function sayHello(yourName) {
// //   if (yourName === undefined) {
// //     console.log('Hello, no name')
// //   } else {
// //     console.log("Hello," + yourName)
// //   }
// // }

// // const yourName = 'Hassan Memon'

// // console.log("Before setTimeout")

// // setTimeout(() => {
// //     sayHello(yourName)
// //   }, 2000
// // )

// // console.log('After setTimeout')

// for(let i = 0; i < 10; i += 1) {
//   console.log('for loop i: ' + i)
// }

// let j = 0
// while(j < 10) {
//   console.log("while loop j: " + j)
//   j += 1
// }

// let k = 10

// do{
//   console.log("do while loop k: " + k)
// } while(k < 10)

// const numbers = [0,1,2,3,4,5,6,7,8,9]

// numbers.forEach((value => {
//   console.log("forEach loop value + " + value)
// }))

// const double = numbers.map(value => value * 2)
// console.log("map function value")
// console.log(double)

// class Greeter {
//   constructor(name) {
//     this.name = name
//   }

//   getGreeting() {
//     if (this.name === "undefined") {
//       return "Hello, no name"
//     }
//     return "Hello, " + this.name
//   }

//   showGreeting(greetingMessage) {
//     console.log(greetingMessage)
//   }

//   greet() {
//     this.showGreeting(this.getGreeting())
//   }
// }

// const g = new Greeter("Hassan")
// g.greet()


// class DelayedGreeter extends Greeter {
//   delay = 2000

//   constructor (name, delay) {
//     super(name)

//     if (delay !== undefined) {
//       this.delay = delay
//     }
//   }

//   greet () {
//     setTimeout(
//       () => {
//         this.showGreeting(this.getGreeting())
//       }, this.delay
//     )
//   }
// }

// const dg2 = new DelayedGreeter("Hassan 2 seconds")
// dg2.greet()

// const dg1 = new DelayedGreeter("Hassan 1 second", 1000)
// dg1.greet()

// function resolveCallback(data) {
//   console.log("Resolved with data " + data)
// }

// function rejectCallback(message) {
//   console.log("Rejected with message: " + message)
// }

// const lazyAdd = (a, b) => {
//   const doAdd = (resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject("a and b must be type of number")
//     } else {
//       const result = a + b
//       resolve(result)
    
//     }
//   }
//   return new Promise(doAdd)

// }

// const p = lazyAdd(3, 4)
// p.then(resolveCallback, rejectCallback)

// lazyAdd("non", "number").then(resolveCallback, rejectCallback)

class ClickButton extends React.Component {
  state = {
    wasClicked: false
  }

  handleClick () {
    this.setState(
      {wasClicked: true}
    )
  }

  render () {
    let buttonText

    if (this.state.wasClicked)
      buttonText = 'Clicked!'
    else
      buttonText = 'Click Me'

    return React.createElement(
      'button',
      {
        className: 'btn btn-primary mt-2',
        onClick: () => {
          this.handleClick()
        }
      },
      buttonText
    )
  }
}

const domContainer = document.getElementById('react_root')
ReactDOM.render(
  React.createElement(ClickButton),
  domContainer
)