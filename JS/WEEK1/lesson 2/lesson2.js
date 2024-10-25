
   //task 1
// function longestTime(ha,mi,se)
// {
//     let h=ha*3600;
//     let m=mi*60;
//     if(h>m && h>se)
//     {
//         return ha;
//     }
//     else if(m>h && m>se)
//     {
//         return mi;
//     }
//     else{
//         return se;
//     }
    

// }
// console.log(longestTime(2,300,150000))


//task 2

// function same(a)
// {
//     let s= math.flor(a/100)%10 
//     let b= math.flor(a/10)%10 
//     let n=  a%10;
//     if(s==b && s==n  ||  b==s && b==n  || n==s &&  n==b )
//     {
//         return true
//     }
//     else 
//     {
//         return  false
//     }
   
// }

// console.log(same(212))

//task 4  

// function largestSwap(num) {
    

// let a=Math.floor(num/10)
// let b=num%10;

// if( num>b+""+a)
// {
//     return "true"
// }
// else 
// {
//      return "false"
// }
// }
// console.log(largestSwap(53))
   
  //task 5

// function ilhom(a)
// {
//     let sum=0;
//     for(let  i=1; i<=a; i++)
//     {
//         sum+=i;
//     }
//     return sum
// }
// console.log(ilhom(4))
  
 //task 6

// function ilhom(a,b)

// {
//     let cnt=0;
//     for (let i=a; i<=b; i++)
//     {
//         if(i%2==0)
//         {
//             cnt+=i
//         }
//     }
//     return cnt;
// }
// console.log(ilhom(-5 ,-3))
// console.log(ilhom(-14 , -18))
 
     //task 7
// function maxNum(num) {
//     let max = -Infinity; // 4
//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//       let lastNum = i % 10;
//       if (lastNum > max) {
//         max = lastNum;
//       }
//     }
//     return max;
//   }
//   console.log(maxNum(32443));

// task9

// function ilhom (n)
// {
//     let sum=0
//     for(let i=1; i<=n; i++)
//     {
//         sum+=i
//     }
//     return sum
// }
// console.log(ilhom(12))



function ilhom (n)
{
    let sum=1
    for(let i=1; i<=n; i= Math.floor(i/10))
    {
       sum*=i%10
    }
    return sum;
}
console.log(ilhom (713))


//task 14

// function ilhom(n)
// {
//      let sum=1
//     for(let i=1; i<=n; i++)
//     {
//         sum=sum*i   
//      }
//      return sum
      
// }
// console.log (ilhom(4))