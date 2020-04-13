import Tooltip from './ui-material/js/tooltip';
import Dropdown from './ui-material/js/dropdown';
import Snackbar from './ui-material/js/Snackbar';
const sn = new Snackbar();
sn.init();

const button = document.querySelector('.clickme');
button.addEventListener('click', (e) => {
    e.preventDefault();
    sn.show("this is notification")
})

new Tooltip(document.querySelectorAll('.ui-tooltip'));
new Dropdown(document.querySelectorAll('.ui-dropdown'));