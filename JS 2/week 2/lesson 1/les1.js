// let  p= document.querySelector("p")

// setInterval(()=>{
//     let data=new Date()
//     p.innerHTML=data.toLocaleString()+ " "+ data.getMilliseconds()
// },0)

let ilh= new Promise ((resolve, reject)=>{
    if(10>Math.floor(Math.random()*20)) {
        return resolve("Succses")
    }
    return reject("error")
})
console.log(ilh)
