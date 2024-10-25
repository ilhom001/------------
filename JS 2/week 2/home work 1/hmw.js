let body=document.querySelector('.body')
let tbody=document.querySelector('.tbody')
let api='https://66e583cf5cc7f9b6273d908c.mockapi.io/user'
// let apiData=[]
let data=[]

async function getApi()
{
   try{
    const response=await fetch(api)
    const data=await response.json()
    get(data);
   }catch(error)
   {
    console.error(error)
   }
}


function get(data){
    data.forEach((el) => {
        let all=document.createElement('tr')
        all.className='all'

        let namestd=document.createElement('td')

        let img=document.createElement('img')
        img.innerHTML=el.image

        let userName=document.createElement('p')
        userName.innerHTML=el.fullName

        let email=document.createElement('p')
        email.innerHTML=el.email

        let city=document.createElement('td')
        city.innerHTML=el.city

        let status =document.createElement('td')
        status.innerHTML=el.status?'Active':'Inactive'
        status.className='statusInact'
        if(el.status==true){status.className='statusAct'}

        let phone=document.createElement('td')
        phone.innerHTML=el.phone

        let actions=document.createElement('td')
        actions.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>'
        actions.className='actions'
        actions.onclick=()=>{
            actModal.showModal()
        }

         
        let editBtn=document.querySelector('.editBtn')
        editBtn.onclick=()=>{
            
        }


        let deleteBtn=document.querySelector('.deleteBtn')
        deleteBtn.onclick=()=>{
            udalit(el.id)

        }



        let profilBtn=document.querySelector('.profilBtn')
        profilBtn.onclick=()=>{
            profileModal.showModal()
             
        }
        
        
        
        
        namestd.append(img,userName,email)
        all.append(namestd,city,status,phone,actions)
        tbody.append(all)     
    });
} 
getApi()


async function postUser(user) {
    try{
        await fetch(api,{
            method:'POST',
            headers:{
                Accept:'aplication/json',
                'Content-Type':"aplication/json"
            },
            body:JSON.stringify(user)
        });getApi()
    }catch(error)
    {
        console(error);
    }
}


let addModal=document.querySelector('.addModal')
let newBtn=document.querySelector('.newBtn')
let addImage=document.querySelector('.addImage')
let addFullName=document.querySelector('.addFullName')
let addEmail=document.querySelector('.addEmail')
let addPhone=document.querySelector('.addPhone')
let saveBtn=document.querySelector('.saveBtn')
let cancelBtn=document.querySelector('.cancelBtn')
let selectStatus=document.querySelector('.selectStatus')


let profileModal=document.querySelector('.profileModal')
let profileImg=document.querySelector('.profileImg')
let profileName=document.querySelector('.profileName')
let profileEmail=document.querySelector('.profileEmail')

saveBtn.onclick=()=>{
    let newDataUser={
        image:addImage.value,
        fullName:addFullName.value,
        email:addEmail.value,
        status:selectStatus.value=='Active'?true:false,
        phone:addPhone.value
    }
    postUser(newDataUser)
    addModal.close()
}


let actModal=document.querySelector('.actModal')
let x=document.querySelector('.x')
x.onclick=()=>{
    actModal.close()
}


let firstDivsvg=document.querySelector('.firstDivsvg')
firstDivsvg.onclick=()=>{
    body.className="body"
} 


let secondDivsvg=document.querySelector('.secondDivsvg')
secondDivsvg.onclick=()=>{
    body.className="darkBody"
} 



newBtn.onclick=()=>{
    addModal.showModal()
}

cancelBtn.onclick=()=>{
    addModal.close()
}

let addX=document.querySelector('.addX')
addX.onclick=()=>{
    addModal.close()
}


// Delete




async function ilh(id) {
    try
    {
        const respons=await fetch(`${api}/${id}`,{method:"DELETE"})
    }
    catch {console.error(error)}
    
}



async function search(query) {
    const url = `https://example.com/search?q=${encodeURIComponent(query)}`;  // Подставьте реальный URL

    try {
        const response = await fetch(url);  // Асинхронный запрос
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();  // Асинхронное ожидание и парсинг JSON
        return data;  // Возвращаем результат
    } catch (error) {
        console.error('Search failed:', error);
    }
}

// Вызов функции
search('example query').then(result => console.log(result));
