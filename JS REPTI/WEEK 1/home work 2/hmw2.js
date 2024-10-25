let box=document.querySelector(".box");

let data=[
    {
        id:1,
        img:"./mebel.jpeg",
        name:"caruself",
        price:100,
        company:"Icea",
        status:false,
    },
    {
        id:2,
        img:"./mebel.jpeg",
        name:"turchrd",
        price:100,
        company:"Icea",
        status:false,
    },
    {
        id:3,
        img:"./mebel.jpeg",
        name:"alibaba",
        price:100,
        company:"Icea",
        status:false,
      
    },
]


function get (arr)
{
    box.innerHTML = ""
    arr.forEach((element) => {
        let card = document.createElement("div");
        card.classList.add("card");
        
        let img = document.createElement("img");
        img.src = element.img;
        img.classList.add("img")
        
        let name = document.createElement("h2");
        name.textContent = element.name;
        name.classList.add("name");
        
        let price = document.createElement("p");
        price.textContent = element.price;
        price.classList.add("price");
        
        let company = document.createElement("p");
        company.textContent =  element.company;

        let hChek=document.createElement("h1");
        hChek.innerHTML="Продукт куплино"
        hChek.classList.add("hChek");


        let divs = document.createElement("div");
        divs.classList.add("divs")

        let imgDelet=document.createElement("img");
        imgDelet.src="./carzinca.png";
        imgDelet.classList.add("imgsp");

        imgDelet.onclick=()=>
        {
            userDelet(element.id)
        }

        let imgEdit=document.createElement("img");
        imgEdit.src="./edits.jpeg";
        imgEdit.classList.add("imgsp");
        imgEdit.onclick=()=>
        {
            userEdit(element)
        }

        let inpChek = document.createElement("input");
        inpChek.type = "checkbox";
        inpChek.classList.add("inpChek")
        inpChek.checked=element.status
        inpChek.onclick = () => {
        element.status=!element.status
        get(data)
        
        }
        if(element.status){
            hChek.className="hChekshov"
        }

        
      
          
        

        let imgInfo = document.createElement("img")
        imgInfo.src="./info.png";
        imgInfo.classList.add("imgsp");


        divs.append(imgDelet,imgEdit,price,inpChek,imgInfo)
     card.append(hChek,img,name,divs)
     box.append(card)
        

        
    });
}
get(data);




//delet 
function userDelet(id)
{
    data=data.filter(item=>item.id!==id)
    get(data)
    console.log(data)
}


//add
let btnAdd=document.querySelector(".btnAdd")
let addModal = document.querySelector(".addModal")
let inpImg=document.querySelector(".inpImg")
let inpName=document.querySelector(".inpName")
let inpPrice=document.querySelector(".inpPrice")
let save=document.querySelector(".save")

btnAdd.onclick=()=>{
    addModal.showModal()
}

save.onclick=()=>{
    let newObj={
        id:data.length+1,
        img:inpImg.value,
        name:inpName.value,
        price:inpPrice.value,
   
       
    }
    data.push(newObj)
    get(data)
    addModal.close()
    inpImg.value=""
    inpName.value=""
    inpPrice.value=""
}


//search

let search=document.querySelector(".search")
search.oninput=()=>{
    let poisc=search.value.toLowerCase()
    data=data.filter(item=>item.name.toLowerCase().includes(poisc))
    get(data)
}




//edit

let editModal=document.querySelector(".editModal")

let inpImgE=document.querySelector(".inpImgE")
let inpNameE=document.querySelector(".inpNameE")
let inpPriceE=document.querySelector(".inpPriceE")
let saves=document.querySelector(".saves")

function userEdit(item){
    editModal.showModal()
    inpImgE.value=item.img
    inpNameE.value=item.name
    inpPriceE.value=item.price
    saves.onclick=()=>{
        item.img=inpImgE.value
        item.name=inpNameE.value
        item.price=inpPriceE.value
        get(data)
        editModal.close()
        inpImgE.value=""
        inpNameE.value=""
        inpPriceE.value=""
    }
}
