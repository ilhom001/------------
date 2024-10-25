let box = document.querySelector(".box");
let cart = JSON.parse(localStorage.getItem('cart')) || []; 

export function get(data) {
    box.innerHTML = "";
    data.forEach((element) => {
        let container = document.createElement("div");
        container.classList.add('boxes');

        let productImage = document.createElement("img");
        productImage.classList.add("images");
        productImage.src = element.image;

        let productName = document.createElement("h2");
        productName.classList.add("ProductName");
        productName.innerHTML = element.name;

        let productPrice = document.createElement("h4");
        productPrice.classList.add("ProductPrice");
        productPrice.innerHTML = "$" + element.price;

        let iconSearch = document.createElement('span');
        iconSearch.className = 'iconSearch';
        iconSearch.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" /></svg>';
        iconSearch.onclick = () => {
            localStorage.setItem("prod", JSON.stringify(element));
            window.location.href = "/third/third.html";
        };

        let iconKarzina = document.createElement('span');
        iconKarzina.className = 'iconKarzina';
        iconKarzina.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>';
        
        iconKarzina.onclick = () => {
            const existingItem = cart.find(item => item.id === element.id); 
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                element.quantity = 1; 
                cart.push(element); 
            }
            updateCartDisplay(); 
            saveCart(); 
        };
        

        container.append(iconSearch, iconKarzina, productImage, productName, productPrice);
        box.append(container);
    });

    updateCartDisplay(); 
}


function updateCartDisplay() {
    const dialogDiv = document.querySelector('.dialogdiv');
    dialogDiv.innerHTML = ''; 

    let totalPrice = 0; 

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div'); 
        itemDiv.classList.add('cart-item'); 
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:400px">
            <h2>${item.name}</h2>
            <h3>$${item.price}</h3>
            <img src="../Products/imagesproduct/more.png" alt="Increase Quantity" class="increase-quantity" data-index="${index}">
            <span class="spancnt">${item.quantity}</span>
            <img src="../Products/imagesproduct/minus.png" alt="Decrease Quantity" class="decrease-quantity" data-index="${index}">
            <img src="../Products/imagesproduct/reject.png" class="imagedeltefromKorzina" onclick="removeFromCart(${index})" alt="Remove Item">
        `;
        dialogDiv.append(itemDiv);
        totalPrice += item.price * item.quantity; 
    });

    const totalPriceKorzina = document.querySelector('.h3TotalPrice');
    totalPriceKorzina.innerHTML = `$${totalPrice}`; 

    
    document.querySelectorAll('.increase-quantity').forEach(icon => {
        icon.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            incrementCount(index);
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach(icon => {
        icon.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            decrementCount(index);
        });
    });
}


function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); 
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    updateCartDisplay(); 
    saveCart(); 
}

function incrementCount(index) {
    cart[index].quantity += 1;
    updateCartDisplay(); 
    saveCart(); 
}


function decrementCount(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; 
    } else {
        removeFromCart(index); 
    }
    updateCartDisplay(); 
    saveCart(); 
}


let DialogKarzina = document.querySelector(".DialogKarzina");
let imgSupermarket = document.querySelector(".imgSupermarket").onclick = () => {
    DialogKarzina.showModal();
    updateCartDisplay(); 
}

let imageExit = document.querySelector(".imageExit").onclick = () => {
    DialogKarzina.close();
}

window.removeFromCart = removeFromCart;
