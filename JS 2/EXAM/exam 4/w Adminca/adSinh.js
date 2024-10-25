import { postUser, putUser, userDelet } from "./adAssin.js"
let all = document.querySelector('.all')
let tbody = document.querySelector('.tbody')
let table = document.querySelector('.table')

export function get(data) {

    tbody.innerHTML = ""
    data.forEach((el) => {

        let div = document.createElement('div')
        div.className = 'boxes'
        localStorage.setItem('Product', JSON.stringify(div))

        let img = document.createElement('img')
        img.src = el.img

        let name = document.createElement('p')
        name.innerHTML = el.name
        name.classList.add("Names")

        let price = document.createElement('h4')
        price.innerHTML = '$' + el.price





        let chekbox = document.createElement('input')
        chekbox.type = 'checkbox'








        div.append(img, name, chekbox, price)
        all.append(div)
    })



    data.forEach((element) => {

        let straka = document.createElement('tr')

        let imgTd = document.createElement('td')

        let img = document.createElement('img')
        img.src = element.image
        img.className = 'imgInTable'

        let name = document.createElement('td')
        name.innerHTML = element.name

        let price = document.createElement('td')
        price.innerHTML = "$" + element.price

        let company = document.createElement('td')
        company.innerHTML = element.compani

        let status = document.createElement('td')
        status.innerHTML = element.status ? 'PROSSESED' : 'ON HOLD'

        let data = document.createElement('td')
        data.innerHTML = new Date(element.data).toLocaleDateString()





        let checkDelete = document.createElement('td')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        let btnEdits = document.createElement('button')
        btnEdits.innerHTML = 'Edit'
        btnEdits.className = 'btnEdits'

        btnEdits.onclick = () => {
            EditModal.showModal()


            editApp(element)
        }


        let imgs = document.createElement('img')
        imgs.src = "./images  ыы.png"
        imgs.classList.add("imgs")

        imgs.onclick = () => {
            userDelet(element.id)
        }


        checkDelete.append(imgs, btnEdits)
        imgTd.append(img)
        straka.append(imgTd, name, price, company, status, data, checkDelete)
        tbody.append(straka)
    })
}


let svgDiv = document.querySelector('.svgDiv')
svgDiv.onclick = () => {
    all.className = 'allshow'
    table.className = 'tableclose'
}

let svg = document.querySelector('.svg')
svg.onclick = () => {
    table.className = 'table'
    all.className = 'all'
}


let AddBtn = document.querySelector('.AddBtn')
let AddModal = document.querySelector('.AddModal')
let xBtn = document.querySelector('.xBtn')
let Cancel = document.querySelector('.Cancel')

let formADD = document.querySelector(".formADD")




xBtn.onclick = () => {
    AddModal.close()
}

AddBtn.onclick = () => {
    AddModal.showModal()

}

formADD.onsubmit = (event) => {
    event.preventDefault()
    let newUser = {
        img: formADD["inpImg"].value,
        name: formADD["inpName"].value,
        price: formADD["inpPrice"].value,
        company: formADD["inpCampany"].value,
        status: formADD["inpData"].value,

    }

    postUser(newUser)

    AddModal.close()
    formADD.reset()
}



//edit


let EditModal = document.querySelector(".EditModal")
let formEdit = document.querySelector(".formEdit")


function editApp(user) {

    EditModal.showModal()

    formEdit["inpName"].value = user.name
    formEdit["inpPrice"].value = user.price
    formEdit["inpCampany"].value = user.compani
    formEdit["inpStatus"].value = user.festured

    formEdit.onsubmit = (event) => {
        event.preventDefault()
        let updatedUser = {
            name: formEdit["inpName"].value,
            price: formEdit["inpPrice"].value,
            compani: formEdit["inpCampany"].value,
            festured: formEdit["inpStatus"].value,
        }
        putUser(updatedUser, user.id)
        EditModal.close()
        formEdit.reset()


    }
}






