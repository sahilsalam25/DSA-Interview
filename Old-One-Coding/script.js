// let heading = document.querySelector('#heading');
// // heading.innerText = 'This is Replaced With Amir Salam ...!';
// heading.innerHTML = 'Another Name with Bold Text : <b> <i>Abdul Salam </i></b> ...!';
// heading.style.color = 'blue';
// heading.style.fontSize = '25px';
// let para1 = document.getElementById('para');
// para1.innerText = 'This is paragraph';
// para1.style.border = '2px solid black';
// para1.style.backgroundColor = 'lightgreen';
// // let divBox = document.getElementsByClass('container');
// // divBox.style.border = '2px solid green';
// let btn = document.getElementById('btn');
// btn.innerText = 'kuch bhi'
// btn.style.color = 'green';
// btn.removeChild(); // it is used to remove element:
// // h1.remove();
// // body.remove();
// // let h2 = document.getElementsByClassName('h2');
// // h2.innerText = 'Replaced .....';
// // h2.style.color = 'blue';
// let h2 = document.querySelector('.h2');
// h2.innerText = 'Replaced .....';
// h2.style.color = 'blue';
// h2.appendChild(btn);
// h2.append('This is More text using append property');
// let paraGraph = document.getElementsByClassName('demoPara');
// paraGraph.innerText = 'Now it is working...';
// paraGraph.style.color = 'blue';
// let links = document.querySelectorAll('.container a');
// // for (let i = 0; i < links.length; i++) {
// //     links[i].style.color = 'green';
// // }
// for (link of links) {
//     link.style.color = 'green';
// }
// let class1 = document.querySelector('.Amir');
// class1.innerText = 'Kuch Bhi';
// class1.classList.add('aamir');
// class1.classList.remove('aamir');
// class1.classList.contains('sahil'); // it is used to check that particular class is given to that element or not ...if prsent then true if not present false


// ----- Dom Events....
let button2 = document.querySelector('#button2');
function btnDemo() {
    alert('Button-2 is Clicked...!');
}
let buttonNo3 = document.getElementById('button3');
buttonNo3.style.color = 'green';
// console.dir(buttonNo3);
// console.log(buttonNo3);

// Method 1 for button3
// buttonNo3.onclick = function () {
//     alert('Button-3 is Clicked...!');
// }
// Method 2 for button3
function sayHello3() {
    alert('Button-3 is Clicked...!');
}
buttonNo3.onclick = sayHello3;

// onmouseenter
function onMouseEnterFunction() {
    alert('1---You Entered Button3...!');
    alert('2---You Entered Button3...!');
    // alert('3---You Entered Button3...!');

}
// buttonNo3.onmouseenter = onMouseEnterFunction;
buttonNo3.onmouseover = onMouseEnterFunction;
//using add event listners:
let buttonNo4 = document.querySelector('#button4');
buttonNo4.style.color = 'yellow';
buttonNo4.style.backgroundColor = 'black';
buttonNo4.style.borderRadius = '10%';
// add event listner Method-1
buttonNo4.addEventListener('click', sayHello3);
// add event listner Method-2
buttonNo4.addEventListener("dblclick", function () {
    alert('Button4 was Double Clicked...!');
})
