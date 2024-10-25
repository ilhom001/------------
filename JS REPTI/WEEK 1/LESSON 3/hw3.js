let box = document.querySelector(".box")

let data = [
    {
        id: 1,
        name: "John",
        status: false,
    },
    {
        id: 2,
        name: "John",
        status: false,
    },
    {
        id: 3,
        name: "John",
        status: false,
    },
]


function get(arr) {
    box.innerHTML = ""
    arr.forEach((element) => {

        let tr = document.createElement("tr")

        let tdId = document.createElement("td")
        tdId.innerHTML = element.id

        let userName = document.createElement("td")
        userName.innerHTML = element.name

        let userStatus = document.createElement("td")
        userStatus.innerHTML = element.status ? "Active" : "Inective"


        let userEdit = document.createElement("td")
        let imgEdit = document.createElement("img")
        imgEdit.src = "./edit.png"

        imgEdit.onclick = () => {
            editUser(element)
        }

        let userChek = document.createElement("input")
        userChek.type = "checkbox"
        userChek.checked = element.status

        userChek.onclick = () => {
            element.status = !element.status
            get(data)
        }

        let userDelete = document.createElement("img")
        userDelete.src = "./delete.png"
        userDelete.onclick = () => {
            deleteUser(element.id)
        }
        userDelete.classList.add("userDelete")
        let userRemuve = document.createElement("td")

        userEdit.appendChild(imgEdit)
        userRemuve.append(userChek, userDelete)
        tr.append(tdId, userName, userStatus, userEdit, userRemuve)
        box.appendChild(tr)


    });
}

get(data)

//delet

function deleteUser(id) {
    data = data.filter(item => item.id != id)
    get(data)
}


let addModal = document.querySelector(".addModal")

let dialAdd = document.querySelector(".dialAdd")
let inpName = document.querySelector(".inpName")
let save = document.querySelector(".save")

addModal.onclick = () => {
    dialAdd.showModal()
}

save.onclick = () => {
    let newUser = {
        id: data.length + 1,
        name: inpName.value,
        status: false
    }
    data.push(newUser)
    get(data)
    dialAdd.close()
}



//edit


let dialAddE = document.querySelector(".dialAddE")
let inpNameE = document.querySelector(".inpNameE")
let saveE = document.querySelector(".saveE")


function editUser(user) {
    dialAddE.showModal()
    inpNameE.value = user.name


    saveE.onclick = () => {
        user.name = inpNameE.value
        get(data)
        dialAddE.close()
    }
}


//search 

let search = document.querySelector(".search")
search.oninput = () => {
    let poisc = search.value.toLowerCase()
    data = data.filter(item => item.name.toLowerCase().includes(poisc))
    get(data)
}




