// let animateBtnup = document.getElementById('animate-btn-up');
// animateBtnup.onclick = function () {
//     let position = 0;
//     let fox = document.getElementById('animate-fox');
//     let interval = setInterval(animation, 5);

//     function animation () {
//         if (position == 400){
//             clearInterval(interval);
//         } else {
//             position++;
//             fox.style.bottom = position + "px";
//         }
//     }
// }
let interval;

function animate(direction) {
    let position = 0;
    let fox = document.getElementById('animate-fox');

    clearInterval(interval);

    interval = setInterval(() => {
        if (position == 400) {
            clearInterval(interval);
        } else {
            position++;
            moveFox(direction, position, fox);
        }
    }, 5);
}

function moveFox(direction, position, fox) {
    switch (direction) {
        case 'up':
            fox.style.bottom = position + 'px';
            break;
        case 'left':
            fox.style.right = position + 'px';
            break;
        case 'right':
            fox.style.right = 400 - position + 'px';
            break;
        case 'down':
            fox.style.bottom = 400 - position + 'px';
            break;
    }
}

document.getElementById('animate-btn-up').onclick = function () {
    animate('up');
};

document.getElementById('animate-btn-left').onclick = function () {
    animate('left');
};

document.getElementById('animate-btn-right').onclick = function () {
    animate('right');
};

document.getElementById('animate-btn-down').onclick = function () {
    animate('down');
};

