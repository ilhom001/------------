let box = document.querySelector(".box");
let masiv = []
let data = [
    {
        id: 3,
        // image: "image",
        name: "samsung",
        email: "emailrfefgrf@gmail.com",
        catigories: "catigfddvories",
        price: 1120,
        QTY: 34,
        status: false,

    },
    {
        id: 5,
        // image: "image",
        name: "samsung",
        email: "emailrfefgrf@gmail.com",
        catigories: "catidfbdgories",
        price: 1033,
        QTY: 34,
        status: false,

    },
    {
        id: 11,
        // image: "image",
        name: "samsung",
        email: "emailrfefgrf@gmail.com",
        catigories: "catigodfdries",
        price: 2300,
        QTY: 34,
        status: false,

    },
    {
        id: 14,
        // image: "image",
        name: "samsung",
        email: "emailrfefgrf@gmail.com",
        catigories: "catigorgries",
        price: 3110,
        QTY: 34,
        status: false,

    },
    {
        id: 2,
        // image: "image",
        name: "samsung",
        email: "emailrfefgrf@gmail.com",
        catigories: "catigoregries",
        price: 1200,
        QTY: 34,
        status: false,

    },
    {
        id: 1,
        // image: "image",
        name: "samsung",
        email: "emailrfefgrf@gmail.com",
        catigories: "catigorgrgries",
        price: 2000,
        QTY: 34,
        status: false,

    },
]




function get(arr) {
    box.innerHTML = ""
    arr.forEach((element) => {
        let row = document.createElement("tr");
        row.classList.add("row");

        let ids = document.createElement("td");
        ids.innerHTML = element.id

        let cheaks = document.createElement("input");
        cheaks.type = "checkbox";
        cheaks.value = element.id
        cheaks.onchange = () => {
            if (cheaks.checked) {
                masiv.push(element.id)
            }
            else {
                masiv = masiv.filter(id => id != element.id)
            }

        }


        let control = document.createElement("div");
        control.classList.add("control");

        let img = document.createElement("img");
        // img.src = element.image;
        img.classList.add("img")

        let divs = document.createElement("div")
        divs.classList.add("divs")
        divs.innerHTML = `<h1>${element.name}</h1> <p>${element.email}</p>`

        let userCatig = document.createElement("td")
        userCatig.innerHTML = element.catigories

        let userPrice = document.createElement("td")
        userPrice.innerHTML = element.price

        let userQTY = document.createElement("td")
        userQTY.innerHTML = element.QTY

        let userStatus = document.createElement("td")
        userStatus.innerHTML = element.status ? "In stock" : "Out of stock"

        let userAction = document.createElement("td")
        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            userEdit(element)
        }

        let btnDelete = document.createElement("button")
        btnDelete.innerHTML = "Delete"
        btnDelete.onclick = () => {
            userDelet(element.id)
        }

        let btnInfo = document.createElement("button")
        btnInfo.innerHTML = "Info"
        btnInfo.onclick = () => {
            dialogInfo.showModal()
        }


        userAction.append(btnEdit, btnDelete, btnInfo)
        control.append(img, divs)
        row.append(cheaks, ids, control, userCatig, userPrice, userQTY, userStatus, userAction)
        box.append(row)

    });
}
get(data)


let search = document.querySelector(".search");
let originalData = [...data];

search.oninput = () => {
    let poisc = search.value.toLowerCase();
    let filteredData = originalData.filter(item => item.name.toLowerCase().includes(poisc));
    get(filteredData);
}


//add

let addModal = document.querySelector(".addModal")

let dialogAdd = document.querySelector(".dialogAdd")
let inpImg = document.querySelector(".inpImg")
let inpName = document.querySelector(".inpName")

let inpEmail = document.querySelector(".inpEmail")

let inpCatigor = document.querySelector(".inpCatigor")

let inpPrice = document.querySelector(".inpPrice")

let inpQTY = document.querySelector(".inpQTY")

let sleAdd = document.querySelector(".sleAdd")

let btnAdd = document.querySelector(".save")

addModal.onclick = () => {
    dialogAdd.showModal()
}
btnAdd.onclick = () => {
    let newUser = {
        id: data.length + 1,
        // image: inpImg.value,
        name: inpName.value,
        email: inpEmail.value,
        catigories: inpCatigor.value,
        price: inpPrice.value,
        QTY: inpQTY.value,
        status: sleAdd.value == "In stock" ? true : false,

    }
    data.push(newUser)

    get(data)
    dialogAdd.close()
    // inpImg.value = ""
    inpName.value = ""
    inpEmail.value = ""
    inpCatigor.value = ""
    inpPrice.value = ""
    inpQTY.value = ""


}



//delet

function userDelet(id) {
    data = data.filter(item => item.id != id)
    get(data)
}




//edit



let dialogEdit = document.querySelector(".dialogEdit")

let inpEditImg = document.querySelector(".inpImgEdit")

let inpEditName = document.querySelector(".inpNameEdit")

let inpEditEmail = document.querySelector(".inpEmailEdit")

let inpEditCatigor = document.querySelector(".inpCatigorEdit")

let inpEditPrice = document.querySelector(".inpPriceEdit")
let inpCatigorEdit = document.querySelector(".inpCatigorEdit")
let inpQTYEdit = document.querySelector(".inpQTYEdit")

let sleEdit = document.querySelector(".sleEdit")

let saveEdit = document.querySelector(".saveEdit")



function userEdit(user) {
    dialogEdit.showModal()
    inpEditImg.value = user.image
    inpEditName.value = user.name
    inpEditEmail.value = user.email
    inpEditCatigor.value = user.catigories
    inpEditPrice.value = user.price
    inpQTYEdit.value = user.QTY
    sleEdit.value = user.status ? "In stock" : "Out of stock"

    saveEdit.onclick = () => {
        user.image = inpEditImg.value
        user.name = inpEditName.value
        user.email = inpEditEmail.value
        user.catigories = inpEditCatigor.value
        user.price = inpEditPrice.value
        user.QTY = inpQTYEdit.value
        user.status = sleEdit.value == "In stock" ? true : false
        get(data)
        dialogEdit.close()


    }

}



//info

let dialogInfo = document.querySelector(".dialogInfo")
let imgInfo = document.querySelector(".imgInfo")
let hh1 = document.querySelector(".hh1")
let nameInfo = document.querySelector(".nameInfo")
let infoZvezda = document.querySelector(".infoZvezda")

let pcat = document.querySelector(".pcat")
let pPrice = document.querySelector(".pPrice")
let pQTY = document.querySelector(".pQTY")

let hEL = document.querySelector(".hEL")
let hPrice = document.querySelector(".hPrice")
let aa = document.querySelector(".aa")

let Closse = document.querySelector(".Closse")

Closse.onclick = () => {
    dialogInfo.close()
}


//filter


let selectFilter = document.querySelector(".selectFilter")

selectFilter.onchange = () => {
    if (selectFilter.value === "true") {
        let stock = data.filter((el) => el.status == true);
        get(stock);
    } 
    else if (selectFilter.value === "false") {
        let outStock = data.filter((el) => el.status == false);
        get(outStock);
    } 
    else {
        get(data);
    }
};


let deleteChek = document.querySelector(".deleteChek")

deleteChek.onclick = () => {
    deletMor()
}


function deletMor() {
    data = data.filter(item => !masiv.includes(item.id))
    get(data)

}
















