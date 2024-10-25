
let box=document.querySelector(".box")
let card=
[
    {
        img:"image.png",
        name:"Best Mest Chest Best <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mest Chest",
        about:"Lorem ipsum dolor sit amet consectetur adipisicing  <br>Fugiat sed cupiditate >nihil repellat tempore dolores <br> placeat, ea aspernatur delectus illo quidem minus <br>Commodi assumenda rem officiis, natus placeat sed.",
        plus:"Lorem ipsum dolor sit amet consectetur adipisicing  < Fugiat sed cupiditate >nihil repellat tempore dolores<> placeat, ea aspernatur delectus illo quidem minus <>Commodi assumenda rem officiis, natus placeat sed.",
    },

    {
        img:"image.png",
        name:"Best Mest Chest Best <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mest Chest",
        about:"Lorem ipsum dolor sit amet consectetur adipisicing  <br>Fugiat sed cupiditate >nihil repellat tempore dolores <br> placeat, ea aspernatur delectus illo quidem minus <br>Commodi assumenda rem officiis, natus placeat sed.",
        plus:"Lorem ipsum dolor sit amet consectetur adipisicing  < Fugiat sed cupiditate >nihil repellat tempore dolores<> placeat, ea aspernatur delectus illo quidem minus <>Commodi assumenda rem officiis, natus placeat sed.",
    },

    {
        img:"image.png",
        name:"Best Mest Chest Best <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mest Chest",
        about:"Lorem ipsum dolor sit amet consectetur adipisicing  <br>Fugiat sed cupiditate >nihil repellat tempore dolores <br> placeat, ea aspernatur delectus illo quidem minus <br>Commodi assumenda rem officiis, natus placeat sed.",
        plus:"Lorem ipsum dolor sit amet consectetur adipisicing  < Fugiat sed cupiditate >nihil repellat tempore dolores<> placeat, ea aspernatur delectus illo quidem minus <>Commodi assumenda rem officiis, natus placeat sed.",
    }
]

card.forEach((el)=>
    {
        let div=document.createElement("div")
        let img=document.createElement("img")
        let h1=document.createElement("h1")
        let p=document.createElement("p")
        let img1=document.createElement("img")
        let button=document.createElement("button")
        let button1=document.createElement("button")
        let plus=document.createElement("span")
        img.src=el.img
        div.append(img1,img,p,plus,button,button1)
        box.appendChild(div)
        div.className="divs"
        img.className="images"
        h1.textContent=el.name
        p.textContent=el.about
        p.style.padding="10px"
        p.style.display="inline"
        button.textContent="Read more"
        plus.textContent=el.plus
        plus.className="pluss"
        button.className="buttonf"
        button1.textContent="Not Interested"
        button1.className="buttons"
        let cnt=0
        button.addEventListener("click",()=>
            {
                cnt++
                if(cnt%2!=0)
                    {
                        plus.style.display="inline"
                        button.textContent="Close"
                    }
                    else
                    {
                        plus.style.display="none"
                        button.textContent="Read more"
                    }
            })
    })  ``