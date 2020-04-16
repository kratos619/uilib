import '../css/snackbar.css'
class Snackbar {
    constructor() {
        this.snackbar = document.createElement('div');
        this.mainDiv = document.createElement('div');
        this.init();

    }
    init() {
        this.snackbar.classList.add('ui-snackbar');
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(options) {
        this.snackbar.textContent = options.message || ""
        this.snackbar.classList.add('squreAnimations');
        setTimeout(() => {
            this.snackbar.classList.remove('squreAnimations');
            document.querySelector('body').removeChild(this.snackbar);
        }, options.timeOut || 1000);
    }

}

export default Snackbar;