
let box=document.querySelector(".box")
export function get (data){
    data=data.forEach((element) => {
        
                let div = document.createElement('div');
                div.className = 'boxes';
                
                let divName = document.createElement('div');
                divName.className = 'divName';
        
                let divCity = document.createElement('div');
                divCity.className = 'divCity';
        
                let name = document.createElement('h2');
                name.innerHTML = element.Tittle;
        
                let status = document.createElement('p');
                status.innerHTML = element.Level;
                status.className = 'status';
        
                let category = document.createElement('p');
                category.innerHTML = element.Caticory;
        
                let moreBtn = document.createElement('button');
                moreBtn.innerHTML = 'See More';
                moreBtn.onclick = () => {
                    window.location.href = '../Second/second.html';
                    localStorage.setItem('selectedJob', JSON.stringify(el))
                };

                let city= document.createElement('p');
                city.innerHTML = element.Location

         divName.append(name,status)
         divCity.append(moreBtn,city)
          div.append(divName, category,divCity)

         box.append(div)

        
    });
}