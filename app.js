const container = document.getElementById('container');
const box = document.getElementsByClassName('box');
const grayButton = document.getElementById('gray');
const blackButton = document.getElementById('black');
const rgbButton = document.getElementById('rgb');
const clearButton = document.getElementById('clear');
const size = document.querySelector('#sizeButton');


function sketchPad(col, row) {
    for(let i = 0; i < (col * row); i++) {
        const newBox = document.createElement('div');
        newBox.className = 'box';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.append(newBox);
}}
sketchPad(16, 16);

function grayColor() {
    const boxes = container.querySelectorAll('.box');
    grayButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
        let rColor = Math.floor(Math.random() * 255);
        box.style.backgroundColor = `rgb(${rColor},${rColor},${rColor})`;
    }))
})
}
grayColor();

function blackColor() {
    const boxes = container.querySelectorAll('.box');
    blackButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    }))
})
}
blackColor();

function rgbColor() {
    const boxes = container.querySelectorAll('.box');
    rgbButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        box.style.backgroundColor = `rgb(${r},${g},${b})`;
    }))
})
}
rgbColor();

    clearButton.addEventListener('click', () => {
        const boxes = container.querySelectorAll('.box');
        boxes.forEach(box => box.remove());
        sketchPad(16, 16);
        grayColor();
        blackColor();
        rgbColor();
    })


    size.addEventListener('click', () => {
    let user = parseInt(prompt('What size grid do you want? Enter a number from 16 to 100'));
    if(user > 100){
        user = 16;
        alert('Please select a number less than 100!');
    }
    if(user < 16){
        user = 16;
        alert('Please select a number more than 16!');
    }
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
    sketchPad(user, user);
    grayColor();
    blackColor();
    rgbColor();
})

