let box=document.querySelector(".box")
let massiv=[]
let dialogInfo=document.querySelector(".dialogInfo")
let Closes=document.querySelector(".Closes")
let imgInfos=document.querySelector(".imgInfos")
let nameInfo=document.querySelector(".nameInfo")
let emailInfo=document.querySelector(".emailInfo")
let contactInfo=document.querySelector(".contactInfo")
let cityInfo=document.querySelector(".cityInfo")
let data=[
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Robert Greenfelder",
      "email": "Zander98@gmail.com",
      "status": false,
      "contact": "985-925-9960 x5924",
      "age": 53125,
      "city": "Darbyville",
      "id": "45"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Luther Walsh",
      "email": "Alvis.Turner16@yahoo.com",
      "status": false,
      "contact": "731-753-4918 x88012",
      "age": 88567,
      "city": "Royal Oak",
      "id": "46"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Bethany Walsh",
      "email": "Nyasia71@hotmail.com",
      "status": false,
      "contact": "462.976.1712 x58897",
      "age": 41360,
      "city": "East Alexandriamouth",
      "id": "47"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Lester Ankunding I",
      "email": "Halie_Dickinson85@yahoo.com",
      "status": false,
      "contact": "(571) 657-7054 x8814",
      "age": 64464,
      "city": "Blaine",
      "id": "48"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Ron Erdman I",
      "email": "Newell.Predovic84@hotmail.com",
      "status": false,
      "contact": "642-769-7735 x7780",
      "age": 34760,
      "city": "Jeaniehaven",
      "id": "49"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Ramon Abernathy",
      "email": "Uriel5@hotmail.com",
      "status": false,
      "contact": "1-360-356-1941 x67754",
      "age": 59147,
      "city": "Waltertown",
      "id": "51"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Sarah Gutkowski",
      "email": "Toni_Kuvalis@gmail.com",
      "status": false,
      "contact": "(639) 855-4866 x894",
      "age": 18711,
      "city": "Lake Jovannybury",
      "id": "52"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Nicholas Funk",
      "email": "Imani_Trantow64@gmail.com",
      "status": false,
      "contact": "1-563-297-2445 x697",
      "age": 99647,
      "city": "Jonmouth",
      "id": "53"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Kari Langosh",
      "email": "Johanna_Dickens@gmail.com",
      "status": false,
      "contact": "938.481.5834",
      "age": 50254,
      "city": "Fort Myrtisworth",
      "id": "54"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Simon Daniel",
      "email": "Una36@yahoo.com",
      "status": true,
      "contact": "(685) 864-8308 x48237",
      "age": 74756,
      "city": "Tommiestead",
      "id": "55"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Ramon Bashirian",
      "email": "Grayce_Rau74@gmail.com",
      "status": false,
      "contact": "517.974.5209 x9717",
      "age": 87042,
      "city": "Fountain Valley",
      "id": "56"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Raul Franey II",
      "email": "Lauryn.Adams6@gmail.com",
      "status": false,
      "contact": "1-670-592-5263 x262",
      "age": 52777,
      "city": "Bahringerton",
      "id": "58"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Dr. Henrietta Lebsack",
      "email": "Rosie.Raynor0@hotmail.com",
      "status": false,
      "contact": "244-992-3714 x5576",
      "age": 7354,
      "city": "Lake Jonathon",
      "id": "59"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Elsa Flatley",
      "email": "Elouise_Veum36@yahoo.com",
      "status": false,
      "contact": "1-421-738-1077 x010",
      "age": 71780,
      "city": "North Kaylee",
      "id": "60"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Jeannie Kerluke MD",
      "email": "Alize.Hagenes42@yahoo.com",
      "status": false,
      "contact": "(308) 732-0019 x944",
      "age": 15680,
      "city": "North Xander",
      "id": "61"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Eloise Hessel",
      "email": "Ada47@hotmail.com",
      "status": false,
      "contact": "1-683-252-3641 x068",
      "age": 6811,
      "city": "Tanyaland",
      "id": "62"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Mathew Kemmer",
      "email": "Elton91@yahoo.com",
      "status": true,
      "contact": "429.464.6752 x687",
      "age": 37646,
      "city": "Pine Bluff",
      "id": "63"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Irving Altenwerth",
      "email": "Talon.Schuster@gmail.com",
      "status": true,
      "contact": "411.888.4914 x145",
      "age": 20893,
      "city": "West Amos",
      "id": "64"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Tomas Johnston",
      "email": "Elenora12@gmail.com",
      "status": false,
      "contact": "965-374-3606 x07931",
      "age": 84036,
      "city": "Mooreton",
      "id": "5"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Melanie Kling",
      "email": "Felicia32@hotmail.com",
      "status": false,
      "contact": "1-760-740-9074 x043",
      "age": 66116,
      "city": "Dallas",
      "id": "14"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Helen Kovacek",
      "email": "Vallie73@gmail.com",
      "status": true,
      "contact": "954-901-6956",
      "age": 75329,
      "city": "Longview",
      "id": "6"
    },
]




function get (arr)
{
    box.innerHTML = "";
    arr.forEach((element) => {
        let tr=document.createElement("tr");

        let chekUser = document.createElement("td");
        let input=document.createElement("input");
        input.type="checkbox";
        if(input.checked){
            massiv.push(element.id)
        }
      

        let userId=document.createElement("td");
        userId.innerHTML=element.id

        let userImg=document.createElement("td");

        let div1=document.createElement("div");
        div1.classList.add("div1")
        let img=document.createElement("img");
        img.src=element.img
        img.classList.add("img")

        let div2=document.createElement("div");
        div2.classList.add("div2")
        let userName=document.createElement("h4");
        userName.innerHTML=element.name
        let userEmail=document.createElement("p");
        userEmail.innerHTML=element.email

        let userContact=document.createElement("td");
        userContact.innerHTML=element.contact

        let userAge=document.createElement("td");
        userAge.innerHTML=element.age

        let userCountry=document.createElement("td");
        userCountry.innerHTML=element.city

        let userStatus=document.createElement("td");
        userStatus.innerHTML=element.status?"Active":"Inactive"
        

        let userAction=document.createElement("td");
        userAction.classList.add("action")

        let imgInfo=document.createElement("img");
        imgInfo.src="./info.jpeg";
        imgInfo.classList.add("imgInfo");
        imgInfo.onclick=()=>
        {
            infoUsers(element)
        }

        let btnEdit=document.createElement("button");
        btnEdit.innerHTML="Edit";
        btnEdit.classList.add("btnEdit");
        btnEdit.onclick=()=>
        {
            editUsers(element)
        }

        let btnDelete=document.createElement("button");
        btnDelete.innerHTML="Delete";
        btnDelete.classList.add("btnDelete");

        btnDelete.onclick=()=>
        {
            deleteUser(element.id);
        }



        chekUser.append(input)
        userAction.append(imgInfo,btnEdit,btnDelete)
        div2.append(userName, userEmail);
        div1.append(img, div2);
        userImg.append(div1)
        tr.append(chekUser,userId, userImg, userContact, userAge, userCountry, userStatus, userAction);
        box.append(tr);

    });
}
get(data)




//delete

function deleteUser(id)
{
    data=data.filter((element)=>element.id!=id)
    get(data)
}



//add

let addModal=document.querySelector(".addModal")
let dialogAdd=document.querySelector(".dialogAdd")
let formAdd=document.querySelector(".formAdd")


addModal.onclick=()=>
{
    dialogAdd.showModal()
}

formAdd.onsubmit=(e)=>
{  
      e.preventDefault()
    let newUser={
        id:data.length+1,
    img:formAdd["inpImg"].value,
    name:formAdd["inpName"].value,
    email:formAdd["inpEmail"].value,
    status:formAdd["selectAdd"].value=="Active"?true:false,
    contact:formAdd["inpContact"].value,
    age:formAdd["inpAge"].value,
    city:formAdd["inpCity"].value,

    }
    data.push(newUser)
    get(data)
    dialogAdd.close()
    formAdd.reset()
 
}



//edir

let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")



function editUsers(user)
{
    dialogEdit.showModal()
    formEdit["inpEditImg"].value=user.img,
    formEdit["inpEditName"].value=user.name
    formEdit["inpEditEmail"].value=user.email
    formEdit["selectEdit"].value=user.status?"Active":"Inactive"
    formEdit["inpEditContact"].value=user.contact
    formEdit["inpEditAge"].value=user.age
    formEdit["inpEditCity"].value=user.city

   formEdit.onsubmit=(event)=>
   {
    event.preventDefault()
    user.img=formEdit["inpEditImg"].value,
    user.name=formEdit["inpEditName"].value,
    user.email=formEdit["inpEditEmail"].value,
    user.status=formEdit["selectEdit"].value=="Active"?true:false,
    user.contact=formEdit["inpEditContact"].value,
    user.age=formEdit["inpEditAge"].value,
    user.city=formEdit["inpEditCity"].value
    get(data)
    dialogEdit.close()
   }
}


//search

let search=document.querySelector(".search")

search.oninput=()=>
{
    let inpSearch=data.filter(item=>item.name.toLowerCase().includes(search.value))
    get(inpSearch)
}




//filter

let selRilter=document.querySelector(".selRilter")

selRilter.onchange=()=>
{
    if(selRilter.value=="Active"){
        let filterActive=data.filter(item=>item.status==true)
        get(filterActive)
    }
    else if(selRilter.value=="Inactive"){
        let filterInactive=data.filter(item=>item.status==false)
        get(filterInactive)
    }
    else{
        get(data)
    }
}


//sort
let imgSort=document.querySelector(".imgSort")

imgSort.onclick=()=>
 {
 data.sort((a, b)=>a.name.localeCompare(b.name))
 get(data)
  }


  //sortId
  let imgIdSearch=document.querySelector(".imgIdSearch")
  imgIdSearch.onclick=()=>
   {
    data.sort((a, b)=>a.id-b.id)
    get(data)
   }


  //cheake

  let btnCheak=document.querySelector(".btnCheak")



  btnCheak.onclick=()=>
{
    if(massiv.length>0)
    {
        alert("jvabsdvsdbcds dsf")
        let arrDelete=data.filter(item=>!massiv.includes(item.id))
        get(arrDelete)
        massiv=[]
    }
    else
    {
        alert("Choose users")
    }

}


//info




function infoUsers(user)
{
    dialogInfo.showModal()
    imgInfos.src=user.img
    nameInfo.innerHTML=user.name
    emailInfo.innerHTML=user.email
    contactInfo.innerHTML=user.contact
    cityInfo.innerHTML=user.city

 
}
Closes.onclick=()=>
{
    dialogInfo.close()
}






