let api="https://66ea369b55ad32cda4780f82.mockapi.io/toto"
let box=document.querySelector(".box")

async function getApi() 
{
    try 
    {
        const {data}=await axios.get(api)
        get(data)  
    } 
    catch (error) 
    {
        console.error(error);
        
    }
}
function get(data) 
{
    box.innerHTML=""
    data.forEach((element) => 
        {
            let task =document.createElement("li")
            task.classList.add("TASK")
            let checkbox=document.createElement("input")
            let input=document.createElement("input")
            let del=document.createElement("button")
            del.innerHTML="X"
            input.value=element.task
            task.classList.add("task")
            
            checkbox.classList.add("checkbox")
            checkbox.type="checkbox"
            checkbox.type = "checkbox";
            checkbox.checked = element.status;
            if (element.status) {
                task.style.textDecoration = "line-through";
            } else {
                task.style.textDecoration = "none";
            }


            task.append(checkbox,input,del)
            box.append(task)


            // DELETE
            del.onclick=async()=>
                {
                    try {
                        const data=await axios.delete(`{api}/${element.id}`)
                        getApi()
                    } catch (error) {
                        console.error(error);  
                    }
                }

                //EDIT
            input.oninput=async()=>
                {
                    try {
                        const {data}= await axios.put(`${api}/${element.id}`,{task:input.value})
                        getApi()
                    } catch (error) {
                        console.error(error);
                    }
                }


        
                checkbox.onchange = async () => {
                    try {
                        await axios.put(`${api}/${element.id}`, { task: input.value, status: checkbox.checked });
                        if (checkbox.checked) {
                            task.style.textDecoration = "line-through";
                        } else {
                            task.style.textDecoration = "none";
                        }
                        getApi();
                    } catch (error) {
                        console.error(error);
                    }
};
})
    
}
getApi()


// ADD

let btnAdd=document.querySelector(".btnAdd")
let InpforADD=document.querySelector(".InpforADD")

btnAdd.onclick=async () => 
{
    try {
        const {data}=await axios.post(api,{task:InpforADD.value,status:false})
        getApi()
    } catch (error) {
        console.error(error);
        
    }    
}