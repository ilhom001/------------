let box=document.querySelector(".container")
let employyes =
[
  
    {
      imgperson:"image.jpg",
      name:"Alice",
      position:"Web Developer",
      img:"photo_2024-09-06_13-20-55.jpg",
      logo:"image_2024-09-06_15-06-22.png"
  },
  {
      imgperson:"image1.jpg",
      name:"John Wells",
      position:"Ux Ui Desighner",
      img:"photo_2024-09-06_13-20-49.jpg",
      logo:"image_2024-09-06_15-06-22.png"  },
  {
      imgperson:"image2.jpg",
      name:"Rose",
      position:"Ml Engineer",
      img:"photo_2024-09-06_13-21-00.jpg",
      logo:"image_2024-09-06_15-06-22.png"  }
  
]
employyes.forEach((el)=>
    {
        
        let divv=document.createElement("div")
        let h2=document.createElement("h2")
        let h3=document.createElement("h3")
        let img1=document.createElement("img")
        let img2=document.createElement("img")
        let img3=document.createElement("img")
        img1.src=el.logo
        img2.src=el.imgperson
        divv.className="content"
        img3.src=el.img
        
        let divbuttons=document.createElement("div")
        let buttadd=document.createElement("button")
        let buttdel=document.createElement("button")
        img2.className="images"
        divbuttons.className="buttons"
        divbuttons.append(buttadd,buttdel)
        buttdel.textContent="Aboute Me"
        buttadd.textContent="Hier Me"
        h2.textContent=el.name
        h3.textContent=el.position
        h2.className="text1"
        h3.className="text2"
        divbuttons.append(buttadd,buttdel)
       
        divv.append(img1,img2,h2,h3,img3,divbuttons)
        box.appendChild(divv)
    })