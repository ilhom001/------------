
import { get } from "./sinhron.js";
let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"

export async function getData()
{
    try {
        const { data } = await axios.get(api)

          get (data)
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


let ALL=document.querySelector(".ALL")

ALL.onclick=async()=>{
    try {
        const {data}=await axios.get(api) 
       get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}

let Icea=document.querySelector(".Icea")

Icea.onclick=async()=>
{
    try {
        const {data}=await axios.get(`${api}?compani=Icea`) 
       get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}


let Marcos=document.querySelector(".Marcos")

Marcos.onclick=async()=>{
    try {
        const {data}=await axios.get(`${api}?compani=Marcos`) 
       get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}


let Caressa=document.querySelector(".Caressa")

Caressa.onclick=async()=>{
    try {
        const {data}=await axios.get(`${api}?compani=Caressa`) 
       get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}

let Liddi=document.querySelector(".Liddi")

Liddi.onclick=async()=>{
    try {
        const {data}=await axios.get(`${api}?compani=Liddi`) 
       get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}









let priceRange = document.querySelector(".priceRange");
let priceSpan = document.querySelector(".priceSpan");


priceRange.onchange= async()=>{
    priceSpan.innerHTML=priceRange.value
    try{
        const {data}=await axios.get (`${api}?price=${priceRange.value}`)
        get (data)
    }
    catch(error){
        console.error(error)
    } 
}