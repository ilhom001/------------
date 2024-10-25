import { get } from "./domproduct.js";
let api = "https://66e583cf5cc7f9b6273d908c.mockapi.io/user"

export async function GetApi() {
    try {
        const { data } = await axios.get(api)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

// SEARCH

let inpSearch = document.querySelector(".inpSearch")

inpSearch.oninput = async () => {
    try {
        const { data } = await axios.get(`${api}?name=${inpSearch.value}`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

// FILTRATION

let ikeaComp = document.querySelector(".ikeaComp")
ikeaComp.onclick = async () => {
    try {
        const { data } = await axios.get(`${api}?compani=Ikea`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

let marcosComp = document.querySelector(".marcosComp")
marcosComp.onclick = async () => {
    try {
        const { data } = await axios.get(`${api}?compani=Marcos`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

let CaressaComp = document.querySelector(".CaressaComp")
CaressaComp.onclick = async () => {
    try {
        const { data } = await axios.get(`${api}?compani=Caressa`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

let LiddyComp = document.querySelector(".LiddyComp")

LiddyComp.onclick = async () => {
    try {
        const { data } = await axios.get(`${api}?compani=Liddy`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}
let Allcompany = document.querySelector(".Allcompany")

Allcompany.onclick = async () => {
    try {
        const { data } = await axios.get(api)
        get(data)
    } catch (error) {
        console.error(error);
    }
}




// FIlter price

let inpPrice = document.querySelector(".inpPrice")
let PRICE = document.querySelector(".PRICE")

inpPrice.oninput = async () => {
    PRICE.innerHTML = inpPrice.value+"$"
    try {
        const { data } = await axios.get(`${api}?price=${inpPrice.value}`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}


