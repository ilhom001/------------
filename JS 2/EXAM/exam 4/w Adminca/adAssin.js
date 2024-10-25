

import { get } from "./adSinh.js";;

let api = 'https://66e583cf5cc7f9b6273d908c.mockapi.io/user';

export async function getApi() {
    try
    {
        const {data}=await axios.get(api)
        get(data)
    } catch{
        console.error(error);
    }   
}

//search for

let search=document.querySelector('.search');

search.oninput=async()=>
    {
        try {
           const {data}=await axios.get(`${api}?name=${search.value}`) 
           get(data) 
        } catch (error) {
           console.error(error);
            
        }
    }




    //add

    export async function postUser(user){
        try {
            await axios.post(api,user)
            getApi()
        } catch (error) {
            console.error(error);
            
        }
    
    }


    //edit

    export async function putUser(user,id)
{
    try {
      const{data}=  await axios.put(`${api}/${id}`,user)
        getApi()
    } catch (error) {
        console.error(error);
        
    }
}



//delete

export async function userDelet(id){
    try {
        await axios.delete(`${api}/${id}`)
        getApi()
    } catch (error) {
        console.error(error);
        
    }
}
