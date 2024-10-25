import { deleteUser } from "./assin.js";

let box=document.querySelector(".box");
let continer=document.querySelector(".continer")
let table=document.querySelector(".table")
continer.className="close";

export function get (data) {
    box.innerHTML=""
    data.forEach((element) => {
        let tr=document.createElement("tr");
        tr.classList.add("tr")

        let userTd=document.createElement("td");

        let divs=document.createElement("div");

        let userJob=document.createElement("h3");
        userJob.innerHTML=element.job
        let userDate=document.createElement("p");
        userDate.innerHTML=new Date(element.Formdata).toLocaleDateString()
        
        let userDuration=document.createElement("td");
        userDuration.innerHTML=element.dutation

        let userStudents=document.createElement("td");
        userStudents.innerHTML=element.students

        let userStatus=document.createElement("td");
        userStatus.innerHTML=element.status?   "Started" : "Stopped";

        let userSity=document.createElement("td");
        userSity.innerHTML=element.sity

        let userAction=document.createElement("td");
        let imgEdit=document.createElement("img");
        imgEdit.src="./edits.png"
        imgEdit.classList.add("imgs")

        let imgDelete=document.createElement("img");
        imgDelete.src="./edit.png"
        imgDelete.classList.add("imgs")
        imgDelete.onclick=()=>{
            deleteUser(element.id);
        }
       

         
 
        userAction.append(imgEdit,imgDelete)
        divs.append(userJob,userDate)
        userTd.append(divs)
      
        tr.append(userTd,userDuration,userStudents,userSity,userStatus,userAction)
        box.append(tr)
       
    });





 data.forEach((elem)=>{
    let divs=document.createElement("div");
    divs.classList.add("divs")

    let divs1=document.createElement("div");

    let userJob=document.createElement("h4");
    userJob.innerHTML=elem.job
    userJob.classList.add("userJob")


    let userImg=document.createElement("img");

    let divs2=document.createElement("div");
    divs2.classList.add("divs2");

    let month=[" Jan", "Feb", "Mar", "Apr", "May", "June","July","Aug","Sept","Oct","Nov","Dec"]
    let userDate=document.createElement("p");
    userDate.innerHTML=month[new Date(elem.Formdata).getMonth()-1]+","+ new Date (elem.Formdata).getDate()+","+ new Date (elem.Formdata).getFullYear()




    let  userWeek=document.createElement("h4")
    userWeek.innerHTML="Week: " + new Date(elem.Formdata).toLocaleDateString("en-US", { weekday: "long" });
    userWeek.classList.add("userWeek");

    let divs3=document.createElement("div")
    divs3.classList.add("divs3")

    let userDiorection=document.createElement("p")
    userDiorection.innerHTML= elem.dutation

    let userCiti=document.createElement("p")
    userCiti.innerHTML=elem.sity


    


    let divs4=document.createElement("div")
    divs4.classList.add("divs4")

    let btnZ=document.createElement("button")
    btnZ.innerHTML="Journal"
    

    let dvvv=document.createElement("div")
    let editImg=document.createElement("img")
    editImg.src="./edits.png"
    editImg.classList.add("imgs")
    let deleteImg=document.createElement("img")
    deleteImg.src="./edit.png"
    deleteImg.classList.add("imgs")

   
    divs1.append(userJob ,userImg)
    divs2.append(userDate,userSecongData)
    divs3.append(userDiorection,userCiti)
    divs4.append(btnZ,dvvv)
    dvvv.append(editImg,deleteImg)
    divs.append(divs1,divs2,userWeek,divs3,divs4)
    continer.append(divs)
})
}

let iconTable=document.querySelector(".iconTable")
let iconDivs=document.querySelector(".iconDivs")




iconDivs.onclick=()=>{
    continer.className='continer'
    table.className='close'
}
iconTable.onclick=()=>{
    continer.className='close'
    table.className='table'
}




