{/* <div>
<img class="imgg" src="./images 1.jpeg" alt="">
<h1 class="h1"> hghghgggfg</h1>
<div class="box1">
     <img style="width: 30px;" src="./png-transparent-trash-can-delete-icon.png" alt="">
     <img style="width: 30px;"  src="./png-clipart-paper-computer-icons-pen-pen-angle-pencil.png" alt="">
     <h2>69.19 $</h2>
     <img style="width: 30px;"  src="./images.jpeg" alt="">
     <img style="width: 30px;"  src="./5284897  !!!.png" alt="">
</div>
</div> */}


let box = document.querySelector('.box');

let addBtn = document.querySelector('.addBtn');
let addModal = document.querySelector('.addModal')
let add = document.querySelector('.add');
let imgInput = document.querySelector('.imgInput');
let nameInput = document.querySelector('.nameInput')
let priceInput = document.querySelector('.priceInput')

let addBtnE = document.querySelector('.addBtnE');
let addModalE = document.querySelector('.addModalE')
let addE = document.querySelector('.addE')
let imgInputE = document.querySelector('.imgInputE');
let nameInputE = document.querySelector('.nameInputE')
let priceInputE = document.querySelector('.priceInputE')

let addE1=document.querySelector(".addE1")
let h11=document.querySelector(".h11")
let p11=document.querySelector(".p11")
let p21=document.querySelector(".p21")
let h21=document.querySelector(".h21")
let h31=document.querySelector(".h31")
let p31=document.querySelector(".p31")



addBtn.onclick = () => {
    addModal.showModal();
    imgInput.value = '',
    nameInput.value = '',
    priceInput.value = ''
    add.onclick = () => {
        let newPro = {
            id: 12,
            img: imgInput.value,
            name: nameInput.value,
            price: priceInput.value
        }
        data.push(newPro);
        get();
        addModal.close();
    }
}


let data = [
    {
        id: 1,
        img: '27685.970 2.jpg',
        name: "50.40 $",
        price: "mebeli USA"
    },
    {
        id: 2,
        img: '27685.970 2.jpg',
        name: "80.10 $",
        price: "mebeli Bobogi"
    },
    {
        id: 3,
        img: '27685.970 2.jpg',
         name: "100.50 $",
        price: "mebeli Turki"
    }
]

function deletePro(id) {
   let newData =  data.filter((el) => {
        if(el.id != id) {
            return el;
        }
        console.log(id);
        
    })
    data = newData
    console.log(newData);
    
    get();
}

function get() {
    box.innerHTML = '';
    data.forEach((el) => {

        let part = document.createElement('div');
        let part1 = document.createElement('div');
        let part2 = document.createElement('div');
        let part3 = document.createElement('div');
        let part4 = document.createElement('div');
        let part5 = document.createElement('div');
        part5.classList.add("div5")
        part4.classList.add("div4")
        part3.classList.add("div3")
        part2.classList.add("div2")
        part1.classList.add("div1")
        part.classList.add("div")


       
        

        let img = document.createElement('img');
        img.src = el.img;
        img.classList.add('img')

        let name = document.createElement('h2');
        name.innerHTML = el.name;
        name.classList.add("h2")

        let price = document.createElement('p');
        part.innerHTML = el.price;

        imgDel = document.createElement('img');
        imgDel.src = 'png-transparent-trash-can-delete-icon.png';
        imgDel.classList.add('id')

        let btnDel = document.createElement('button');
        btnDel.appendChild(imgDel)
        btnDel.classList.add('btnDel')
        btnDel.onclick = () => {
            deletePro(el.id);
        }
        let butimg=document.createElement('button')
         let img1=document.createElement('img')
         img1.src="png-clipart-paper-computer-icons-pen-pen-angle-pencil.png"
         butimg.appendChild(img1)
         img1.classList.add('id1')
         butimg.classList.add('bimg')

          img1.onclick=()=>{
            addModalE.showModal()
            addE.onclick = () => {
                el.price=priceInputE.value
                el.name=nameInputE.value
                get();
                addModalE.close()

            }


          }

         let butimg1=document.createElement('button')
        
         let img2=document.createElement('img')
         butimg1.appendChild(img2)
         img2.src="images.jpeg"
         img2.classList.add("id2")

         let butimg2=document.createElement('button')
         let img3=document.createElement('img')
         butimg2.appendChild(img3)
         img3.src="5284897  !!!.png"
         img3.classList.add("id3")

         img3.onclick = () => {
            p11.innerHTML=el.price
            p21.innerHTML=el.name
            addE1.showModal()
         }
         addE1.classList.add("addE1")

         let h2=document.createElement("h2")
         h2.innerHTML="56.20$"
         part5.append(butimg1,butimg2)
         part4.append(name,price)
         part3.append(btnDel,butimg)
         part2.append(part3,part4,part5)
        part1.appendChild(img)
        part.append(part1,part2);
        box.appendChild(part)

    })
}

get()