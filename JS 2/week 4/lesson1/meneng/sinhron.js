


let box=document.querySelector(".box");

export function get (data)
{
    box.innerHTML=""
    data=data.forEach((element) => {
        let tr=document.createElement("tr");
        let userName=document.createElement("td");
        let div=document.createElement("div");
        div.className="boxImg";
        let img=document.createElement("img");
        img.classList.add("img");
        img.src=element.img;
        let usersN=document.createElement("td");
        usersN.innerHTML=element.name



        let userEmail=document.createElement("td");
        userEmail.innerHTML=element.email

        let userLocation=document.createElement("td");
        userLocation.innerHTML=element.location

        let userPhone=document.createElement("td");
        userPhone.innerHTML=element.Phone

        let userResponse=document.createElement("td");
         userResponse.innerHTML=element.respons

         div.append(img,usersN)
         userName.append(div)
         tr.append(userName,userEmail,userLocation,userPhone,userResponse,)
         box.append(tr)
         

        
    });
}