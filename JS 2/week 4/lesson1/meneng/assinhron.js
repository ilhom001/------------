
import { get } from "./sinhron.js";
let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"

export async function getData(){
    try {
        const{data}= await axios.get(api)
        get(data)
    } catch (error) {
        console.error(error);
        
 }
}


//search

let search=document.querySelector(".search")

search.oninput=async()=>
{
    try {
       const {data}=await axios.get(`${api}?name=${search.value}`) 
       get(data) 
    } catch (error) {
       console.error(error);
        
    }
}