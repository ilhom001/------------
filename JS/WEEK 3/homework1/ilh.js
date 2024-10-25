function get(...arr) {
    return [].concat(...arr);
  }
  
  console.log(get([1, 2], [3, 4]));
  console.log(get([1, 2], [3, 4], [4, 5, 6, 7]));
  console.log(get([1, 2], [3, 4], [4, 5, 6, 7],["dsvds",2,3,4,5,6]));
  console.log(get([1, 2], [3, 4], [4, 5, 6, 7]));

//task 2

// function cnt(arr, n) {
//     let save = '', i = -1;
//     arr.forEach(element => {
//         i ++;
//         if(element == n) {
//             save += i;
//         }
//     });
//     return save == '' ? -1 : save[0];
// }

// console.log(cnt([1, 2, 3], 2));


//task 2

// function res(arr,n)
// {  
//     return arr.indexOf(n)
// }
// console.log(res([1,2,3],4));

//task 3

// function ilh(n)
// {
//     n=n.filter((el,ind,array)=>{
//         return el!=array[ ind+1]
//     })
//     return n
// }
// console.log(ilh([1,2,2,3,4,4]));
//task 4

// function ilh(n)
// {
//     n=n.filter((el,ind,arr)=>{
//       return el>=0
//     })
//     return  n
// }
// console.log(ilh([-1,2,3,0,-5]));

// task 5

// function ilh(n)
// {
//     let cnt= n.reduce((acc,el) => {
//       return acc+el 
        
//     });
//     return cnt/n.length;
// }
// console.log(ilh([1,2,3,4,5,]));

//task 6
// function ilh(n)
// {
//    return n.toReversed().join("")==n.join("")
// }
// console.log(ilh([1,2,3,1,2]));
// console.log(ilh([1,2,3,2,1]));

//task 7

// function ilh(nam1 ,nam2,arr)
// {
//     return   arr.filter((el, ind, array) =>{
//    return el>nam1 && el<nam2
//      })
// }
// console.log(ilh(2,6,[1,2,3,4,5,5,6,7]));

//task 8
// function ilh(n)
// {
//     return n.reduce((acc,el)=>{
//           return acc+el
//     })
  
// }
// console.log(ilh([0, 4, 8, 12]));

//task 9
// function ilh(n)
// {
//  n=n.map((el,ind)=> typeof el
   
//  )
// }
// console.log(ilh([0, 4, 8, 12]));

//task 10
// function ilh(n)
// {
//     return  n=n.map((acc,tnd,array)=> acc.length)

    
// }
// console.log(ilh(["ilhom","hello"]));

//task 11
// function ilh(n)
// {
//     let [a,b]=n
//     return Math.sqrt(a)==Math.cbrt(b)
// }
// console.log(ilh([4,8]));

//task 12
// function ilh(n)
// {
//     return n.map((el)=> el*-1)
// }
// console.log(ilh([1,2,3,4,5]));
// console.log(ilh([-1,-2,-3,-4,-5]));

//task 13
// function ilh(n)
// {
//     return n.map((el)=> el*2)
// }
// console.log(ilh([1,2,3,4,5]));
// console.log(ilh([-1,-2,-3,-4,-5]));

//task 14
// function ilh(n)
// {
//    n= n.reduce((acc,el)=>{
//         if(le>5)
//         {
             
//         }
//     })
// }
function ()















