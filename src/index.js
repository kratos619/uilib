import Tooltip from './ui-material/js/tooltip';
import Dropdown from './ui-material/js/dropdown';
import Snackbar from './ui-material/js/Snackbar';
new Tooltip(document.querySelectorAll('.ui-tooltip'));
new Dropdown(document.querySelectorAll('.ui-dropdown'));

const button = document.querySelector('.clickme');
button.addEventListener('click', (e) => {
    e.preventDefault();
    new Snackbar()
        .show({
            message: 'Lorem ipsum dolor sit amet',
            timeOut: 10000
        });

})

// const box = document.getElementById('squre');
// console.log(box);
// let animateA = [{
//         transform: "translateY(0)", // start
//         opacity: 0
//     },
//     {
//         transform: 'translateY(calc(-100vh - 200px)) ', //end
//         opacity: 1
//     }
// ]

// box.animate(animateA, {
//     duration: 3000, //duration
//     iterations: 11, // iterations
//     fill: "auto"
// })