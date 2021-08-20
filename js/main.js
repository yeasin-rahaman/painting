const firstImage = document.getElementById('first');
const secondImage = document.getElementById('second');
const thirdImage = document.getElementById('third');
const img = document.getElementById('art');
const details = document.getElementById('desc');
const price = document.getElementById('price');
const freeShipping = document.getElementById('free');
const expressShipping = document.getElementById('express');
const shippingFuild = document.getElementById('shipping');

freeShipping.addEventListener('click', function () {
    shippingFuild.innerText = '5'
    updateTotal();
})
expressShipping.addEventListener('click', function () {
    shippingFuild.innerText = '30'
    updateTotal();
})

firstImage.addEventListener('click', function () {
    // changing image 
    img.src = 'images/1.jpg';
    // changing details 
    details.innerText = 'FIRST TEXT --  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    // changing price 
    price.innerText = '750';
    updateTotal();

});
secondImage.addEventListener('click', function () {
    // changing image 
    img.src = 'images/2.jpg';
    // changing details 
    details.innerText = 'SECOND TEXT --  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    // changing price 
    price.innerText = '650';
    updateTotal();
});
thirdImage.addEventListener('click', function () {
    // changing image 
    img.src = 'images/3.jpg';
    // changing details 
    details.innerText = 'THIRD TEXT --  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    // changing price 
    price.innerText = '450';
    updateTotal();
});

function updateTotal() {
    const shippingCharge = Number(shippingFuild.innerText);
    const ProductPrice = Number(price.innerText);
    const totalPrice = shippingCharge + ProductPrice;
    const subTotal = document.getElementById('total')
    subTotal.innerText = totalPrice


}