// setTimeout(() => {
//     console.log("Ya");
    
// }, 5000);


let promise = new promise ((resolve , reject) =>{
    if(55<99){
        return resolve("big")
    }

    return reject("Small")
})

console.log(
    promise.then((result) => {
        console.log("FFFF");
        
        
    }).catch((err) => {
        console.log("GGGG");
        
        
    })
);
