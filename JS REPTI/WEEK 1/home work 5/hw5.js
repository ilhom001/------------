let box=document.querySelector(".box")

 massiv=[]
let data=[
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Spencer Hahn",
      "city": "Pollyport",
      "status": false,
      "age": "1953-08-30T22:05:17.727Z",
      "id": "40"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Johanna Schmidt",
      "city": "Mosciskistad",
      "status": true,
      "age": "1971-07-24T05:17:45.748Z",
      "id": "41"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Carmen Von DVM",
      "city": "West Allis",
      "status": true,
      "age": "1949-06-19T15:09:51.830Z",
      "id": "42"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Faye Paucek PhD",
      "city": "Gibsonboro",
      "status": false,
      "age": "1999-02-24T16:59:47.809Z",
      "id": "43"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Marian Grimes",
      "city": "Jacobston",
      "status": false,
      "age": "1949-01-04T17:39:32.025Z",
      "id": "44"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Gordon Lang",
      "city": "Crooksworth",
      "status": true,
      "age": "1947-11-15T10:28:57.114Z",
      "id": "45"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Edmond Bashirian",
      "city": "Port Garett",
      "status": false,
      "age": "1954-02-11T12:53:10.500Z",
      "id": "46"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Karl Jenkins",
      "city": "Charleystead",
      "status": false,
      "age": "1965-07-26T11:52:18.228Z",
      "id": "47"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Barbara Ryan",
      "city": "Port Adelia",
      "status": true,
      "age": "1970-11-12T20:10:24.818Z",
      "id": "48"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Garry Ankunding",
      "city": "Thielmouth",
      "status": true,
      "age": "1946-10-24T13:58:47.072Z",
      "id": "49"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Stacey Mante",
      "city": "Schneidershire",
      "status": true,
      "age": "1998-04-10T14:15:27.069Z",
      "id": "50"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Jeff Casper",
      "city": "Jacobsside",
      "status": false,
      "age": "1978-08-02T16:01:09.753Z",
      "id": "51"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Gerard Thiel IV",
      "city": "Hyattfurt",
      "status": false,
      "age": "1984-05-28T16:45:14.962Z",
      "id": "52"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Lorene Ortiz",
      "city": "Lamontfield",
      "status": true,
      "age": "1971-12-06T12:21:30.053Z",
      "id": "53"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Marianne Keeling",
      "city": "Flagstaff",
      "status": false,
      "age": "2000-08-26T13:45:48.910Z",
      "id": "54"
    },
    {
      "img": "https://loremflickr.com/640/480/food",
      "name": "Elsie Mills MD",
      "city": "Miramar",
      "status": true,
      "age": "1982-05-13T16:49:45.275Z",
      "id": "55"
    },
]


function get (arr)
{
    box.innerHTML=""
    arr.forEach((element) => {
        let tr=document.createElement("tr");
        let userId=document.createElement("td");
        userId.textContent=element.id;




        let tdChek=document.createElement("td");
        let input=document.createElement("input");
        input.type="checkbox";
        input.onclick=() => {
            if(input.checked)
            {
                massiv.push(element.id)
            }
        }
       

        let td1=document.createElement("td");
        let img=document.createElement("img");
        img.src=element.img;
        img.classList.add("img")
        td1.appendChild(img);

        let userName=document.createElement("td")
        userName.textContent=element.name;

        let userCity=document.createElement("td")
        userCity.textContent=element.city;

        let userAge=document.createElement("td")
        userAge.textContent=new Date(element.age).toLocaleDateString();

        let userStatus=document.createElement("td")
          userStatus.innerHTML=element.status ? "Active" : "Inactive"

          let userAction=document.createElement("td")
          let btnEdit=document.createElement("button")
          btnEdit.textContent="Edit"
          btnEdit.onclick=()=>{
            userEdit(element)
          }

          let btnDelet=document.createElement("button")
          btnDelet.textContent="Delete"
          btnDelet.onclick=()=>{
            userDelete(element.id)
          }


          userAction.append(btnEdit,btnDelet)

          tdChek.appendChild(input);
          tr.append(userId,tdChek,td1,userName,userCity,userAge,userStatus,userAction)
        box.appendChild(tr)

      
    });
}

get(data)


//delete

function userDelete (id)
{
    data=data.filter(item=>item.id!=id)
    get(data)
}


//search

let search=document.querySelector(".search")

search.oninput=()=>
{
    let inpSearch=data.filter(item=>item.name.toLowerCase().includes(search.value))
    get(inpSearch)
}


//sort

let btnFilter=document.querySelector(".btnFilter")

btnFilter.onclick=()=>
{
    data.sort((a, b)=>a.name.localeCompare(b.name))
    get(data)
}




//add

let btnAdd=document.querySelector(".btnAdd")
let dialogAdd=document.querySelector(".dialogAdd")
let formAdd=document.querySelector(".formAdd")

btnAdd.onclick=()=>
{
    dialogAdd.showModal()
}

formAdd.onsubmit=(e)=>
{
    e.preventDefault()
    let newUser={
        id:data.length+1,
        img:formAdd["imgA"].value,
        name:formAdd["nameA"].value,
        city:formAdd["cityA"].value,
        status:formAdd["statusA"].value=="Active"?true:false,
        age:formAdd["birthA"].value
    
    }
    data.push(newUser)
    get(data)
    dialogAdd.close()
    formAdd.reset()
}



//edit


let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")


function userEdit (user)
{
    dialogEdit.showModal()
    formEdit["imgE"].value=user.img
    formEdit["nameE"].value=user.name
    formEdit["cityE"].value=user.city
    formEdit["statusE"].value=user.status?"Active":"Inactive"
    formEdit["birthE"].value=new Date(user.age).toISOString().split("T")[0]

    formEdit.onsubmit=(e)=>
    {
        e.preventDefault()
        user.img=formEdit["imgE"].value
        user.name=formEdit["nameE"].value
        user.city=formEdit["cityE"].value
        user.status=formEdit["statusE"].value=="Active"?true:false
        user.age=new Date(formEdit["birthE"].value).toISOString()
        get(data)
        dialogEdit.close()
       
    }
 
}


// filter

let filterStatus=document.querySelector(".filterStatus")

filterStatus.onchange=(e)=>
{
    if(filterStatus.value=="Active")
    {
        let ab =data.filter((item)=>item.status==true)
        get(ab)
        
    }
    else if(filterStatus.value=="Inactive")
        {
            let as =data.filter((item)=>item.status==false)
            get(as)
        }
    else
    {
        get (data)
    }
}




// cheak delet

let deletChek=document.querySelector(".deletChek")

deletChek.onclick=()=>
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















