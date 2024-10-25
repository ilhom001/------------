let box=document.querySelector(".box");

let data=[
    {
        id:1,
        imgs:"./Без названия.jpeg",
        name:"hkdmge",
        prise:234
    },
    {
        id:2,
         imgs:"./Без названия.jpeg",
        name:"rwakjcsfb",
        prise:234
    },
    {
        id:3,
         imgs:"./Без названия.jpeg",
        name:"nzdsgfnsdGBfdm",
        prise:234
    },
    {
        id:4,
        imgs:"./Без названия.jpeg",
        name:"snzfbshfbdal",
        prise:234
    },
    {
        id:5,
        imgs:"./Без названия.jpeg",
        name:"hkdmgedbsgjshatn",
        prise:234
    },
    {
        id:6,
        imgs:"./Без названия.jpeg",
        name:"hkdmgfdgafarge",
        prise:234
    },
]


function get(data)
{
    data.forEach((element) => {
        
        let div=document.createElement("div")
        div.classList.add("div")
        let image=document.createElement("img")
        image.src=element.imgs
        image.classList.add("image")

        let div2=document.createElement("div")
        div2.style.display="flex"
        div2.classList.add("div2")
        let userName=document.createElement("h3")
        userName.innerHTML=element.name
        userName.classList.add("userName")
        let userPrice=document.createElement("p")
        userPrice.innerHTML=element.prise
        userPrice.classList.add("userPrice")


        div2.append(userName, userPrice)
        div.append(image,div2)
        box.append(div)
    });
     
}
get(data)
