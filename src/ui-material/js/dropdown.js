import '../css/dropdown.css';
class Dropdown {
    constructor(container) {
        this.container = container;
        this.container.forEach((item) => {
            this.init(item)
        })
    }

    init(containerSingleItem) {
        let triggers = containerSingleItem.querySelector('.ui-trigger');
        let content = containerSingleItem.querySelector('.ui-content');
        triggers.addEventListener('click', () => {
            triggers.classList.toggle('active');
            content.classList.toggle('active');
        })
    }

}

export default Dropdown;