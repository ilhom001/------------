import { get } from "./sinhron.js";
let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"


export async function getData(){
    try {
        let {data} = await axios.get(api)
        get (data)
        
    } catch (error) {
        console.error(error);
        
    }
}

//search for
let search=document.querySelector(".search")

search.oninput=async()=>{
    try {
         let {data} = await axios.get(`${api}?job=${search.value}`)
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
