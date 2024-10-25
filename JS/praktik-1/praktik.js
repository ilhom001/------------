//task 1
// function ilh(f,g)
// {
//  return f()>g() ? "f":g()>f() ? "g":"neither"
  
// }
// console.log(ilh(()=>10,()=>10));

//task 2
function ilh(n)
{
   let cnt=new Set()
 
  let  a=n.toLowerCase().split("").toSorted()
     for(let i=0; i<a.length;i++)
     {
        if(a[i]==a[i+1])
        {
            cnt.add(a[i])
        }
     }
  return cnt.size
}
console.log(ilh("aabbced"));
console.log(ilh("aabBnbced"));






  

 


 

 

 