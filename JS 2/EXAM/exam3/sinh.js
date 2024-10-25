import { deleteUser,postUser,putUser } from "./assin.js"
let box=document.querySelector(".box")
 export let arr=[]

export function get (data) {
    box.innerHTML = ""
    data.forEach((element) => {
        let tr = document.createElement("tr")

         let userCheck=document.createElement("td")
         let inpChek=document.createElement("input")
         inpChek.type="checkbox"

         inpChek.value=element.id
         inpChek.onchange=()=>{

            if(inpChek.checked){
                     arr.push(element.id)
            }
            else(arr=arr.filter(id=>id!==element.id))
       
         }


         let userImg=document.createElement("td")
         let img=document.createElement("img")
         img.src=element.img
         img.classList.add("img")

         let userName=document.createElement("td")
         userName.innerHTML=element.name

         let userCompani=document.createElement("td")
         userCompani.innerHTML=element.company

         let userRole=document.createElement("td")
         userRole.innerHTML=element.role

         let uestVerifild=document.createElement("td")
         uestVerifild.innerHTML=element.verefied?"Yes":"No"

         let userStatus=document.createElement("td")
         userStatus.innerHTML=element.status?"Active":"Inactive"

         let userAction=document.createElement("td")

         let allImg=document.createElement("img")
         allImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADQ0ND29vb5+fmUlJT8/PzBwcHr6+sbGxunp6ciIiKbm5vExMTi4uLIyMja2tqBgYE6OjpNTU1ZWVk1NTV6enrT09Pw8PBISEiwsLDm5uYuLi5iYmIpKSkRERFsbGx1dXWrq6uGhoa5ublKSkqYmJjrxgtIAAADXElEQVR4nO3b63aiMBSGYcADWuupYtVqbel05v4vcUDraEWSvbeypuD7/G6+FSGEnZAGAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqk1ZtE8XAx6rVumzrKUqNbpmaRi2EcTVSRveF01g+/bJJO1L5FV5bjX8ngkLrNUq//le2ok2wOkf3Z87AnahYn4bn+dHJtZ8bvb+epb+niqsjJdFDoaRL7WnUfCo32VtE1nfnsX06deztUKlqV9PSh62oWl/Rkd3lG1s6M5+WpK9t9HBUH2j/98su2fC1vluuYOtN+d6dODZkdd+Tr8nKzyN0sMytp6TIpPixn5rL54Wg58/b04jNV9gR+o55xPiWpumd8Iol8KLbz3HhbZ4IPWeqnItI/1HYKj9SjrJ3yLr5IU8fiSNEdzD0auxKGa/kPHMpTpRduLY98MV2YzNz5vjH2JuzLJrGu48VTcHLVWhv/nx+l0l/4pEl9FUWmmsjNsS6catqJZxvxo70nmW2Es8zBv1etZozmtqJxqhmjO/76vrtVRh7GaVmFV+rCy6bIU8oU+Ysb0Sv71GrfTnnrMwPBcmqkTg19k03bWx4V7B8oRxFb5sP/C5/1qb66V1g+nEqMFzt88v7AliF16xkaqrn5S74gUk55x4ZOihLiyF3ZWG7FrrJRzzOHhk7+8v8C91xjuhUr23ASDFNTat8ZaRmkYdgKYlO70LONpJ+fd1wrRdutCGPbvffWNabH0F3XGC/aY5DaGnq2kAzvipyrlDAOttQ4un3vrt+21HdHpHCJfu4p0NcJO8/uX2i8bokj0jgsBkFho1bGdbUzmmXciZUjUl3n7r3ZpnXvck614DyaOyI9W52l7uAeNv85bP5cmtoa1uh92Pyapvl1afPXFhWtDw1bI1WtD+9gjd/8fZqK9tpSfWpVe20/Z7/U9y3YvF9anz1v9ZRxqHOb/92iom9Pf3SpVX57qtH3Q1W9e/L9sEbfgDVX7duX8/p8x5ev2F++txQ/NHU9i3EH52nu4EzUHZxrq+psYvfnnE0MPOdLzeeEf8750uAOzgjnqjrnXUj9P+e8d5p+Vn+vsv+3WGSp65v+v8U6/3+LG3cUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlfsLazk69sul3ZcAAAAASUVORK5CYII="


         
      
         


         allImg.classList.add("illimg")

         allImg.onclick=()=>{
            dialogs.showModal()
            userDelete.onclick=()=>{
                deleteUser(element.id)
                dialogs.close()
              

                

        
             }
             userEdit.onclick=()=>{
                
                editUser(element)
                dialogs.close()
            }
         }

      
       



         userAction.append(allImg)
         userImg.append(img)
         userCheck.appendChild(inpChek)
         tr.append(userCheck,userImg,userName,userCompani,userRole,uestVerifild,userStatus,userAction)
    
         box.appendChild(tr)


        

        
       
    })
}




// dialog edit and delete
let  dialogs=document.querySelector(".dialogs")
let userEdit=document.querySelector(".userEdit")
let userDelete=document.querySelector(".userDelete")






//add

let btnAdd=document.querySelector(".btnAdd")
let dialgAdd=document.querySelector(".dialgAdd")
let formADD=document.querySelector(".formADD")

btnAdd.onclick=()=>{
    dialgAdd.showModal()
}

formADD.onsubmit=(e)=>{
    e.preventDefault()
    let newUser={
        "img": formADD["inpImg"].value,
        "name": formADD["inpName"].value,
        "company": formADD["inpComoany"].value,
        role:formADD["inpRole"].value,
        verefied:formADD["selectAdd"].value=="Yes"?true:false,
        "status": formADD["selectAdddd"].value=="Active"?true:false,
       
    }
    postUser(newUser)
    dialgAdd.close()

}



//edit
 let dialgEdit=document.querySelector(".dialgEdit")
 let formEdit=document.querySelector(".formEdit")

 function editUser(user)
 {
    dialgEdit.showModal()
   
    formEdit["inpImgEdit"].value=user.img
    formEdit["inpNameEdit"].value=user.name
    formEdit["inpComoanyEdit"].value=user.company
    formEdit["inpRoleEdit"].value=user.role
    formEdit["selectEdit"].value=user.status?"Active":"Inactive"
    formEdit["selectEditdd"].value=user.verefied?"Yes":"No"

    formEdit.onsubmit=(e)=>{
        e.preventDefault()
        let newUser={
           
            "img": formEdit["inpImgEdit"].value,
            "name": formEdit["inpNameEdit"].value,
            "company": formEdit["inpComoanyEdit"].value,
            role:formEdit["inpRoleEdit"].value,
            verefied:formEdit["selectEditdd"].value=="Yes"?true:false,
            "status": formEdit["selectEdit"].value=="Active"?true:false,
           
        }
        putUser(newUser,user.id)
        dialgEdit.close()
    }

 }




