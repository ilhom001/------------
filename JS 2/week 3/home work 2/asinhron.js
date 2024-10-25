import { get } from "./Sinhron.js";

let api = "https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"
export async function getData() {
    try {
        let response = await fetch(api)
        let data = await response.json()
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

//   search
let inpSearch = document.querySelector(".inpSearch")
inpSearch.oninput = async () => {
    try {
      const {data} =   await axios.get(`${api}?name=${inpSearch.value}`)

        get(data)
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
export async function putUser(id,user) {
    try {
        const {data}= await axios.put(`${api}/${id}`,user)
        getData()
    } catch (error) {
        console.error(error);
        
    }
}



// filter

let selectADD=document.querySelector(".selectADD")
selectADD.onchange=async()=>{
try {
    
    const {data}=await axios.get(`${api}?status=${selectADD.value}`)
    get(data)
} catch (error) {
    console.error(error);
    
}
}



