


let arr=JSON.parse(localStorage.getItem("buy")) || [];

if(!Array.isArray(arr)){
    arr=[];
}


let box=document.querySelector(".box");
let spanShochic= document.querySelector(".spanShochic")   
let snt=1;
export function get (data) {
    box.innerHTML = " ";
    data.forEach((element) => {

        let boxElement = document.createElement("div");

        boxElement.classList.add("boxElement");

        let div = document.createElement("div");
        div.classList.add("div");
       
        let img = document.createElement("img");
        img.src = element.image;
        img.classList.add("img");
      
       

        let userName = document.createElement("p");
        userName.innerHTML = element.name;
        userName.classList.add("userName");

        let userPrice = document.createElement("h1");
        userPrice.innerHTML = "$" + element.price;
        userPrice.classList.add("userPrice");


        let btnIcon = document.createElement("div");
        btnIcon.classList.add("btnIcon");

        let iconLoop = document.createElement("span");
        iconLoop.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" /></svg>`
        iconLoop.classList.add("iconLoop");

         iconLoop.onclick=() =>
        {
         window.location.href="http://127.0.0.1:5500/third/third.html" 
         localStorage.setItem("iconLoop", JSON.stringify(element))  
        }


        let iconCarzinca = document.createElement("span");
        iconCarzinca.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" /></svg>`
        
        iconCarzinca.classList.add("iconCarzinca");



        iconCarzinca.onclick = () =>
            {
                dialogInfo.showModal()
            }




        btnIcon.append(iconLoop, iconCarzinca);
         div.append (img, userName, userPrice ,btnIcon);
        boxElement.append(div)
       
        box.append(boxElement);

        iconCarzinca.onclick = () =>
            {
                if(!arr.some(item=>item.id===element.id)){
                    localStorage.setItem("buy", JSON.stringify(arr))
                arr.push(element)
                
                
                }
                
            }
    });
    
 
    
}


let DialogKarzina=document.querySelector(".DialogKarzina")







 


  
   
   

      
   
   








let spamsCarxinca=document.querySelector(".spamsCarxinca");
 spamsCarxinca.onclick = () => {
    DialogKarzina.showModal();
}

    
