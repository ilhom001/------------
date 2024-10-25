
let box=document.querySelector(".box")


export function get (data){
    box.innerHTML=""
    data = data.forEach((element) => {
        let  tr=document.createElement("tr")

        let userName=document.createElement("td")
        userName.innerHTML = element.login

        let tdImg=document.createElement("td")
        let userAvatar=document.createElement("img")
        userAvatar.src = element.avatar_url


        let iconTd=document.createElement("td")
        let userIcon=document.createElement("img")
        userIcon.src="./users.jpeg"
        userIcon.style.width="20px"
        userIcon.onclick=()=>
        {
            userInfo(element)
         
        
        pOversave.onclick=()=>{
               secondDialof(element)
        }
    }

        let userRspastori=document.createElement("td")
        let imgRspastori=document.createElement("img")
        imgRspastori.src="./repas.png"
        imgRspastori.style.width="20px"


        // getLocation(element.url)
        // let userLocation=document.createElement("td")
        // userLocation.innerHTML = userLocation()
    



         userRspastori.append(imgRspastori)
         iconTd.append(userIcon)
        tdImg.append(userAvatar)
        tr.append(userName,tdImg,iconTd,userRspastori)
        box.appendChild(tr)
        
    });
}


// async function getLocation(api) {
//     try {
//         let {data} = await axios.get(api)
//         userLocation(data)
//     } catch (error) {
//         console.error(error);
        
//     }
    
// }
// function userLocation(data) {
//     return data.location
// }

// dialog git



//info
let gitHub=document.querySelector(".gitHub")
let xClose=document.querySelector(".xClose")
let imgInfo=document.querySelector(".imgInfo")
let nameUser=document.querySelector(".nameUser")
xClose.onclick=() =>{
    gitHub.close()
}


async function userInfo(user){
    gitHub.showModal()
    imgInfo.src=user.avatar
    nameUser.innerHTML=user.login

   
    
 
    
 
}

// let pOversave=document.querySelector(".pOversave")
// let dialogOver=document.querySelector(".dialogOver")
// let h1OverXX=document.querySelector(".h1OverXX")
// let nameSpans=document.querySelector(".nameSpans")
// pOversave.onclick=()=>{
//     dialogOver.showModal();
// }
// h1OverXX.onclick=()=>
//     {
//         dialogOver.close();
//     }


//     async function secondDialof(users){
      
//         nameSpans.innerHTML=users.logit
//     }









