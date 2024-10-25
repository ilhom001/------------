let box = document.querySelector(".box");
let api = "https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo";

async function getData() {
    try {
        let response = await fetch(api);
        let data = await response.json();
        get(data);
    } catch (error) {
        console.error(error);
    }
}

function get(data) {
    box.innerHTML=""
    data.forEach((element) => {
        let continer = document.createElement("div");
        continer.classList.add("continer");
        let divs = document.createElement("div");
        divs.classList.add("divs");

        let img = document.createElement("img");
        img.src = element.img;
        img.classList.add("img");

        let userName = document.createElement("h2");
        userName.innerHTML = element.name;

        let userPrice = document.createElement("p");
        userPrice.innerHTML = "$"+element.prics;
        userPrice.classList.add("userPrice");

        let contCrad = document.createElement("div");
        contCrad.classList.add("contCrad");

        let btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Edit";
        btnEdit.classList.add("btnEdit");

        let btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Delete";
        btnDelete.classList.add("btnDelete");
        btnDelete.onclick = () =>
        {
            userDelete(element.id)
        }

        divs.append(img, userName);
        contCrad.append(btnEdit, userPrice, btnDelete);
        continer.append(divs, contCrad);

        // Append the container to the main box
        box.append(continer);
    });
}

getData();


//delete

async function userDelete(id) {
    try {
        await fetch(`${api}/${id}`, { method: 'DELETE',  });
           
      
        getData();
    } catch (error) {
        console.error(error);
    }
    
}

///search
let search=document.querySelector(".search")
search.oninput=async()=>{
    
    let response=await fetch(api)
    let data=await response.json()
    let filteredData=data.filter(item=>item.name.toLowerCase().includes(search.value))
    get(filteredData)

}



//add

let dialogAdd=document.querySelector(".dialogAdd")
let formAdd=document.querySelector(".formAdd")
let addModal=document.querySelector(".addModal")


addModal.onclick=()=>
{
    dialogAdd.showModal()
formAdd.onsubmit=(ev)=>{
    ev.preventDefault()
    let newItem={
     name:formAdd["inpName"].value,
     prics:formAdd["inpPrice"].value,
     img:formAdd["inpImg"].value,


    }
    
    addItem(newItem)
    dialogAdd.close()
     
}
}


async function addItem(item) {
    try {
        let response = await fetch(api,{
            method: 'POST',
            headers: {
                Accept:  'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
    } catch (error) {
        console.error(error);
        
    }
}


    







