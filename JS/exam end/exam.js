//task 1

// function ilh(...arr)
//  {
//        arr=arr.map((el)=>el.reduce((a,b)=>b%2!=0?a*b:a*1,1))
//        return arr.reduce((a,b)=>a+b)

// }
//   console.log(ilh([1, 2, 3, 4, 5],[,1, 2, 3, 4, 5]))

//   console.log(ilh([1,3],[2, 2, 3, 4, 7],[9 ,7]))

//task 2
// function ilh(n)
// {
//     let a=""
//     let cnt=""
//     for(let key in n)
//     {
//         if(n[key]>cnt){cnt=n[key],a=key}
//     }
// return a
// }
// console.log(ilh({ piano: 2000,}));

//task 3
// function ilh(n,str) 
// {
//     let a=str.split(".")
//     return a.reduce((acc,el)=>
//         {
//             if(acc && typeof acc=="object" && el in acc){return acc[el]}
//             return undefined
//         },n)
// }
// console.log(ilh({ user: { details: { address: { city: "New York" } } } },"user.details.address.city"));


  //task 4

//   function ilh(n)
//   {
//       return n.map((el)=>{
//       return  Object.values(el) }).flat(1)
    
//   }
//   console.log(ilh([{id:1,date:{name:"ilhom",age:25}},{id:2,date:{name:"alise", age:30}}]));

//task 6
// function ilh(n)
// {
//     return n.split("").toReversed().join("").replaceAll("/","")==n.replaceAll("/","")
// }
// console.log(ilh("02/02/2020"));


// task 7

// function ilh(n) {
//     return n.toLocaleDateString().split(".").toReversed().join("") + n.toLocaleTimeString().split(".").toReversed().join("").replaceAll(":" , "" )
// }

// console.log(ilh(new Date(2020 , 6 , 4 , 8 , 0 , 0)));

//task 9

// function ilh(n) {
//     let a= {};
//     n.forEach(el => {
//         a[el] = el.toUpperCase();
//     });
//     return a;
// }

// console.log(ilh(["p", "s"]));  
// console.log(ilh(["a", "b", "c"])); 

// //task 10

function ilh(d , m , y) {
    let a = new Date(y , m , d)
    let year = a.getFullYear()
    let month = a.getMonth()
    let day = a.getDate()
   
    if(year == y && month == m && day == d  ){
        return true
    }
    
        return false
        
    
}
 console.log(ilh(31 , 2 , 2020));
 console.log(ilh(8 , 3 , 2020));














