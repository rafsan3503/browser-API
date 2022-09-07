const getInput = id => {
    const element = document.getElementById(id);
    const value = element.value;
    element.value = '';
    return value;
}

const add = (id, name, elementId) => {
    document.getElementById(id).addEventListener('click', function () {
        const element = getInput(elementId);
        localStorage.setItem(name, element);
    })
}
const remove = (id, name)=>{
    document.getElementById(id).addEventListener('click', function () {
        localStorage.removeItem(name)
    })
}

const clearAll = () => {
    localStorage.clear()
}

const sendAll = () => {
    let data = {};
    const name = getInput('nameInput');
    const email = getInput('emailInput');
    const text = getInput('textInput');
    data['name'] = name;
    data['email'] = email;
    data['text'] = text;
    let stringify = JSON.stringify(data);
    localStorage.setItem('data', stringify);
}

add('addName', 'name', 'nameInput');
add('addEmail', 'email', 'emailInput');
add('addText', 'text', 'textInput');
remove('removeName','name')
remove('removeEmail','email')
remove('removeText','text')