import { get,arr } from "./sinh.js";

let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"

export async function getData(){
    try {
        const{data}= await axios.get(api)
    get(data)
    } catch (error) {
        console.error(error);
        
    }
}


// search

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


//delete


export async function deleteUser(id){
    try {
        await axios.delete(`${api}/${id}`)
        getData()
    } catch (error) {
        console.error(error);
        
    }
}


//add

export async function postUser(user) {
    try {
        await axios.post(api, user)
        getData()
    } catch (error) {
        console.error(error);


    }

}


//edit

export async function putUser(user,id) {

    try {
        await axios.put(`${api}/${id}`, user)
        getData()
    } catch (error) {
        console.error(error);
        
    }
}


//check
let checkbtn=document.querySelector('.checkbtn');
 let butОТМЕНА=document.querySelector(".butОТМЕНА")
let dialogCheak=document.querySelector(".dialogCheak")
let butOk=document.querySelector(".butOk")





butОТМЕНА.onclick=()=>{
    dialogCheak.close()
}
butOk.onclick=()=>{deletCheck()}

async function deletCheck() {

if(arr.length==0){
    alert("rrrtttrtrtrtrt")
    return

}
let conFir=confirm("fkdjlfnskslnvsjlvdn")
if(!conFir){
    return
}
try {
    for(let id of arr)
    {
        await axios.delete(`${api}/${id}`)

    }
    getData()
    
} catch (error) {
    console.error(error);
    
}
}



//sort
let btnSort=document.querySelector(".btnSort")
btnSort.onclick=async () => {
    try {
        const{data}=await axios.get(`${api}?sortBy=name`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}




//filter

//filter

let selectFilter=document.querySelector("#selectFilter")

selectFilter.onchange=async()=>{
    try {
        const {data}=await axios.get(`${api}?status=${selectFilter.value}`)
        get(data)
    } catch (error) { 
        console.error(error);
        
    }
}






