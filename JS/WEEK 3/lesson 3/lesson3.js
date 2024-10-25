//task 1

// function ilh(obj,n)
// {
//      return Object.keys(obj).includes(n)
// }
// console.log(ilh({a: 1, b: 2},"g"));

//tASK 2
// function ilh(n)
// {
//    let  Object ={}
//    for(let key in n)
//    {
//     Object[n[key]]=key
//    }
//    return Object
// }
// console.log(ilh({a: 1, b: 2}));

// task 3
// function ilh(obj,arr)
// {
//     let cnt={}
//     arr.filter((el)=> {
//         cnt[el]=obj[el]
//     })
//     return cnt
// }
// console.log(ilh({a: 1, b: 2, c: 3}, ["a", "c","b"]))

//task 4

// function ilh(obj)
// {
//    let a={}
//    for(let key in obj)
//    {
//        a[key]=obj[key]*2
//    }
   
//     return  a  
// }
//  console.log(ilh({a: 1, b: 2,as:5}))

//task 5
        //  function ilh(obj) {
     
        //     let un = {};
        //     for (let  key in obj) {
            
        //       if (obj[key]) {
              
        //         un[key] = obj[key];
        //       }
        //     }
        //     return un;
        //       }
        // console.log(ilh({a: 1, b: 0, c: false, d: "hello"}))
    
        // task 6

        
          

// task 7

// function ilh(obj)
// {
//     let a={}
//     for(let key in obj)
//     {
//         if(typeof obj[key]==="string" )
//         {
//             a[key]=obj[key]
//         }
//     }
//     return a
// }
// console.log(ilh({a: 1, b: "hello", c: true, d: "world",sac:"sads1122"}));


//TASK 8
// function ilh(obj,n)
// {
//     let a={}
//     for(let key in obj)
//     {
//         if( obj[key]>n )
//         {
//             a[key]=obj[key]
//         }
//     }
//     return a
// }
// console.log(ilh({a: 1, b: 2, c: 3, d: 4}, 2))
// console.log(ilh({x: 10, y: 15, z: 20}, 12));

//task 9
// function ilh(obj)
// {
//     let str= " "
//     for(let key in obj)
//     {
//         if(obj[key].length>str.length)
//         {
//             str=obj[key]
//         }
//     }
//     return str

// }
// console.log(ilh({a: "short", b: "longer", c: "longestvxxvcvb"}));


//task 10
// function ilh(obj,n)
// {
//     let a={}
//     for(let key in obj)
//     {
//         if( obj[key]==n )
//         {
//             a[key]=obj[key]
//         }
//     }
//     return a
// }
// console.log(ilh({a: 1, b: 2, c: 3, d: 2}, 2))
// console.log(ilh({x: 10, y: 15, z: "hello"}, "hello"));

//task 11
// function ilh(obj,n)
// {
//     let a={}
//     for(let key in obj)
//     {
//       if(key ==n)
//       {
//         delete obj[key]
//       }
//     }
//     return obj
// }
// console.log(ilh({a: 1, b: 2, c: 3}, "c"));


//task 12

// function ilh (obj)
// {
//     let cnt=0
//     for(let key in obj)
//     {
//         if(typeof obj[key]==="number")
//         {
//           cnt+=obj[key]
//         }
//     }
//     return cnt
// }
// console.log(ilh({a: 1, b: 2, c: 3}))
// console.log(ilh({a: 1, b: 2, c: 5,cb:"dfsga"}))

//task 13
// function ilh(obj)
// {
//     let a={}
//     for(let key in obj)
//     {
//         a[key]=String(obj[key])
//     }
//     return a
// }
// console.log(ilh({a: 1, b: 2, c: 3}))



//task 14
// function ilh(obj)
// {
//     let a={}
//     for(let key in obj )
//     {
//        a[key]=obj[key].toReversed()
//     }
//     return a
// }
// console.log(ilh({a: 1, b: 2, c: 3}));

//task 15














//--------------------------------------------------file 2

//task1
// function ilh(obj)
// {
//     let a={}
//     for(let key in obj)
//     {
//         if(obj[key]%2==0)
//         {
//             a[key]=obj[key]

//         }
//     }
//     return a
// }
// console.log(ilh({a: 1, b: 2, c: 3, d: 4,s:6}))

//task 2
// function ilh (obj)
// {
//     for(let key in obj)
//     {
//         if(typeof obj[key]!="object")
//         {
//             delete obj [key]
//         }
//     }
//     return obj
// }
// console.log(ilh({a: 1, b: {inner: "object"}, c: 3, d: {another: "object"}}))

 

//task 3
// function ilh(obj)
// {
//     let a={}


//        for(let val in obj)
//        {
//         if( typeof obj[val]=="boolean" )
//         {
//           a[val]=obj[val]
//         }
//        }
    
//     return a
// }
// console.log(ilh({a: true, b: false, c: 3, d: "hello"}))
// console.log(ilh({isActive: true, age: 25, isMember: false}))

//task 4
// function ilh(obj,n,a)
// {
//     for(let key  in obj)
//     {
//         obj[n]=a
//     }
//     return obj
// }
// console.log(ilh({a: 1, b: 2},"c",3));

//task 5
// function ilh(obj)
// {
//     let a={}
//     for(let key in obj)
//     {
//       a[key.toLowerCase()]=obj[key]
//     }
//     return a
// }
// console.log(ilh({A: 1, B: 2, C: 3}));
// console.log(ilh({Name: "Alice", Age: 25, City: "New York"}))

//task 6
// function ilh(obj,n)
// {
//     let a={}
//     for(let key in obj)
//     {
//       a[key]=obj[key]*n
//     }
//     return a
// }
// console.log(ilh({a: 1, b: 2, c: 3}, 2));
// console.log(ilh({x: 10, y: 20, z: 30}, 3));

//task 7

// function ilh (obj,n)
// {
//     let a={} 
//     for(let key in obj)
//     {
//      a[key]=Math.floor(obj[key]/n)
//     }
//     return a
// }
// console.log(ilh({a: 4, b: 8, c: 12}, 2))
// console.log(ilh({key1: 20, key2: 32, key3: 4}, 3));

//task 8
// function ilh(obj,str)
// {
//     let a={}
//     for(let key in obj)
//     {
//       a[key]=obj[key]+=str
//     }
//     return a
// }
// console.log(ilh({a: "hello", b: "world", c: "foo"}, "v!"));

//task 9
// function ilh(obj)
// {
//     for(let key in obj)
//     {
//         if(obj[key]<0)
//         {
//             obj[key]*=-1
//         }
//     }
//     return obj
// }
// console.log(ilh({a: -1, b: 2, c: -3}))

//task 10
// function reverseString(obj)
// {
//     for(let key in obj)
//     {
//         obj[key]=obj[key].split("").toReversed().join("")
//     }
//     return obj
// }
// console.log(reverseString({a: "hello", b: "world", c: "foo"}));


//========================================================file 3

//task 1


 console.log(new Date);
  


 











  
  
  














    
