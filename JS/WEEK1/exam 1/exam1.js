


//task 10

// function ilhom (n)
// {
//     let  cnt=1
//     for(let i=1; i<=n; i++)
//     {
//         cnt*=i
//     }
//     return cnt;
// }
// console.log(ilhom(4));




//task 8
// function ilhom(n) {
//     let cnt = 0
//     for (let i = n; i > 0; i = Math.floor(i / 10)) {

//         if (i % 10 == Math.floor(i / 10) % 10) {
//             return true
//         }
//     }
//     return false
// }
// console.log(ilhom(11028));


//task 2
// function ilhom(n) {


//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         if (i % 10 == 7) {
//             return "boom"
//         }

//     }
//     return "this is not 7"
// }
// console.log(ilhom(1277));


//task 4 
// function ilhom(n)
// {
//      let cnt =0
//     for(let i=0; i<=n; i++)
//     {
//       cnt+=i**3
//     }
//      return cnt
// }
// console.log(ilhom(3));

// task 6

// function ilhom(n)
// {


// let a=""
// let max=0
// {
//  for( let i=n; i>0; i=Math.floor(i/10))
//  {
//     a=i%10
//     if(a>max){max=a}
//  }
//  return max
// }
// }
// console.log(ilhom(1732));
// console.log(ilhom(897));


//task 7

// function ilhom(n)
// {
//     let a=0
//     let b=1
//     let s=0
//     for(let i=2; i<=n; i++) 
//     {
//         s=a+b;
//         a=b;
//         b=s;
//     }
//     return s;
// }
// console.log (ilhom (3))


// //task 5
// function ilhom(n)
// {


// let a=""
// {
//     for(let i=n; i<=0; i=Math.floor(i/10)) 
//     {
//         a+=i%10
//     }
//     return a==n;

// }
// }
// console.log (ilhom(7227))


// //task 3
// function ilhom(n) {
//     let end = ""
//     let cnt = 0
//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         end = i % 10;
//         cnt += end

//     }
//     if (cnt > 10) {

//         let start = ""
//         let ntc = 0
//         for (let i = cnt; i > 0; i = Math.floor(i / 10)) {
//             start = i % 10
//             ntc += start
//         }
//         return ntc
//     }
//     return cnt

// }
// console.log(ilhom(38));

// function ilhom(n)
// {
//     let cnt=0
//     for(let i=n; i>0; i=Math.floor(i/10))
//     {
//         if(i%2==0)
//         {
//             cnt++;
//         }
        
//     }
//     return cnt;
// }
// console.log(ilhom(123456));

//task 9

function ilhom(n)
{
    let cnt=0
    for(let i=n; i>0; i=Math.floor(i/10))
    {
       if(i%2==0)
       {
        cnt+=i
       }
       
    }
 return cnt;
}
console.log(ilhom(1245));















