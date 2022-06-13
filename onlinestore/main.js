
 

// products
let products = [
    {


        name: 'apple',
        tag: 'apple',
        price: 5820,
        inCart :0



    },

    {

        
        name: 'hp',
        tag: 'hp2',
        price: 8520,
        inCart :0

    },

    {

        
        name: 'sony',
        tag: 'sony',
        price: 5200,
        inCart :0


    },

    {

        
        name: 'acer',
        tag: 'acer5',
        price: 5670,
        inCart :0



    },

    {

                name: 'sumsung',
        tag: 'sumsung4',
        price: 6500,
        inCart :0


    },

    {


        name: 'dull',
        tag: 'dell',
        price: 3900,
        inCart :0



    }
];


// add products to cart
let carts = document.querySelectorAll('.add-cart');
// loop around products
for (let i=0; i<carts.length; i++) {

    carts[i].addEventListener('click', ()=>{

    cartNumbers(products[i]);
    totalCost(products[i]);
        
    })
}

// check local storage  to get an item of cart numbur if it exist
function onLoadCartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');


    if(productNumbers){

       // document.querySelector('.cart span').textContent = productNumbers;

    }
}


// add values to local storage
function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {

        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {

        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }

     setItems(product);

}

//set items to local storage 
function setItems(product){

    
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);


    if(cartItems != null){

        if(cartItems[product.tag] == undefined){

            cartItems = { 
            ...cartItems,
            [product.tag]: product

        }
    }

        cartItems[product.tag].inCart += 1;

    } else {

        
    product.inCart = 1;

    cartItems= {

        [product.tag]:product 
    }

    }


    localStorage.setItem("productInCart", JSON.stringify(cartItems));
    
}

// total cost of all products
function totalCost(product){
let cartCost = localStorage.getItem('totalCost');


if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
}else {

    localStorage.setItem("totalCost", product.price);
}
alert("Current total is:  R"+cartCost);


}

// display selected products to cart
function displayCart(){

        let cartItems =  localStorage.getItem("productInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products")

        let cartCost = localStorage.getItem('totalCost');


        if(cartItems && productContainer ){
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => { 

                productContainer.innerHTML += `

                <div class= "products" >
                <img src="images/${item.tag}.jpg" >
                <span> ${item.name} </span>

                </div>

                <div class="price">
                    R${item.price},00
                </div>

                <div class="quantity" > 

                    <span>${item.inCart}</span>
                </div>

                <div class="total">
                    R${item.inCart * item.price},00;


                </div>

                
                `

            });

            productContainer.innerHTML += `
            
            <div class="basketTotalContainer">
                <h5 class="basketTotalTitle"> Basket Total 
                </h5>
            </div>
            <h5 class="basketTotal" >

                R${cartCost},00;
            </h5>

            `
            
        }
}


// Object to store location options
function deliveryOptions(location, price) {
    this.location = location;
    this.price = price;
}

let delivery01 = new deliveryOptions("Limpopo", 200);
let delivery02 = new deliveryOptions("Gauteng", 150);
let delivery03 = new deliveryOptions("Mpumalanga", 300);
let delivery04 = new deliveryOptions("KZN", 400);
let delivery05 = new deliveryOptions("Free State", 280);
var totalAmount = 0;


function locationOpt() {
    let user = prompt("Please Select A Delivery Option\n" + "a: " + delivery01.location + " - R" + delivery01.price + "\n" + "b: " + delivery02.location + " - R" + delivery02.price + "\n" + "c: " + delivery03.location + " - R" + delivery03.price +
        "\n" + "d: " + delivery04.location + " - R" + delivery04.price + "\n" + "e: " + delivery05.location + " - R" + delivery05.price);
    console.log(user);

    if (user == "a") {
        totalAmount = totalAmount + delivery01.price;
    } else
    if (user == "b") {
        totalAmount = totalAmount + delivery02.price;

    } else
    if (user == "c") {
        totalAmount = totalAmount + delivery03.price;
    } else
    if (user == "d") {
        totalAmount = totalAmount + delivery04.price;
    } else
    if (user == "e") {
        totalAmount = totalAmount + delivery05.price;
    }

}

// Function that add discount 

function discount(){

    totalAmount =   totalAmount - 20;
    totalAmt();

}

// Function to display total amount with alert
function totalAmt() {

    return alert("R"+ totalAmount);

}

// net payment function
function netPay(){
   
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
     alert(cartCost + totalAmount);
 
}

// confirmation function with unique reference number
function confirm(){
 
    alert("ORDER IS SUCCESSFUL, your reference number: "  +Math.floor(Math.random() * 100000))
}

onLoadCartNumbers();
displayCart();

/*-----------jQuery------------ */

$(document).ready(function () {
    $(".accordion_head").mouseover(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
});


// A function which contains hiding/showing.


$(document).ready(function() {
    $("button").hide(1000).show(1000);
});


// Function for a chained effect, first it slide the pages around and secondly it changes the backgroud colour
$(document).ready(function() {
    setInterval(animateh1, 4000);
    setInterval(changeBDcolors, 4000);

    function animateh1() {

        $("h1").animate({ right: '500px' }, 20000).animate({ left: '500px' }, 20000);
        $("h1").slideUp(20000).slideDown(20000);
    }
    animateh1();
    var counter = 0;

    function changeBDcolors() {
        var colors = ["greenyellow", "gold", "indianred"];

        if (counter < colors.length) {
            $("h1").css("color", colors[counter], 20000);
            console.log("Counter: " + counter + " Colors Length: " + colors.length + " Colors: " + colors);
            counter++;
        } else {
            counter = 0;
        }



    }
    changeBDcolors();

});

// Animation effects.

$(document).ready(function() {

    $(".stop").click(function() {
        $("#pause").stop();
    });
});