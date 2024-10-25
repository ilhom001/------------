
                                //tASK 1  fakt

// function  rek(n)
// {
//    if(n==0)
//    {
//     return 1
//    }
//    return n*rek(n-1)
// }
// console.log(rek(5));




                            //task 2  fib


// function  rek(n)
// {
//    if(n==0)
//    {
//     return 0
//    }
//    return n+rek(n-1)
// }
// console.log(rek(5));




                                  //task 3  kva, kub

// function  rek(n,a)
// {

//    if(a==0)
//    {
//     return 1
//    }
//    return   n * rek(n,a-1)
// }
// console.log(rek(5,3))
//task 4


                    //task 5  +++
//  function ilh(n)
// {
//     let cnt=n
//     return (m)=>{
//         return cnt+=m
//     }
// }
// let a=ilh(5) 
// console.log(a(5));
// console.log(a(5))




// tttt 1.6
// function sumOfDigit(num) {
//     if (num === 0) return 0;
//     return (num % 10) + sumOfDigit(Math.floor(num / 10));
//   }
//   console.log(sumOfDigit(111));
//   console.log(sumOfDigit(1213211));

// tttt 1.7
// function multiSum(num, b = 10) {
//     if (b === 0) {
//       return 0;
//     }
//     return num * b + multiSum(num, b - 1);
//   }
//   console.log(multiSum(1));

// tttt 1.8
// function gcd(a, b) {
//     if (b == 0) {
//       return a;
//     }
//     return gcd(b, a % b);
//   }
//   console.log(gcd(17, 13));

// tttt 1.9
// function add_suffix(suffix) {
//     return (word) => {
//       return word.concat(suffix);
//     };
//   }
  
//   let word = add_suffix("ly");
//   console.log(word("total")); 
//   console.log(word("final")); 

// tttt 1.10
// console.log(spaceRecursion("Hello World! I am JS"));

// function spaceRecursion(str) {
//   if (str.length === 0) {
//     return 0;
//   }
//   return (str.at(-1).includes(" ")) + spaceRecursion(str.slice(0, -1));














