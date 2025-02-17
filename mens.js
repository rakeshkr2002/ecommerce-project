let home = document.getElementById('home');
home.addEventListener('click', (e)=>{
e.preventDefault();
window.location.href = "home.html";
})

let cart=JSON.parse(localStorage.getItem('cart'))||[];

function AddToCart(productName, productPrice) {
   cart.push({name:productName, price:productPrice});
   localStorage.setItem('cartpage', JSON.stringify(cart));
   alert(`${productName} added to cart`);
}

function viewCart() {
 
    window.location.href="cart.html"
}