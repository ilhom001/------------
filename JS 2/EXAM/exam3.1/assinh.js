
import { get } from "./cinhron.js";
let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"

export async function getData(){
    try {
        const{data}= await axios.get(api)
    get(data)
    } catch (error) {
        console.error(error);
        
    }
}




//serach
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



/// delet
export async function deleteUser(id){
    try {
        await axios.delete(`${api}/${id}`)
        getData()
    } catch (error) {
        console.error(error);
        
    }
}


//add

export async function postUser(user){
    try {
        await axios.post(api,user)
        getData()
    } catch (error) {
        console.error(error);
        
    }
}


//edit
export async function putUser(id, user){
    try {
        await axios.put(`${api}/${id}`,user)
        getData()
    } catch (error) {
        console.error(error);
        
    }
}



//filter

let selFilter=document.querySelector(".selFilter")

selFilter.onchange=async()=>{
    if(selFilter.value=="all"){getData()}
    try {
        const {data}=await axios.get(`${api}?payment=${selFilter.value=="paid" ?true:false}`)
        get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}



let selFi=document.querySelector(".selFi")
selFi.onchange=async()=>{
    if(selFi.value=="all"){getData()}
    try {
        const {data}=await axios.get(`${api}?payment=${selFi.value=="Active" ?true:false}`)
        get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}