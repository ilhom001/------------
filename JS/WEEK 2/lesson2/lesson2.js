 //task 1

// function sum(n)
// {
// let a=1
// for(let i=0; i<n.length; i++)
// {
//     if(n[i]!=","){
//         a*=n[i]
//     }
//     return a
// }
//    console.log(sum("2,3"))
//}
 //console.log(sum("2,4"));


 //task 2
//  function ilh(str)
//  {
//     console.log(str.split("-").length);
    
//  }
//  console.log(ilh("but-fet"))

//task 3
// function asd(a,b)
// {
//   return a.includes(b)  
// }
  
// console.log ( asd("hello" ,"he"))

//task 4
// function sum(n)
// {

// for(let i=0; i<n.length; i++)
// {
//     if(n[i]==" "){

//         return true
//     }
   
// }
//     return false
// }
//  console.log(sum("fvdfbfb fghgfdb"));

//task 5
// function ilh(n)
// {
//     let b="hello "
//   return b.concat(n)
    
// }
// console.log(ilh("ilhom"));

//task 6
//  function ilh(n)
//  {
//    let miyona =Math.floor(str.length /2)
//     if (n.length%2!=0)
//     {
//         return str[miyona];
//     }
//     cnt+=x
    
//     console.log(x);
    
    
//  }
// console.log(ilh("bfdbfgbs"));

//task 

//task 1

// let sum = (str) => {
//    let a= str.split(',');
//    let cnt = 1;
//    for(let i = 0; i < a.length; ++ i) {
//         cnt *= a[i];
//    }
//    return cnt;

    
// }
// console.log(sum("2,3,3,0"));


// let doubleLetter = (str) => {
//     for(let i = 0; i < str.length; ++ i) {
//         for(let j = i + 1; j < str.length; ++ j){
//             if(str[i] == str[j]){
//                 return true;
//             }
//         }
//     }
//     return false
// }

// console.log(doubleLetter("yumy"));


//task 8

// function sum(str)
// {
//     let a=str.split(" ")
//     for(let i=0; i<a.length;i++)
//     {
//     if(a[i]=="Nemo"){
//         return "I found Nemo at " + (i+1) + ' !';
//     }
//     }
// }
// console.log(sum('I am finding hbjk Nemo ! fghjk'));

//task 9

// let cnt = (str) => {
    
//     let newStr = ""

//     str = str.split(' ');

//     for(let i = 0; i < str.length; ++ i) {
//         if(str[i].length < 5) newStr += str[i];
//         else {
//             for(let j = str[i].length - 1; j >= 0; -- j) newStr += str[i][j]
//         }
//         newStr  += ' ';
//     }
//     return newStr;
    
// }
// console.log(cnt("The dog t is big"));


// function cnt(str) {

//     const


// }
 
//task 10

// let cnt = (str) => {
    
//     str = str.replaceAll('a', '-a-');
//     str = str.replaceAll('e', '-e-');
//     str = str.replaceAll('i', '-i-');
//     str = str.replaceAll('o', '-o-');
//     str = str.replaceAll('u', '-u-');
//     str = str.replaceAll('A', '-A-');
//     str = str.replaceAll('E', '-E-');
//     str = str.replaceAll('I', '-I-');
//     str = str.replaceAll('O', '-O-');
//     str = str.replaceAll('U', '-U-');
//     return str;
    
// }
// console.log(cnt('Carpe Diem”Fight for your right to party!'));

//task 11
// function ilh(n)
// {
//     let str = '';
//     for(let i = 1; i <= n; ++ i) str += i;
//     for(let i = 0; i < n - 1; ++ i) str[i].replace(str[i] + '-');
//     return str;
// }
// console.log(ilh(8));
