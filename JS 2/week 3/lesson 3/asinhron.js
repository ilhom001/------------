import { get } from "./sinhron.js";

let api="https://restcountries.com/v3.1/all"

export async function getData() {
    try {
       const{data}=await axios.get(api)
       get(data)
    } catch (error) {
        console.error(error);


    }


}


//search

let inpSearch = document.querySelector(".search")
inpSearch.oninput = async () => {
    try {
      const {data} =   await axios.get(`https://restcountries.com/v3.1/name/${inpSearch.value}`)

    
        get(data)
    } catch (error) {
        console.error(error);

    }
}



let selectRegion=document.querySelector(".selectRegion")
selectRegion.onchange= async(event)=>{
    try {
      const {data} =   await axios.get(`https://restcountries.com/v3.1/region/${selectRegion.value}`)

        get(data)
    } catch (error) {
        console.error(error);

    }
}
