//task 1
// function rep(str, num) {
//     return str.slice(0, -1).concat(str.at(-1).repeat(num - 1), str.at(-1));
//   }
//   console.log(rep("Helo", 3));




//task 2
//   function ilh(n)
//   {
//     let s=" "
//     let a= n.at(0,)
//     let b=n.at(-1)
//     return s=a+b;

// }
// console.log(ilh("hello"));

//task 3
// function toInt(n)
// {
//     if(n === Number(n)){
//         n = String(n);
//     }
//     else {
//         n = +n
//     }
//     return n;

// }
// console.log(toInt(5));

//task 4
// function asd(n)
// {
//     return n.at(-1) == 's';
// }
// console.log(asd("fdhgsdbgfs"));

//task 5

// function ilh(n)
// {
//     let b=""
//  for(let i=n.length-1; i>=0;  i--)
//  {
//    b+=n[i].toUpperCase()


//  }
//  return b;
// }
// console.log(ilh("abs"));

//task 6

// function sum(n,b)
// {
//     return n.includes(b)
// }
// console.log(sum("asd", "sdf"));

//task  7
//  function pol(n)
//  {
//     let b=""
//     for(let i = n.length-1; i>=0; i--  )
//     {
//         b+=n[i]
//     }

//     return n==b

//  }
//  console.log(pol("aba"));

//task 8
// function char(n,b)
// {
//     let cnt=0
//     for(let i = 0; i<=b.length; i++ )
//     {
//         if(b[i]==n)
//             cnt++;
//     }
//     return cnt;
// }
//  console.log(char("a","hrffvadsfdda"));

//task 9
// function toUp(n)
// { 

//     let ctr=""
//     for(let i=0; i<n.length; i++)
//     {
//         if(n[i]==n[i].toUpperCase())
//             ctr+=n[i];
//     }
//     for(let i=0; i<n.length; i++)
//     {
//         if(n[i]==n[i].toLowerCase())
//            ctr +=n[i];
//     }
//     return ctr
// }
// console.log(toUp("hApAksdCVsd"));

//task 10
// function ilh(n) {
//     let snt = ""
//     n = n.toString()
//     for (let i = n.length-1; i >= 0; i--) {
//         snt += n[i];
//     }
//     return snt + n;
// }
// console.log(ilh(123));

//task 11
// function ilh(n) {
//     let size = n.length;
//     let save;

//     if(size % 2 != 0) {
//         save = n[Math.floor(size/2)];
//     } else {
//         save = n[size/2 - 1];
//         save += n[size/2];
//     }

//     return save;

// }
// console.log(ilh("asd"));

// function sdt(n)
// {
//     n=n.split("-")
//     return  n.length;
// }
// console.log(sdt("fgsfdgf-ffvev"));

// function lih(a,b)
// {
//     for(let i=0; i<a.length; i++)
//     {
//         if(a[i]==b) 
//         {
//             return true
//         }
//         return false
//     }
// }
// console.log(lih("asd", "a"));
// function ilh(n)
// {
//     for(let i=0; i<n.length; i++)
//     if(n[i]==" "){
//         return true 
//     }
//     return false

// }
// console.log(ilh("vowdbdggyu"));







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

//task 4





























