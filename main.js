const demoBoxElement = document.getElementById('testBox');
console.dir(demoBoxElement);
demoBoxElement.className = 'red';
demoBoxElement.className = '';

demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');
demoBoxElement.classList.toggle('blue');

/**
 *  Get or set attributes
 */

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
console.log(imgSrc);
newImageElement.setAttribute('src',imgSrc);

/**
 *  Event listners
 */

const ulElement = document.getElementsByTagName('ul')[0];

// ulElement.addEventListener('click', () => {
//     ulElement.classList.toggle('blue');
// });

let listItemsElements = document.querySelectorAll('li');
listItemsElements.forEach( (listItem) => {
    // listItem.addEventListener('mouseover', function () {
    //     this.classList.add('red');
    //     console.dir(this);
    // })
    // listItem.addEventListener('mouseout', function() {
    //     this.classList.remove('red');
    // })
    listItem.addEventListener('click', toggleListItems);
});

function toggleListItems() {
    const toggleValue = this.classList.toggle('red');
    console.log(toggleValue);
    if (toggleValue) {
        const span = document.createElement('span');
        span.innerHTML = 'x';
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();
        console.log(this);
    }
}

const clickMeElement = document.getElementById('clickMe');
clickMeElement.style.cursor = 'pointer';

const demoInputElement = document.getElementById('demoInput');

demoInputElement.addEventListener('keypress', function(event) {
    console.log(event);
    console.dir(demoInputElement);
    if (event.keyCode === 13 && demoInputElement.value.length > 3){
        demoInputElement.style.background = 'green';
    }  
    
});

clickMeElement.addEventListener('click', function() {
    const newLiElement = document.createElement('li');
    ulElement.appendChild(newLiElement);
    listItemsElements = document.getElementsByTagName('li');

    if (demoInputElement.value) {
    newLiElement.innerHTML = demoInputElement.value;
    demoInputElement.value = ''
    } else {
        newLiElement.innerHTML = 'Elem ' + listItemsElements.length;
    }
});


const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListElement = document.getElementsByClassName('toDoListItems')[0];

addButtonElement.addEventListener('click', function() {
    const canAdd = checkPlan();
    console.dir(toDoInputElement);
    if (canAdd) {
    if(toDoInputElement.value !== '') {
        const newListItemElement = document.createElement('li');
        newListItemElement.className = 'newListItems';

        toDoListElement.appendChild(newListItemElement);
        newListItemElement.innerHTML = toDoInputElement.value;
        toDoInputElement.value = "";
        toDoInputElement.focus();
    } else {
        alert('Te rugam sa introduci o valoare mai intai');
        // promt('Te rugam sa introduci o valoare mai intai');
        // confirm('Te rugam sa introduci o valoare mai intai');
        // toDoInputElement.classList.toggle('blue');
    }
} else {
    alert('Te rugam sa treci la un plan tarifar superior');
}
});



function checkPlan() {  // returneaza o valoare booleana
    const newListItemsNumber = document.getElementsByClassName('newListItems').length;
    return newListItemsNumber < 3;
//     if (newListItemsNumber < 3) {
//         return true;
//     } else {
//         return false
//     }
}





// add by enter also