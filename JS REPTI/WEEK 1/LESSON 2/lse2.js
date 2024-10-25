
let box=document.querySelector(".box")

let data=[
    {
        id:1,
        image:"image/",
        name:"Mehriddin",
        phone:2492048583
    },
    {
        id:2,
        image:"image/",
        name:"faruh",
        phone:2939454
    },
]
get(data)


function get (arr)
{
    box.innerHTML=""
    arr.forEach((element) => {
        let continer=document.createElement("div")
        continer.classList.add("continer")
       

        let div=document.createElement("div")
        let dvv2=document.createElement("div")
        div.classList.add("div")
        let img=document.createElement("img")
        img.src=element.image
        img.classList.add("img")
        dvv2.classList.add("dvv2")

        let h1=document.createElement("h1")
        let phone=document.createElement("p")
        h1.textContent=element.name
        phone.textContent="Phone: "+element.phone

       let butEditor=document.createElement("button")
        butEditor.textContent="edit"
        butEditor.classList.add("butEditor")
        butEditor.onclick=()=>{
            updateUser(element)
        }


        let btnDelete=document.createElement("button")
        btnDelete.textContent="delete"
         btnDelete.classList.add("btnDelete")
         btnDelete.onclick=()=>{
            userDelet(element.id)
         }



        div.append(dvv2,img)
        dvv2.append(h1,phone)
        continer.append(div,butEditor,btnDelete)
        box.append(continer)
        
    });
}



function userDelet(id)
{
    data=data.filter(item=>item.id!=id)
    get(data)
}



//ad

let userAdd=document.querySelector(".userAdd")
let addModal=document.querySelector(".addModal")
let iImg=document.querySelector(".iImg")
let iName=document.querySelector(".iNAme")
let iPhone=document.querySelector(".iPhone")
let save=document.querySelector(".save")

userAdd.onclick=()=>
{
    addModal.showModal()
}
save.onclick=()=>
{
    let newObj={
        id:data.length+1,
        image:iImg.value,
        name:iName.value,
        phone:iPhone.value
    }
    data.push(newObj)
    addModal.close()
    get(data)
    iImg.value=""
    iName.value=""
    iPhone.value=""

}

//edit


let edtiModal=document.querySelector(".editModal")
let aiImg=document.querySelector(".aiImg")
let aiName=document.querySelector(".aiNAme")
let aiPhone=document.querySelector(".aiPhone")
let saves=document.querySelector(".asaves")

function updateUser(user){
    edtiModal.showModal()
    aiImg.value=user.image
    aiName.value=user.name
    aiPhone.value=user.phone
    saves.onclick=()=>{
        user.image=aiImg.value
        user.name=aiName.value
        user.phone=aiPhone.value
        edtiModal.close()
        get(data)
    }
 
}




