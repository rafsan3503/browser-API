

const getInputValueById = Id => {
    const input = document.getElementById(Id);
    const value = input.value;
    input.value = '';
    return value;
}

const getCartFromLs = () => {
    let cart = {};
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    return cart;
}

const saveItemToLocalStorage = (product,quantity) => {
    const cart = getCartFromLs()
    cart[product] = quantity;
    const stringfied = JSON.stringify(cart);
    localStorage.setItem('cart',stringfied)
}
const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    // displayProduct(product, quantity);
    saveItemToLocalStorage(product,quantity)
}

const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} - ${quantity}`;
    productContainer.appendChild(li);
}

const setValue = () => {
    const cart = getCartFromLs();
    for (const product in cart) {
        const quantity = cart[product]
        displayProduct(product,quantity)
    }
}
setValue();