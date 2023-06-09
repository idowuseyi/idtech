const getResponse = true

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (getResponse) {
      resolve('true')
    } else {
      reject('false')
    }
  })
}

// const response = getResponseFromAPI();
// console.log(response instanceof Promise);
// let success = true
// function getFullResponseFromAPI(success) {
//   return new Promise((resolve, reject) => {
  
//   if (success == true) {
//     resolve({
//       status: 200,
//       body: 'Success'
//     })
//   } else {
//     reject('The fake API is not working currently, Try testing it out for yourself')
//   }
// })
// }

// getFullResponseFromAPI().then((message) => {
//   console.log(message)
// }).catch((error) => {
//   console.log(error)
// })

// //const response = getFullResponseFromAPI();
// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));


function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'sucess'
    })
    reject({})
  }) 
}

