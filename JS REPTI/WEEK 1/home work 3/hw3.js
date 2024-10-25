
let box=document.querySelector(".box")
let data=[
    {
        id:1,
        images:"./Без названия.jpeg",
        name:"huawey gallery",
        email:"bfddbdffgdl",
        price:155,
        status:false

    },
    {
        id:2,
        images:"./Без названия.jpeg",
        name:"Samsung Galaxy",
        email:"bfddbdffgdl",
        price:155,
        status:false

    },
    {
        id:3,
        images:"./Без названия.jpeg",
        name:"readmy ",
        email:"bfddbdffgdl",
        price:155,
        status:false

    },
]



function  get (arr){
    box.innerHTML=""

    arr.forEach((element)=> {
        tr=document.createElement("tr")
        
        userImg=document.createElement("td")
        let img=document.createElement("img")
        img.src=element.images
        img.classList.add("img")

        let divs=document.createElement("div")
        divs.classList.add("divs")
        let userName=document.createElement("h3")
        userName.textContent=element.name

        let userEmail=document.createElement("p")
        userEmail.textContent=element.email

        let userPrice=document.createElement("td")
        userPrice.textContent=element.price

        let userStatus=document.createElement("td")
     
        userStatus.innerHTML=element.status?"Active":"Inactive"

        let userAction=document.createElement("td")
        userEditor=document.createElement("button")
        userEditor.textContent="Edit"
        userEditor.onclick=()=>{
            editUser(element)
        }


        let userDelete=document.createElement("button")
        userDelete.textContent="Delete"
        userDelete.onclick=()=>{
            deleteUser(element.id)
        }




        userAction.append(userEditor,userDelete)
        userImg.append(img)
        divs.append(userName,userEmail)
        tr.append(userImg,divs,userPrice,userStatus,userAction)
        box.append(tr)



       
        
    });
}

get(data)


//add

let Add=document.querySelector(".Add")
let  dialAdd=document.querySelector(".dialAdd")

let inpImg=document.querySelector(".inpImg")

let inpName=document.querySelector(".inpName")

let inpEmail=document.querySelector(".inpEmail")

let inpStock=document.querySelector(".inpStock")

let selectAction=document.querySelector(".selectActiv")

let btnAdd=document.querySelector(".btnAdd")

Add.onclick=()=>
{
    dialAdd.showModal()
}
btnAdd.onclick=()=>{
    let obj={
        id:data.length+1,
        images:inpImg.value,
        name:inpName.value,
        email:inpEmail.value,
        price:inpStock.value,
        status:selectAction.value=="Active"?true:false

    }
    data.push(obj)
    get(data)
    dialAdd.close()
    inpImg.value=""
    inpName.value=""
    inpEmail.value=""
    inpStock.value=""

}


//search

let search=document.querySelector(".search")


search.oninput = () => {
    let poisc = search.value.toLowerCase()
    let res = data.filter(item => item.name.toLowerCase().includes(poisc))
    get(res)
}


//delete
function  deleteUser(id){
    data = data.filter(item => item.id!=id)
    get(data)
}


//edit
let  dialEdit=document.querySelector(".dialEdit")

let inpImgE=document.querySelector(".inpImgE")

let inpNameE=document.querySelector(".inpNameE")

let inpEmailE=document.querySelector(".inpEmailE")

let inpStockE=document.querySelector(".inpStockE")

let selectActionE=document.querySelector(".selectActivE")

let btnEdit=document.querySelector(".btnEdit")


function  editUser(user){
    dialEdit.showModal()
    inpImgE.value = user.images,
    inpNameE.value=user.name
    inpEmailE.value=user.email
    inpStockE.value=user.price
    selectActionE.value=user.status?"Active":"Inactive"
    btnEdit.onclick=()=>{
        user.images=inpImgE.value
        user.name=inpNameE.value
        user.email=inpEmailE.value
        user.price=inpStockE.value
        user.status=selectActionE.value=="Active"?true:false
        get(data)
        dialEdit.close()
    
}
}

//sort


let sort=document.querySelector(".sort")
sort.onclick=()=>{
    let sortType=sort.value
    data.sort((a,b)=>a[sortType]>b[sortType]?0:-1)
    get(data)


}





let selectFilter=document.querySelector(".selectFilter")

selectFilter.onchange=()=>{
    if(selectFilter.value=="true"){
        let stock=data.filter((el)=>el.status==true)
        get(stock)
    }
    else if(selectFilter.value=="false"){
        console.log(se);
        
        let outStock=data.filter((el)=>el.status==false)
        get(outStock)
    }
    else{
        get(data)
    }


}



