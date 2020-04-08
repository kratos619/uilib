import '../css/tooltip.app.css'
class Tooltip {
    constructor(element) {
        this.element = element
        this.element.forEach((item) => {
            let msg = item.getAttribute('data-message');
            let tip = document.createElement('div');
            tip.classList.add('tip');
            tip.textContent = msg;
            item.appendChild(tip);
            item.addEventListener('mouseenter', () => {
                tip.classList.add('active')
            })
            item.addEventListener('mouseleave', () => {
                tip.classList.remove('active')
            })
        })







    }
    // init() {
    //     console.log(this.element);
    //     const tip = document.createElement('div');
    //     tip.classList.add('tip');
    //     tip.textContent = this.message;
    //     this.element.appendChild(tip);
    //     this.element.addEventListener('mouseenter', () => {
    //         tip.classList.add('active')
    //     })
    //     this.element.addEventListener('mouseleave', () => {
    //         tip.classList.remove('active')
    //     })
    // }

}

export {
    Tooltip as
    default
}