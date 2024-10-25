let box = document.querySelector(".box")


let data=[
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "ohm",
      "email": "Yvonne1@gmail.com",
      "status": false,
      "date": "1975-08-24T12:35:23.209Z",
      "jobs": "Customer Security Consultant",
      "jobSecond": "Analyst",
      "id": "45"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Fundamental",
      "email": "Orland10@hotmail.com",
      "status": false,
      "date": "1985-04-11T01:31:37.032Z",
      "jobs": "Forward Metrics Agent",
      "jobSecond": "Facilitator",
      "id": "46"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "pixel",
      "email": "Melany_Rutherford95@gmail.com",
      "status": false,
      "date": "1980-11-17T23:19:45.243Z",
      "jobs": "Chief Directives Analyst",
      "jobSecond": "Administrator",
      "id": "47"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Designer",
      "email": "Joanie9@gmail.com",
      "status": false,
      "date": "1998-12-08T08:38:17.410Z",
      "jobs": "Lead Mobility Developer",
      "jobSecond": "Producer",
      "id": "48"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "deride",
      "email": "Daren_Will76@hotmail.com",
      "status": false,
      "date": "1982-08-26T12:17:42.329Z",
      "jobs": "Human Branding Orchestrator",
      "jobSecond": "Manager",
      "id": "49"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "attitude",
      "email": "Hal22@hotmail.com",
      "status": false,
      "date": "1992-05-09T06:28:40.452Z",
      "jobs": "Regional Applications Associate",
      "jobSecond": "Officer",
      "id": "51"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Gasoline",
      "email": "Travon.Russel@gmail.com",
      "status": false,
      "date": "2003-04-30T15:48:44.322Z",
      "jobs": "Corporate Identity Executive",
      "jobSecond": "Agent",
      "id": "52"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Southwest",
      "email": "Randy.Bogisich99@yahoo.com",
      "status": false,
      "date": "1971-03-29T18:42:42.905Z",
      "jobs": "Dynamic Research Executive",
      "jobSecond": "Consultant",
      "id": "53"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "female",
      "email": "Vern39@hotmail.com",
      "status": false,
      "date": "1984-08-18T08:20:34.975Z",
      "jobs": "Senior Factors Producer",
      "jobSecond": "Consultant",
      "id": "54"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Southwest",
      "email": "Marion70@yahoo.com",
      "status": false,
      "date": "1991-11-17T08:31:05.995Z",
      "jobs": "Legacy Infrastructure Director",
      "jobSecond": "Director",
      "id": "55"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "doloribus",
      "email": "Kallie.Keebler54@gmail.com",
      "status": false,
      "date": "1984-03-05T06:51:39.930Z",
      "jobs": "Central Accounts Director",
      "jobSecond": "Associate",
      "id": "56"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "line",
      "email": "Amie34@gmail.com",
      "status": false,
      "date": "1982-12-09T15:57:57.495Z",
      "jobs": "Legacy Metrics Executive",
      "jobSecond": "Strategist",
      "id": "58"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "East",
      "email": "Winnifred.Dickens@hotmail.com",
      "status": false,
      "date": "1981-07-27T20:42:10.644Z",
      "jobs": "Product Branding Analyst",
      "jobSecond": "Designer",
      "id": "59"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "for",
      "email": "Corene_Goodwin@gmail.com",
      "status": false,
      "date": "1980-11-15T17:22:19.255Z",
      "jobs": "National Mobility Strategist",
      "jobSecond": "Engineer",
      "id": "60"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "sapiente",
      "email": "Ursula_Reichert70@gmail.com",
      "status": false,
      "date": "1987-11-26T16:43:18.972Z",
      "jobs": "National Creative Consultant",
      "jobSecond": "Administrator",
      "id": "61"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Astatine",
      "email": "Jared55@hotmail.com",
      "status": false,
      "date": "1957-07-24T17:33:39.165Z",
      "jobs": "International Response Producer",
      "jobSecond": "Associate",
      "id": "62"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "and",
      "email": "Toy60@hotmail.com",
      "status": false,
      "date": "2005-05-03T05:38:35.982Z",
      "jobs": "Human Metrics Architect",
      "jobSecond": "Consultant",
      "id": "63"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Tesla",
      "email": "Aisha_Wilkinson26@yahoo.com",
      "status": false,
      "date": "1999-10-01T14:27:55.112Z",
      "jobs": "Investor Integration Engineer",
      "jobSecond": "Associate",
      "id": "64"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Borders",
      "email": "Lyla.Koch@yahoo.com",
      "status": false,
      "date": "1953-07-25T23:34:08.759Z",
      "jobs": "Lead Assurance Assistant",
      "jobSecond": "Consultant",
      "id": "65"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Audi",
      "email": "Liam.Baumbach0@hotmail.com",
      "status": true,
      "date": "1966-02-18T05:35:24.591Z",
      "jobs": "Central Assurance Associate",
      "jobSecond": "Designer",
      "id": "66"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "Chips",
      "email": "Gillian.Hackett27@yahoo.com",
      "status": true,
      "date": "1978-09-12T00:12:24.848Z",
      "jobs": "Direct Quality Planner",
      "jobSecond": "Director",
      "id": "67"
    },
    {
      "img": "https://loremflickr.com/640/480/people",
      "name": "behind",
      "email": "Ona.Padberg97@gmail.com",
      "status": false,
      "date": "1975-09-10T18:23:10.792Z",
      "jobs": "Product Marketing Facilitator",
      "jobSecond": "Assistant",
      "id": "68"
    }
  ]




function get (arr)
{
    box.innerHTML=""
    arr.forEach((element) => {
        let tr=document.createElement("tr");

        let userChek=document.createElement("td")
        let checks=document.createElement("input");
        checks.type="checkbox";

       

        let continer=document.createElement("td")
      

        let divs=document.createElement("div");
        divs.classList.add("divs");

        let imgs=document.createElement("img");
        imgs.src=element.img;
        imgs.classList.add("imgs");


        let divs2=document.createElement("div");
        divs2.classList.add("divs2");

        let userName=document.createElement("td")
        userName.textContent=element.name;
        let userEmail=document.createElement("td")
        userEmail.textContent=element.email;


        let usersP=document.createElement("td");

        boxes3=document.createElement("div");
        boxes3.classList.add("boxes3");

    

        let userFunctions=document.createElement("p")
        userFunctions.textContent=element.jobs;

        let userSecondFunctions=document.createElement("p")
        userSecondFunctions.textContent=element.jobSecond;

        let userStatus=document.createElement("td")
        userStatus.textContent=element.status?"Online":"Offline";

        let userDate=document.createElement("td")
        userDate.textContent=new Date(element.date).toLocaleString();



        let userAction=document.createElement("td");

        let BtnInfo=document.createElement("button");
        BtnInfo.textContent="Info";


        let btnDelete=document.createElement("button");
        btnDelete.textContent="Delete";

        btnDelete.onclick=()=>
        {
          arr=arr.filter((item)=>item.id!==element.id)
          get(arr)
        }


        let btnEdit=document.createElement("button")
        btnEdit.textContent="Edit";

        
          BtnInfo.onclick=()=>
            {InfoUser(element)}




   
        continer.append(divs)

        userChek.append(checks)
        userAction.append(BtnInfo,btnEdit,btnDelete)
        usersP.append(boxes3)
        divs.append(imgs,divs2)
        divs2.append(userName,userEmail)
        boxes3.append(userFunctions,userSecondFunctions)
        tr.append(userChek,continer,usersP,userStatus,userDate,userAction)
        box.append(tr)
        
    });
}
get (data)




let dialoginfo=document.querySelector(".dialoginfo") 
let Imagedata=document.querySelector(".Imagedata")
let spanForName=document.querySelector(".spanForName")


function InfoUser(user){
    dialoginfo.showModal()
    Imagedata.src=user.img
    spanForName.innerHTML=user.name
}




//seach

let seach = document.querySelector(".search")
seach.oninput=()=>{
  let filter=seach.value.toLowerCase()
  let users=data.filter((item)=>item.name.toLowerCase().includes(filter))
  get(users) 
}


//sort  names by

let sort=document.querySelector(".sort")
sort.onclick=()=>
{
  let users=data.sort((a,b)=>a.name.localeCompare(b.name))
  get(users)
}



//filter

let filter=document.querySelector(".selectFilter")
filter.onchange=()=>
{
  if(filter.value=="Online")
  {
    let users=data.filter((item)=>item.status==true)
    get(users)
  }
  else if(filter.value=="Offline")
    {
      let users=data.filter((item)=>item.status==false)
      get(users)
    }
  else
  {
    get(data)
  }
}


//add

let dialogAdd=document.querySelector(".dialogAdd")
 let formAdd=document.querySelector(".formAdd")


let btnAdd=document.querySelector(".btnAdd")

btnAdd.onclick=()=>
  {
    dialogAdd.showModal()
  }

