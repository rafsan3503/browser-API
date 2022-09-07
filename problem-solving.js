/* ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।  */
// console.log('first')
// console.log('second')
// setTimeout(()=>{console.log('third')},3500)
// console.log('forth')
// console.log('fifth')
// console.log('sixth')
// console.log('seventh')
// setTimeout(() => { alert('this will start after 3.5 seconds'), 3500 });
// console.log('first')

// setTimeout(function(){
//  	console.log("Sup!");
// }, 2000);

/* 
২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
 */

/* const input = prompt('Input a number');
const inputValue = parseFloat(input);
if (!!input) {
    const sum = 200 + inputValue;
    alert(sum)
}; */

/* 
৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
*/

/* const dicision = confirm('Are you want to see browser location?')
if (dicision === true) {
    console.log(location.href)
}
 */

/* 
৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 
*/

/* cookies are small piceces of information website store on your computer. cookies only contain bits of text like user ID.If you clear your cookies, you’ll be logged out of all websites and websites won’t remember any settings you’ve changed on them. */

/* 
৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )*/

/* 
1.data of session storage expire when page reloads.
2.sessionStorage is used when we want to destroy the data whenever that specific tab gets closed or the season is closed by the user.
3.The data stored in local storage has no expiration date
*/

// problem-solving 2

// const getNsetValue = () => {
//     const id = document.getElementById('count');
//     let value = parseFloat(id.innerText);
//     id.innerText = value + 1;
//     localStorage.setItem("number", id.innerText);
//     const returnValue = localStorage.getItem('number');
//     console.log(returnValue)
//     id.innerText = returnValue;
// }
const getNset = () =>{
    let savedValue = localStorage.getItem('number')
    let a = 0;
    if (savedValue) {
        a = parseInt(savedValue);
    }
    return a;
}

function increase() {
    let a = getNset();
    a++;
    localStorage.setItem('number', a);
    setValue();
}

const setValue = () => {
    const value = getNset();
    const textArea = document.getElementById('count');
    textArea.textContent = value;
    console.log(value)
}

setValue();
// const setValue = () => {
    
//     const getValue = localStorage.getItem('number');
//     textBox.innerText = getValue;
//     console.log(getValue)
// }

// setValue();

