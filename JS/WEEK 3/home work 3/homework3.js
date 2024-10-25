


///task 1

// function time(n) {
//     return n.getMonth()+1==10 && n.getDate()==31 ? "Bonfire toffee" : "toffee"
// }
// console.log(time(new Date("2013/10/31")));


//task 1
// function ilh (n)
// {
//     if(n.getMonth(n)+1==10 && n.getDate(n)==31)
//     {
//         return "Bonfire toffee"
//     }
//     return "toffee"
// }
// console.log(ilh(new Date("2013,10,31")));

//task 2

// function ilh(n)
// {
//   return  Math.ceil(new Date (n)/100)
// }
// console.log(ilh( (2020)));

// task 3
// function ilh(n)
// {
//     let b=["january", "february", "march", "april","may","june","july","aygust","september","october","november","december"]
//     return b[n-1]
   
    
// }
//  console.log(ilh(3));

// task 4
// function ilh (a,b)
// {
//     return a+(Math.floor(b/12))
// }
// console.log(ilh(2020,22));

//task 5
// function ilh(n)
// {
    
//     return n.split("/").toReversed().join("")

// }
// console.log(ilh("11/12/2019"));



//================================================================================ file 1

//file 1

//task 1
// function ilh(year) {
//     let a = 0;

//     for (let i = 0; i< 12; i++) {  
//         let date = new Date(year, i, 13);  
//         if (date.getDay() === 5) {  
//             a++;
//         }
//     }

//     return a;
// }
// console.log(ilh(2026));

// task 3
// function formatDate(date)
// {
//  let year=date.getFullYear()
//  let month=date.getMonth()
//  let day=date.getDate()
//  let hour=date.getHours()
//  let minute=date.getMinutes()
//  let sec=date.getSeconds()
// return`${year}${month>9 ? (month+1) : "0"+(month+1)}${day>9 ? (day) : "0"+(day)}${hour>9 ? (hour)%24 : "0"+(hour)%24}${minute>9 ? (minute)%60 : "0"+(minute)%60}${sec>9 ? (sec)%60 : "0"+(sec)%60}`;
// }
// console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0)));

//task 3
// function formatDate(date){
    // let two=(num)=>(num>9 ? num : "0"+num )
    //  let year=date.getFullYear()
    //  let month=two((date.getMonth())+1)
    //  let day=two(date.getDate())
    //  let hour=two(date.getHours())
    //  let minute=two(date.getMinutes())
    //  let sec=two(date.getSeconds())
    //  return `${year}${month}${day}${hour}${minute}${sec}`
    // }
    // console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0)));
    // console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59)));
    // console.log(formatDate(new Date(2020, 6, 4)));

    //task 4
    
//     function firstTuesday(year,mon)
// {
//     let cnt=0
// for(let i=0; i<=31; i++)
// {
//     if(new Date(year,mon-1,i).getDay()==2)
//     {
//         let yer=new Date(year,mon,i).getFullYear()
//         let mont=new Date(year,mon,i).getMonth()
//         let day=new Date(year,mon,i).getDate()
//         return `${yer}-${two(mont)}-${two(day)}`
//     }    
// }
// }
// console.log(firstTuesday(2024,8));

//task  6
// function ilh(n1,n2)
// {
//   return Math.abs(n1.getTime()-n2.getTime())/86400000
// }
// console.log(ilh(new Date("2023-12-31"),new Date("2023-10-26")));

//task 7

// function ilh(n)
// {
//     let i=n.getHours()
//     let j=n.getMinutes()
//     let l=n.getSeconds()
//     return `${i}:${j}:${l}`
// }
// console.log(ilh(new Date()));

//task 8
// function ilh(n)
// {
//     let yer=n.getFullYear()
//     let mon=n.getMonth()
//     return new Date(yer,mon+1,0).getDate()
// }
// console.log(ilh(new Date("2023-09-20")));

//task  9

// function ilh(n)
// {
//   return n%4==0
// }
// console.log(ilh(2023));

//task 10

// function ilh(d,m,y)
// {
//    let date=new Date(y,m-1,d)
//    return date.getFullYear()==y && date.getMonth()==m-1 && BaseAudioContext.getDate()==d
// }





//===========================================================file 2

//task 1
// function ilh(n)
// {
    
        
//     let a= ["yaksh","dush","sesh","chor","pansh","juma","sanbe"]
//     return a[n.getDay(n)]
    
// }
// console.log(ilh(new Date("2024-08-06")))
//task 2

// function ilh(n,a)
// {
//     return n=Math.abs(n.getDate()-a.getDate())
// }
// console.log(ilh(new Date("2024-08-01"), new Date("2024-08-10")));

//task 3
// function ilh(n)
// {
//     let a=n.getTime()
//     return a
// }
// console.log(ilh(new Date("2024-08-05")));
// console.log(ilh(new Date("2020-12-31")));

//task 4
// function ilh(n)
// {
//     let a=[]
//     for(let key of n.keys())
//     {
//         a.push(key)

//     }
//     return a
// }
// console.log(ilh(new Map([["a", 1], ["b", 2], ["c", 3]])));

//task 5
// function ilh(n)
// {
//     let a=[]
//     for(let key of n.values())
//     {
//         a.push(key)
//     }
//     return a
// }
// console.log(ilh(new Map([["a", 1], ["b", 2], ["c", 3]])));
// console.log(ilh(new Map([["key1", "value1"], ["key2", "value2"], ["key3", "value3"]])));

//=================================================================// file 3

//task 1

// function  ilh(n,a)
// {
//     a.forEach((el)=>n.add(el));
//     return n
// }
// console.log(ilh(new Set([1, 2, 3]), [4, 5, 6]));

// task 2
// function ilh(n1,n2)
// {
//   let cnt=new Set ()
//   n1.forEach((el)=>{if(n2.has(el)){cnt.add(el)}});
//   return cnt
// }
// console.log(ilh(new Set([1, 2, 3]), new Set([2, 3, 4])));

//task 3

// function ilh(n,a)
// {
    
//     n.delete(a)
//     return n
// }
// console.log(ilh(new Set([1, 2, 3]), 2));

//task 4

// function ilh(n)
// {
//   let i=n.getTime()/86400000
//   let j=new Date(n.getFullYear()+1,0,1).getTime()/86400000
//   return Math.ceil(j-i)
// }
// console.log(ilh(new Date("2024-01-01")));


//task 5

// function ilh(n)
// {
// if( n.getFullYear()%4==0)
// {
//   return true
// }
// return false
 
// }
// console.log(ilh(new Date(2024,10,10)));;
















///prtktik

//task 1
// function ilh(n)
// {
//     if(n.getMonth(n)+1==10 && n.getDate(n)==31)
//     {
//         return "hello"
//     }
//     return "world"
// }
// console.log(ilh(new Date("2013/10/30")));

//task 2
// function ilh(n)
// {
//     return Math.ceil(new Date (n)/100)
// }
// console.log(ilh(2001));

//task 3
// function ilh(n)
// {
//    let b=["january", "february", "march", "april","may","june","july","aygust","september","october","november","december"]
//    return b[n-1] 
// }
// console.log(ilh(3));

//task 4

// function ilh(n,a)
// {
//  return n+(Math.floor(a/12))
// }
// console.log(ilh(2020,25));

//task 5
// function ilh(n)
// {

//     return n.split("/").toReversed().join("")
// }

// console.log(ilh("11/12/2019"));

//===================================================================================================// file 1

//task1
// function ilh(n)
// {
// let a=0
// for(let i=0; i<12; i++)
// {
//     let date=new Date (n,i,13);
//     if(date.getDay()==5)
//     {
//         a++
//     }
// }
// return a
// }
// console.log(ilh(2024));

//task 2



//================================================================================================ file 2

// function ilh(n,b)
// {
//     let a=["dush","seha","chor","panj","juma","shan","yak"]
//    return  a[n.getDay(n)]
    
  
// }
// console.log(ilh(new Date("2024-08-08")));

//task 2
// function ilh(n,a)
// {
//    return n= Math.abs(n.getDate()-a.getDate())
// }
// console.log(ilh(new Date("2024-08-05"), new Date("2024-08-10")));

//task 3

// function ilh(n)
// {
//     return n.getTime(n)
// }
// console.log(ilh(new Date("2024-08-05")));

//task 4

// function ilh(n)
// {
//     let a=[]
//     for(let key of n.keys())
//     {
//         a.push(key)
//     }
//     return a
// }
// console.log(ilh(new Map([["a", 1], ["b", 2], ["c", 3]])));

//task 5
// function ilh(n)
// {
//     let a=[]
//     for(let val of n.values())
//     {
//         a.push(val)
//     }
//     return a
// }
// console.log(ilh(new Map([["a", 1], ["b", 2], ["c", 3]])));


//========================================================================================================file 3

//task 1
// function ilh(n,a)
// {
//     a.forEach((ele) => n.add(ele));
//          return n

// }
// console.log(ilh(new Set([1, 2, 3]), [4, 5, 6]));

//task 2
// function ilh(n1,n2)
// {
//   let cnt=new Set ()
//   n1.forEach((el)=>{if(n2.has(el)){cnt.add(el)}});
//   return cnt
// }
// console.log(ilh(new Set([1, 2, 3]), new Set([2, 3, 4])));


pl

