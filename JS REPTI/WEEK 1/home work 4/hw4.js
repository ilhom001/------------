

let box=document.querySelector(".box")

let data=[
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Alexis Lakin",
      "email": "Laury_Tillman@hotmail.com",
      "city": "Pittsfield",
      "status": false,
      "phone": "(932) 525-1666",
      "id": "40"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Maurice Hintz",
      "email": "Carmel62@yahoo.com",
      "city": "East Gabriella",
      "status": false,
      "phone": "886.785.7094 x74413",
      "id": "41"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Miss Darrin Keebler",
      "email": "Lew_Green17@yahoo.com",
      "city": "Dickifurt",
      "status": false,
      "phone": "(318) 938-8203 x4436",
      "id": "42"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Robert Schultz",
      "email": "Levi_Corkery@hotmail.com",
      "city": "West Samsonport",
      "status": false,
      "phone": "587.714.4047",
      "id": "43"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Ronald Thiel",
      "email": "Torrey41@yahoo.com",
      "city": "Austinhaven",
      "status": false,
      "phone": "(644) 268-6765 x1402",
      "id": "44"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Bernadette Buckridge PhD",
      "email": "Delaney62@gmail.com",
      "city": "Geovannystad",
      "status": false,
      "phone": "441-267-8029",
      "id": "45"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Earl Glover",
      "email": "Cristobal78@yahoo.com",
      "city": "Maple Grove",
      "status": false,
      "phone": "(265) 559-9160 x95080",
      "id": "46"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Christine Schmidt",
      "email": "Geo_Mante75@hotmail.com",
      "city": "Saraifurt",
      "status": false,
      "phone": "1-550-575-3520",
      "id": "47"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Dr. Tina Mertz MD",
      "email": "Lance.Turcotte59@gmail.com",
      "city": "South Mary",
      "status": false,
      "phone": "1-336-792-5609 x7742",
      "id": "48"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Leslie Tremblay",
      "email": "Sid85@gmail.com",
      "city": "Port Kara",
      "status": false,
      "phone": "(595) 951-3483",
      "id": "49"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Sonja O'Connell",
      "email": "Mario_Hackett@yahoo.com",
      "city": "East Gerry",
      "status": false,
      "phone": "(593) 278-3457",
      "id": "50"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Bob Gerhold",
      "email": "Gordon.Leffler73@hotmail.com",
      "city": "New Shyann",
      "status": false,
      "phone": "1-383-661-9265",
      "id": "51"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Darrin Ryan",
      "email": "Christina_Purdy@yahoo.com",
      "city": "Nienowcester",
      "status": false,
      "phone": "(293) 381-6167",
      "id": "52"
    },
]


function get (data)
{
    box.innerHTML = ""
    data.forEach((element) => {
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        let boxName=document.createElement("div")
        boxName.classList.add("boxName");
        let userImg=document.createElement("img");
        userImg.src=element.img;
        userImg.classList.add("userImg")

        let divs=document.createElement("div");
     
        divs.classList.add("userDetails")

        let userName=document.createElement("td");
        userName.textContent=element.name;
        let userEmail=document.createElement("td");
        userEmail.textContent=element.email;
        let userCity=document.createElement("td");
        userCity.textContent=element.city;
        let userStatus=document.createElement("td");
        userStatus.textContent=element.status ?"Active" : "Inactive"
        let userPhone=document.createElement("td");
        userPhone.textContent=element.phone;
        let userAction=document.createElement("td");
        let ingAction=document.createElement("img")
        ingAction.src="./ffdf.png"
        ingAction.classList.add("ingAction")
        ingAction.onclick=()=>
        {
            dialogAction.showModal()
        }

        ingAction.onclick = () => {
            imgEdit.onclick=()=>{
             dialogEdit.showModal();

              editFun(element)

            }
      
        
        
            imgDelete.setAttribute("data-id", element.id);

            dialogAction.showModal();
        }

 


       

 
        userAction.append(ingAction)
        divs.append(userName,userEmail);
        boxName.append(userImg,divs)
        td.append(boxName)
        tr.append(td,userCity,userStatus,userPhone,userAction);
        box.append(tr);
        
    });
}

get(data);


let dialogAction=document.querySelector(".dialogAction")


//delete user
let imgDelete = document.querySelector(".imgDelete");

imgDelete.onclick = () => {
    let id = imgDelete.getAttribute("data-id"); 
    dialogAction.close();
    deleteUser(id);
};

function deleteUser(id) {
    data = data.filter(item => item.id != id);
    get(data);
}


//search

let search=document.querySelector(".search");

search.oninput = () => {
   
    let res = data.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))
    get(res)
}


//add

let btnAdd=document.querySelector(".btnAdd");
let dialogAdd=document.querySelector(".dialogAdd");
let formAdd=document.querySelector(".formAdd");
let Close=document.querySelector(".Close");

Close.onclick = () => {
    dialogAdd.close();
}
btnAdd.onclick = () => {
    dialogAdd.showModal();
}

formAdd.onsubmit = (e) => {
    e.preventDefault();
    let newUser={
        id:data.length+1,
        img:formAdd["inpImg"].value,
        name:formAdd["inpName"].value,
        email:formAdd["inpEmail"].value,
        city:formAdd["inpAdres"].value,
        status:formAdd["selAdd"].value=="Active"?true:false,
        phone:formAdd["inpPhone"].value,

    }
    data.push(newUser)
    get(data)
    dialogAdd.close();
    formAdd.reset();
}



//edit
let imgEdit=document.querySelector(".imgEdit")
let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")
let Closes=document.querySelector(".Closes")



 
function editFun(data){

    formEdit["inpImg"].value=data.img
    formEdit["inpName"].value=data.name
    formEdit["inpEmail"].value=data.email
    formEdit["inpAdres"].value=data.city
    formEdit["selAdd"].value=data.status?"Active":"Inactive"
    formEdit["inpPhone"].value=data.phone


formEdit.onsubmit = (e) => {
  e.preventDefault()
  data.img=formEdit["inpImg"].value
  data.name=formEdit["inpName"].value
  data.email=formEdit["inpEmail"].value
  data.city=formEdit["inpAdres"].value
  data.status=formEdit["selAdd"].value=="Active"?true:false
  data.phone=formEdit["inpPhone"].value
  get(data)
  dialogEdit.close();
}

}




Closes.onclick = () => {
    dialogEdit.close();

}




//filter

let selFilter=document.querySelector(".selFilter")

selFilter.onchange=() => {
    if(selFilter.value=="Active")
    {
        let stock=data.filter((val) =>val.status==true)
        get(stock)
    }
    else if(selFilter.value=="Inactive")
    {
        let outStock=data.filter((val) => val.status==false)
        get(outStock)
    }
    else{
        get(data)
    }
}


let table=document.querySelector("table")
let Ligth=document.querySelector(".Ligth")
let body=document.querySelector("body")

let dark=document.querySelector(".dark")

Ligth.onclick=() => {
    body.style.backgroundColor="white"
    table.style.backgroundColor="white"
    table.style.color="black"
   

    
}
dark.onclick=() => {
    body.style.backgroundColor="black"
     table.style.backgroundColor="black"
     table.style.color="white" 
}












