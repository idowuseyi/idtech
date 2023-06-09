// let p = new Promise((resolve, reject) => {
//   let a = 1+1
//   if (a == 3) {
//     resolve('Success')
//   } else {
//     reject('Failed')
//   }
// })



// p.then((message) => {
//   console.log('This is in the then ' + message)
// }).catch((message) => {
//   console.log('This is in the catch ' + message)
// })


// A call back function
// const userLeft = false
// const userWatchingCatMeme = true

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':('
//     })
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat'
//     })
//   } else {
//     callback('Thumbs up and Subscribe')
//   }
// }

// watchTutorialCallback((message) => {
//   console.log('Success: ' + message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })


// RE WRITING THE ENTIRE CALLBACK FUNCTION ABOVE TO USE PROMISE 

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User Left',
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat'
//       })
//     } else {
//       resolve('Thumbs up and Subscribe')
//     }  
//   })
// }

// watchTutorialPromise().then((message) => {
//   console.log('Success: ' + message)
// }).then((message) => {
//   console.log('Success: ' + message)
// }).catch((error) => {
//   console.log(error.name + ' ' + error.message)
// })


// WHAT WE CAN DO WITH PROMISES


const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

// once all succeed or when all succeed
// Promise.all([recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then((messages) => {
//   console.log(messages)
// })

//if we just want the resolve when once one succeed

Promise.race([recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})