//task 9

// function ilhom(a)
// {
//     if(a<=0 )
//     {
//       return "folse"  
//     }
//     return "true"
 
 
// }  
// console.log(ilhom(-4+9));


//task 10

// function ilhom(n)
// {
//     if(n%4==0 || n%100==0 || n%400==0)
//     {
//         return true
//     }
//     return false
// }
// console.log(ilhom(2016));

//task 2
// function rev(n)
// {
//     let cnt=''
//     for(let i=n;i>0;i=Math.floor(i/10)){
//         cnt+=i%10
//     }
//     return cnt
// }
// console.log(rev(1234));

 //task 3
// function rev(n,b,c)
// {
//     let cnt=0
//     if(a==b && b==c && c==a) 
//     {
//         return 3;
//     }
//     else if(a==b && b!=c && a==c || a!=b  && a==c  &&  b!=c  || a!=b  && b==c  &&  c!=a )
//     {
//         return 2
//     }
    
//     return 0
// }
// console.log(rev(123));


 //task 4
// function sum(a){
//     let cnt = -Infinity
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if((i%10)>cnt){
//             cnt = i%10
//         }
//     }
//     return "its big number "+ a + " is "+cnt
// }
// console.log(sum(0));
// console.log(sum(3797654));




// task 5

// function sum(n)
// {
//     let cnt1=0
//     let cnt=0
//     for(let i=n; i>0; i=Math.floor(i/10)) 
//     {
//        cnt+=i%10;
//        cnt1++
//     }
    
//     return cnt/cnt1
// }console.log(sum(666));

//////task 6

// function all(n)
// {
//     for(let i=n; i>0; i=Math.floor(i/10))
//     {
//         if((i%10)==0 &&  (i%10)==1  &&  (i%10)==2 && (i%10)==3  && (i%10)==4 && (i%10)==5 && (i%10)==6 && (i%10)==7  && (i%10)==8 && (i%10)==9  ){
//             return true
//         }
//     }
//     return false
// }
// console.log(all(2456567876754532142354));
// console.log(all(1234567890));

//task 8

function fib(n)
{ 
    
    let cnt=1
    for(let i=1; i<=n; i++)
    {
        cnt*=i
        
    }
    return cnt
}
console.log(fib(9));







