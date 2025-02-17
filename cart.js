function AddToCart() {
    let cart = JSON.parse(localStorage.getItem('cartpage')) || [];
    let cartContainer = document.getElementById('added-products');

    if (cart.length === 0) {
        cartContainer.innerText = "cart is empty";
        return;
    }
    cartContainer.innerText = '';
    cart.forEach((item, index) => {
        let divcontainer = document.createElement('div');
        divcontainer.classList='cart-items';
        divcontainer.innerHTML = `
        <div>
            <h1>${item.name}</h1>
            <h1>${item.price}</h1>
        </div>
        <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(divcontainer);
    })
}
    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cartpage')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cartpage', JSON.stringify(cart));
        AddToCart();
    }
    
    AddToCart();


