const getInputValueById = Id => {
    const input = document.getElementById(Id);
    const value = input.value;
    input.value = '';
    return value;
}
const addProduct = () => {
    const product = getInputValueById('product-value');
    const quantity = getInputValueById('quantity-value');
    saveProductToLs(product,quantity)
}

const getCartFromLs = () => {
    let cart = {};
    let savedCart = localStorage.getItem('cart')
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart;
}

const saveProductToLs = (product, quantity) => {
    const cart = getCartFromLs();
    cart[product] = quantity;
    const stringfied = JSON.stringify(cart);
    localStorage.setItem('cart',stringfied)
}

const displayProduct = (product,quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} - ${quantity}`;
    productContainer.appendChild(li);
}

const getProductFromLS = (product, quantity) => {
    const cart = getCartFromLs();
    for (product in cart) {
        const quantity = cart[product]
        console.log(product, quantity)
        displayProduct(product, quantity);
    }
}
getProductFromLS()