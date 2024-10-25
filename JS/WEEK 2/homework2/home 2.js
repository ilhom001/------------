 //tASK 1

// function  rek(n)
// {
//    if(n==0)
//    {
//     return 1
//    }
//    return n*rek(n-1)
// }
// console.log(rek(5));

//task 2


// function  rek(n)
// {
//    if(n==0)
//    {
//     return 0
//    }
//    return n+rek(n-1)
// }
// console.log(rek(5));

//task 3

// function  rek(n,a)
// {
   
//    if(a==0)
//    {
//     return 1
//    }
//    return   n * rek(n,a-1)
// }
// console.log(rek(5,2));

//task 5
//  function ilh(n)
// {
//     let cnt=n
//    9 return (m)=>{
//         return cnt+=m
//     }
// }
// let a=ilh(5) 
// console.log(a(3));
// console.log(a(5)

//мавмививив

// console.log(textReverse("This is lacipyt sentence."));
// function textReverse(num) {
//   let ar = num.split(" ");
//   let cnt = "";
//   let q = "";
//   let s = "";
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i].length >= 5) {
//       for (let j = ar[i].length - 1; j >= 0; j--) {
//         cnt += ar[i][j];
//       }
//       s += cnt + " ";
//       cnt = "";
//     } else {
//       q += ar[i] + " ";
//     }
//   }
//   return q.concat(s);
// }

//helooo
// function rep(str, num) {
//     return str.slice(0, -1).concat(str.at(-1).repeat(num - 1), str.at(-1));
//   }
//   console.log(rep("Helo", 3));
