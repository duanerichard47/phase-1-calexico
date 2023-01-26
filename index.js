//Write your code here...
fetch("http://localhost:3000/menu")
.then(response=>response.json())
.then(totalMenu=> {renderMenuItems(totalMenu); renderFirstItem(totalMenu[0])})





function renderMenuItems(allMenuItems)
{
    console.log(allMenuItems)
    // let menuItems = document.querySelector('#menu-items')
    allMenuItems.forEach(menuitem=>{
    let menuItems = document.querySelector("#menu-items")
    let menuItemSpan = document.createElement('span')
    menuItemSpan.textContent = menuitem.name
    menuItems.appendChild(menuItemSpan)
    console.log(menuitem)

    menuItems.addEventListener('click', ()=>{

        const dishImg = document.querySelector('#dish-image')
        const dishName = document.querySelector('#dish-name')
        const dishDesc = document.querySelector('#dish-description')
        const dishPrice = document.querySelector('#dish-price')

        dishImg.src = menuitem.image
        dishName.textContent = menuitem.name
        dishDesc.textContent = menuitem.description
        
        dishPrice.textContent = menuitem.price
        })
       // formFunc(allMenuItems)
console.log(menuitem)

    })
   
    
}

function renderFirstItem(oneItem)
{
const dish = document.querySelector('#dish')

const dishImg = document.querySelector('#dish-image')
const dishName = document.querySelector('#dish-name')
const dishDesc = document.querySelector('#dish-description')
const dishPrice = document.querySelector('#dish-price')

dishImg.src = oneItem.image
dishName.textContent = oneItem.name
dishDesc.textContent = oneItem.description
oneItem.price = `$ ${oneItem.price}`
dishPrice.textContent = oneItem.price
}

function formFunc(allMenuItems){
    const formId = document.querySelector('#cart-amount')
    const cartAmount = document.querySelector('#cart-amount')
    formId.addEventListener('submit', event=>{
        event.preventDefault()

        cartAmount += cartAmount

        formId.reset()

    }
    )


}



   



























////////// instructer version



//</div>const ????? = document.querySelector('')



// let currentDish;

// fetch("http://localhost:3000/menu")
// .then(response => response.json())
// .then(menuData => {
//     buildMenu(menuData);
//     setDish(menuData[0])
//     setupCart();
// });

// function buildMenu(menuData) {
//     let menuList = document.querySelector("#menu-items");
//     menuData.forEach(item => {
//         let menuListItem = document.createElement("span");
//         menuListItem.textContent = item.name;
//         menuList.appendChild(menuListItem);

//         menuListItem.addEventListener('click', () => {
//             setDish(item)
//         })
//     });

// }
// function setDish(dish) {
//     currentDish = dish;

//     let dishImage = document.querySelector("#dish-image");
//     let dishName = document.querySelector("#dish-name");
//     let dishDescription = document.querySelector("#dish-description");
//     let dishPrice = document.querySelector("#dish-price");
//     let numberInCart = document.querySelector("#number-in-cart");
    
//     dishImage.src = dish.image;
//     dishName.textContent = dish.name;
//     dishDescription.textContent = dish.description;
//     dishPrice.textContent = `$${dish.price}`;
//     numberInCart.textContent = dish.number_in_bag;
// }

// function setupCart() {
//     let addToCartForm = document.querySelector("#cart-form")
//     addToCartForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         currentDish.number_in_bag += parseInt(event.target["cart-amount"].value);
//         setDish(currentDish);
//         addToCartForm.reset();
//     });
// }
