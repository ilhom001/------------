
let box=document.querySelector(".box")


let mas=[]
let data=[
    {
        id:1,
        image:"data:image/jpeg;base64,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",
        name:"John",
        age:30,
        status:false,
        data:"2035-07-22T16:23:59.300Z",
        
    },
    {
        id:2,
        image:"data:image/png;base64,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",
        name:"PEP ALISON",
        age:30,
        status:false,
        data:"2035-07-22T16:23:59.300Z",
        
    },
    {
        id:3,
        image:"data:image/png;base64,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",
        name:"GRizman",
        age:30,
        status:false,
        data:"2035-07-22T16:23:59.300Z",
        
    },
]



function get (arr)
{
        box.innerHTML=""
        arr.forEach((element) => {
        tr=document.createElement("tr")

        let usersss=document.createElement("td")
       
        userChak=document.createElement("input")
        userChak.type="checkbox"
       

       

        let userImg=document.createElement("td")
        let img=document.createElement("img")
        img.classList.add("userImg")
        img.src=element.image
        userImg.appendChild(img)

        let userName=document.createElement("td")
        userName.textContent=element.name

        let userAge=document.createElement("td")
        userAge.textContent=element.age

        let userStatus=document.createElement("td")
        userStatus.innerHTML=element.status ? "Active":"Inactive"

        let userData=document.createElement("td")
        userData.textContent=new Date(element.data).toLocaleDateString()


        let userAction=document.createElement("td")

        let editBtn=document.createElement("button")
        editBtn.textContent="Edit"
        editBtn.classList.add("editBtn")    
        editBtn.onclick=()=>
            {
                userEdit(element)
                dialogEdit.showModal()
            }

        let deleteBtn=document.createElement("button")
        deleteBtn.textContent="Delete"
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.onclick=()=>
        {
            userDelete(element.id)
        }
        
        usersss.append(userChak)
       userAction.append(editBtn,deleteBtn)

        tr.append(usersss,userImg,userName,userAge,userStatus,userData,userAction)
        box.appendChild(tr)

         userChak.onclick=() => {
            if(userChak.checked)
            {
                mas.push(element.id)
                console.log(mas);
            }
        }
    });
}




//delete

function userDelete(id)
{
    data=data.filter((element)=>element.id!==id)

    get(data)
}


//add

let dialogAdd=document.querySelector(".dialogAdd")
let formAdd=document.querySelector(".formADD")
let closes=document.querySelector(".close")

let addUser=document.querySelector(".addUser")

addUser.onclick=()=>
    {
        dialogAdd.showModal()
    }

    formAdd.onsubmit=(event)=>
    {
        event.preventDefault();
        let newUser={
            id:data.length+1,
            image:formAdd["imgA"].value,
            name:formAdd["nameA"].value,
            age:formAdd["ageA"].value,
            status:formAdd["statusA"].value=="Active"? true :false,
            data:formAdd["dateA"].value,
        }
        data.push(newUser)
        get(data)

        dialogAdd.close()
        formAdd.reset()
    }

    closes.onclick=()=>
    {
        dialogAdd.close()
        formAdd.reset()
    }



    //edit

    let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")
let closeEdit=document.querySelector(".closeEdit")

function userEdit(user)
{
    formEdit["imgE"].value=user.image
    formEdit["nameE"].value=user.name
    formEdit["ageE"].value=user.age
    formEdit["statusE"].value=user.status?"Active":"Inactive"
    formEdit["dateE"].value=new Date(user.data).toISOString().split("T")[0]

    formEdit.onsubmit=(event)=>
    {
        event.preventDefault();
        user.image=formEdit["imgE"].value
        user.name=formEdit["nameE"].value
        user.age=formEdit["ageE"].value
        user.status=formEdit["statusE"].value=="Active"? true :false
        user.data=formEdit["dateE"].value
        get(data)
        dialogEdit.close()
    }

}
closeEdit.onclick=()=>
{
    dialogEdit.close()
    
}


//search

let search=document.querySelector(".search")

search.oninput=()=>
    {
        
         let filteredData=data.filter((element)=>element.name.toLowerCase().includes(search.value))
         
        get(filteredData)

    }


    //filter
 
    let selFilter=document.querySelector(".selFilter")

    selFilter.onchange=()=>
    {
        if(selFilter.value=="Active")
        {
            let filteredData=data.filter((element)=>element.status==true)
            get(filteredData)
        }
        else if(selFilter.value=="Inactive")
            {
                let filteredData=data.filter((element)=>element.status==false)
                get(filteredData)
            }
        else
        {
            get(data)
        }
    }



    //sort

    let sortName=document.querySelector(".sortName")
    sortName.onclick=()=>
    {
        let sortedData=data.sort((a,b)=>a.name.localeCompare(b.name))
        get(sortedData)
    }



    //cheack
    
    // let butChek=document.querySelector(".butChek")

    // butChek.onclick=()=>
    // {
    //     if(mas.length==0)
    //     {
    //         alert("Select users")
    //         return
    //     }
    //     let filteredData=data.filter(item=>item!=element.id)
    //     get(filteredData)
    // }
    get(data)