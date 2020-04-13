import '../css/snackbar.css'
class Snackbar {
    constructor() {
        this.snackbar = document.createElement('div');
    }

    init() {
        this.snackbar.classList.add('ui-snackbar');
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(message) {
        this.snackbar.textContent = message
        this.snackbar.classList.add('active');
        setTimeout(() => {
            this.snackbar.classList.remove('active');
        }, 4000);
    }

}

export default Snackbar;