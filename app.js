const getInputValueById = Id => {
    const input = document.getElementById(Id);
    const inputValue = input.value;
    input.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product');
    console.log(product);
    localStorage.setItem('name',product)
}

const removeProduct = () => {
    localStorage.removeItem('name')
}

const removeQuantity = () => {
    localStorage.removeItem('Quantity')
}
const addQuantity = () => {
    const quantity = getInputValueById('quantity');
    console.log(quantity)
    localStorage.setItem('Quantity',quantity)
}

const clearAll = () => {
    localStorage.clear()
}

const addTolistContainer = () => {
    const product = getInputValueById('product')
    const quantity = getInputValueById('quantity')
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${product} , ${quantity}`;
    listContainer.appendChild(li);
}
addTolistContainer();