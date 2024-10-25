
// + task 1
function ilh(str) 
{
    let a=""
    for(let i=0;i<=str.length-1;i++)
        {
            a+=str[i].repeat(2)
        }
        return a
}
console.log(ilh("hello"));


// + task 2
function ilh(n)
{
    
 for(let i=n.length; i>0; i--)
 {
    if(n[i]==7)
    {
        return "boom"
    }
  
 }
   return "ne"
}
console.log(ilh("1,2,3,4,5,97"));

//task +  3

// function ilh(n)
// {
//     let cnt=''
//     let cnt1=''
    
//     if(n.length==0)
//     {
//         return cnt
//     }
//     cnt1=n.at(-1)
//     cnt=!isNaN( cnt1) ? "":  cnt1
    
    
//     return ilh(n.slice(0,-1))+cnt
    
// }
// console.log(ilh("12fgdvrghnhndzbfdb454g43"));
  


// task 4
// function ilh(n)
// { 

//     let ctr=""
//     for(let i=n.length-1; i>=0; i--)
//     {
//         if(n[i]==n[i].toUpperCase())
//             ctr+=n[i].toLowerCase();
 
//        else  if(n[i]==n[i].toLowerCase())
//            ctr +=n[i].toUpperCase();
//     }
//     return ctr
// }
// console.log(ilh("ilhOM heloww"));

//task 6

// function ilh(n,num)
// {
//     let cn=1;
//     return a=()=>
//     {
//         if(cn<=num)
//         {
//             return cn++;
//         }
//         else
//         {
//             return n()
//         }
//     }    
// }
// function n() 
// {
//     return "вызов не происходит"    
// }
// let limited=ilh(n,2)
// console.log(limited());
// console.log(limited());
// console.log(limited());


// task 8

// function ilh(n) 
// {
//     if(n==0)
//         {
//             return 0
//         }
//     return n**3+ilh(n-1)
// }
// console.log(ilh(7));
// console.log(ilh(3));

// task 9
function ilh(n) {
    
    if(n==0)
    {
        return 1
    }
    return n * ilh(n-1)
}

function cnt(n1) {
    if(n1==0){
        return 1
    }

    return ilh(n1) * cnt(n1-1)
}
console.log(cnt(4));
console.log(cnt(5));
console.log(cnt(7));


// function  ilh(n)
// {
//     let a=""
// for(let i=n; i>=0; i++)
// {
//      a+=n[i]
// }
// return a
// }
// console.log(ilh(132));


// function ilh(n)
//  {
//     let a
//   for(let i=0; i<n.length; i++)
//   {
//      if(n[i].split()>a)
//      {
//          a=n[i].length
//      }
//   }
//     return a
//  }
//  console.log(ilh("ilhom hellorgf to home"));
 
