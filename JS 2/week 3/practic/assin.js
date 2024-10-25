import { get } from "./sinh.js";


let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"

export async function  getData() {
 try { 
    const {data}=await axios.get(api)
    get(data)
    
 } catch (error) {
     console.error(error);
     
 }
    
}

  //delete
export const deletUser = async (id) => {

    try {
        await axios.delete(`${api}/${id}`,)
        getData();
    }

    catch (error) {
        console.error(error);


    }
}



//search

let search=document.querySelector(".search")
search.oninput=async()=>
{
    try {
       const{data}=await axios.get (`${api}?name=${search.value}`) 
       get(data) 
    } catch (error) {
       console.error(error);
        
    }
}


//add
export  async function postUser(user){
    try {
         await axios.post(api,user)
         getData()
    } catch (error) {
        console.error(error);
        
    }
}

//edit
export async function putUser(id,user) {
    try {
         const {data}=await axios.put(`${api}/${id}`,user)
         getData()
    } catch (error) {
        console.error(error);
        
    }
    
}

    
