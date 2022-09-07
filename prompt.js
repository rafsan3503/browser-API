console.log('connected')
// alert('ki khbor dosto')
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num)
    if (num > 5) {
        alert('ki khbr dosto');
    }
}

const askSomething = () => {
    const decision = confirm('are you coming to picnic?');
    console.log(decision);
    if (decision === true) {
        alert('500 taka baksh kor')
    }
    else {
        alert('dure giye mor')
    }
}

const getUserInfo = () => {
    const info = prompt('tell us your name');
    console.log(info)
    if (!!info) {
        console.log('welcome here', info)
    }
}