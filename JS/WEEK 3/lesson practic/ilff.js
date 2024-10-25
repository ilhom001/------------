//task 1

// function ilh(n)
// {
//     let s=[]
//     for(let key in n)
//     {
//         s.push(n[key])
//     }
//     return s

// }
// console.log(ilh({a:2,b:"fdghr"}));

//task 2
 
// function ilh(obj1,obj2)
// {
//     return JSON.stringify(obj1)==JSON.stringify(obj2)
// }
// console.log(ilh({a:1,b:2},{a:1,b:2}));

//task 3
// function ilh(n)
// {
//     let cnt=0
//     let sum=0
//     for(let i=0; i<n.length; i++)
//     {
//         if(isNaN(n[i]) && n[i]!=",")cnt++;
//         if(!isNaN(n[i]) && n[i]!=" ")sum++ 
//     }
//     return {letters: cnt, numbers: sum }
// }
// console.log(ilh("hello world124"));

// task 4

// function ilh(n)
// {
//     let cnt={}
//     for(let key in n)
//     { 
//       cnt[n[key]]=key
//     }
//     return cnt
// }
// console.log(ilh({a:1, b:2}));

// task 5
//  function names (obj)
//  {
//       return obj.reduce((acc,cur)=> cur.age > acc.age ? cur: acc)
//  }
//  console.log(names([{name:"jonson", age: 29},{ name: "piter",age:40}]))

//task 6

//  function ilh(obj)
//  {
//    return   JSON.stringify(obj).includes("undefined")

     
//  }
//    console.log(ilh({name: "undefined", age: 11}));

//task 8

// function ilh(obj)
// {
//     let value=Object.values(obj)
//     if(typeof (value [0])=="object" || typeof (value[1])=="object") return true
//     else {return false}
// }
// console.log(ilh({name: "John"  , age: [1, 2, 3]}));
// console.log(ilh({name: "John"  , age: 1}));

//task 9

// function bsanj(obj) 
// {
//     let valueofage=Object.values(obj)
//     let resvalueOfAge=valueofage[1]
//     let objforage={...obj}
//     objforage.age=2024-(resvalueOfAge+1)
//     let objforstart={...objforage}
//     objforstart.start=resvalueOfAge+7
//     let objforend={...objforstart}
//     objforend.end=resvalueOfAge+7+11
//     return objforend
// }
// console.log(bsanj({name: "John", year: 1997}));
// console.log(bsanj({name: "Johnson", year: 2000}));
// console.log(bsanj({name: "Stiv", year: 2006}));


//task 9
// function ilh(obj)
// {
//     obj.age=2024-obj.yers
//     obj.start=obj.yers+7
//     obj.end=obj.start+11
//     return obj
// }
// console.log(ilh({name: "John", yers: 1997}));


// task 10

// function ilh(n)
// {
//     let cnt=0
//     for(let val in n)
//     {
//         if(typeof n[val]=="number" )
//         {
//             cnt+=n[val] 
//         }
    
//     }
//     return cnt
// }
// console.log(ilh({a: "dsads" , b: 123, c: 345}));

//task 11
// function ilh(obj)
// {
//     let cnt=0
//     for(let key in obj)
//      {
//         cnt++
//      }
//      return cnt
// }
// console.log(ilh({a: "dsadsa"    , b: 123, c: 345 ,fv:456})  );

//task 13
// function ilh(obj)
// {
//     let cnt=""
//     for(let key in obj)
//  if(typeof obj[key]=="string")
//       {
//     cnt+=obj[key]
//      }
//      return cnt
 
// }
// console.log(ilh({a: "dsadsa", b: 123, c: "abc"}))

                                                                             //  -------//task 14
// function ilh(n)
// {
//     for(let key in n)
//     {
//         if(!isNaN(n[key]))
//     }
// }
                                         
                                                                            //-------------//task 15


  //FILE 2

  //TASK 1

//   function ilh(obj)
//   {
//     let cnt=0
//     for(let key in obj)
//     {
//         if(typeof obj[key]=="string" ){cnt++}
//     }
//     return cnt
//   }
//   console.log(ilh({a:"dkkfdf", c:1234}));

//task 3
// function ilh(n,obj)
// {
//     return n>=obj["min"] &&  n<=obj["max"] ? true : false
// }
// console.log(ilh(4,{min:1,max:6}));
// console.log(ilh(4,{min:5,max:6}));

// task 4














//-------------------------------------------------------------- file 3


//task 3
// function ilh(n)
// {
//   return [Object.keys(n),Object.values(n)]

// }
// console.log(ilh(({ a: 1, b: 2, c: 3 })));




//task 6
// function ilh(n)
// {
//   let obj={}

//   n.forEach((el)=> {obj[el]=el.toUpperCase()})
// return obj
      
// }
// console.log(ilh(["a","b"]));



  
                                                                   
                                                                   
 
                                                                   

    
    

  


 
 


  


   

 


