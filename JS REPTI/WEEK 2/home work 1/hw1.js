//task 1

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   delay(2000).then(() => console.log("2 seconds passed"));


  //task 2

//   const promise1 = new Promise(resolve => setTimeout(() => resolve('First done'), 1000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Second done'), 2000));

// Promise.all([promise1, promise2])
//   .then(results => console.log(results));


//task 3
// let  promise1 = new Promise(resolve => setTimeout(() => resolve('First done'), 6000));
// let  promise2 = new Promise(resolve => setTimeout(() => resolve('Second done'), 1000));

// Promise.all([promise1, promise2])
//   .then(results => console.log(results));


// task 4


// new Promise(resolve => resolve(4))
//   .then(result => result + 1)
//   .then(result => result * 2)
//   .then(result => console.log(result));  




//task 5
 
// let promises = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('First done'), 1000);
//     setTimeout(() => reject(new Error('Something failed')), 1000);
//   });

  
// promises
//   .then(result => console.log(result))
//   .catch(error => console.error(error.message));




//task 6
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('HELLO WORLD'), 1000);
  
//   });
  
//  promise1.then(result => console.log(result)) .catch(error => console.error(error));



//task 7

// const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 finished in 1 second'), 1000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 finished in 2 seconds'), 2000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 finished in 3 seconds'), 3000));

// Promise.race([promise1, promise2, promise3])
//   .then(result => console.log(result))
//   .catch(error => console.log(error));



  // task 8

//   function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const data = { name: "Alice", age: 25 };
//         resolve(data);
//       }, 1000);
//     });
//   }
  
 
//   fetchData().then(data => console.log(data));
  

 



