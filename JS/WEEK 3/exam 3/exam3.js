//task 6

// function ilh(obj) 
// {
//     let value1=Object.values(obj[0])
//     let valuu1=value1[1]
//     let value2=Object.values(obj[1])
//     let valuu2=value2[1]
//     let value3=Object.values(obj[2])
//     let valuu3=value3[1]
//     let max=Math.max(valuu1,valuu2,valuu3)
//     let min=Math.min(valuu1,valuu2,valuu3)
//     let average=(max+min)/2
//     let newobj={}
//     newobj.highest=max
//     newobj.lowest=min
//     newobj.average=average
//     return newobj
// }
// console.log(ilh([{ name: 'Alex', score: 80 }, { name: 'Emily', score: 95 }, { name: 'Charlie', score: 88 }]));


//task 3
// function ilh(n)
// {
//     let cnt=0
//     for(let key in n)
//     {
//         if ( typeof n[key]=="number" && n[key]%2==0)
//         {
//            cnt+=n[key]
//         }
//     }
//     return cnt
// }
// console.log(ilh({ a: 2, b: 5, c: 8, d: 3 }));
//   console.log(ilh({ a: 1, b: 5, c: 7, d: 3 }));

//task 4
// function ilh(n) {
//     let cnt = " "
//     for (let key in n) {
//         if (n[key].length > cnt.length) {
//             cnt = n[key]
//         }
//     }
//     return cnt;
// }
// console.log(ilh({ name: 'John', city: 'New York', profession: 'developer' }))
// console.log(ilh({ name: 'Mr.Smith', city: 'Korea', profession: 'none' }))

//task 5

// function ilh(n)
// {
//     let cnt={}
//     for(let key in n)
//     { 
//       cnt[n[key]]=key
//     }
//     return cnt
// }
// console.log(ilh({ a: "apple", b: "banana", c: "cherry" }));
// console.log(ilh({ z: '1', x: '2', m: '3' }));




//task 9
// function ilh(arr) 
// {
//     return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
// }
// console.log(ilh(["mavis","senaida","letty"]))
// console.log(ilh(["samuel","MABELLE","KrYstal","CAListA"]))
        
//task 1

// function ilh(...arr)
//  {
//        arr=arr.map((el)=>el.reduce((a,b)=>b%2!=0?a*b:a*1,1))
//        return arr.reduce((a,b)=>a+b)

// }
//   console.log(ilh([1, 2, 3, 4, 5],[,1, 2, 3, 4, 5]))

//   console.log(ilh([1, 2], [3, 4], [,5,1,7]));

//task 2

// function ilh(n)
// {
//     n=n.toSorted()
//     for(let i=0; i<n.length; i++)
//     {
//         if(n[i]==n[i])
//         {
//             return true
//         }

//     }
//     return false

// }
// console.log(ilh([8,2,1,6,7]));

// TASK 7

// function ilh(obj) 
// {
//     let value=Object.values(obj[0])//Alex.....
//     let valuescore=Object.values(value[1])//[80,75,90]
//     let math1=valuescore[0]//80
//     let english1=valuescore[1]//75
//     let history=valuescore[2]//90

//     let value2=Object.values(obj[1])//Emily.....
//     let valuescore2=Object.values(value2[1])//[95,88,92]
//     let math2=valuescore2[0]//95
//     let english2=valuescore2[1]//88
//     let history2=valuescore2[2]//92

//     let value3=Object.values(obj[2])//Charlit.....
//     let valuescore3=Object.values(value3[1])//[80,75,90]
//     let math3=valuescore3[0]//88
//     let english3=valuescore3[1]//92
//     let history3=valuescore3[2]//85

//     let AVERAGEMATH=(math1+math2+math3)/3
//     let AVERAGEENGL=(english1+english2+english3)/3
//     let AVERAGEHistory=(history+history2+history3)/3

//     let newobj={}
//     newobj.math=AVERAGEMATH
//     newobj.engish=AVERAGEENGL
//     newobj.history=AVERAGEHistory
    
//     return newobj
// }
// console.log(ilh([{ name: 'Alex', scores: { math: 80, english: 75, history: 90 } }, 
//  {name:'Emily', scores: { math: 95, english: 88,history: 92 } }, 
//  {name: 'Charlie', scores: {math: 88, english: 92, history: 85 }}]));


//task 8
// function ilh(n1,n2)
// {
//    let b=Object.assign(n1,n2)
// return b
// }
// console.log(ilh({ a: 1, b: 2, c: 3 },{ b: 4, d: 5, e: 6 }));





//task 10

// function ilh(n) {
//     let cnt = [];
//     for (let i = 0; i < n; i++) {
//         let sum = [];
//         for (let j = 0; j < n; j++) {
//             sum.push(n);
//         }
//         cnt.push(sum);
//     }
//     return cnt;
// }
// console.log(ilh(3));
// console.log(ilh(5));








