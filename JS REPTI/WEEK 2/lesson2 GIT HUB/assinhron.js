import { get } from "./sinhron.js"



let formSearch=document.querySelector(".formSearch")
let api="https://api.github.com/users"

export async function getData(){
    try {
        const {data} = await axios.get(api)
        get (data)
        
    } catch (error) {
        console.error(error);
        
    }
}


//search

formSearch.onsubmit=async()=>{
    try {
        let {data} = await axios.get(`https://api.github.com/user/${formSearch["search"].value}`)
        get(data)
        
    } catch (error) {
        console.error(error);
        
    }


}

