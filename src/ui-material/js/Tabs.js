class Tabs {
    constructor(container) {
        this.container = container;
        console.log('container', this.container);
        this.tabs = container.querySelector('.trigger');
        console.log('tabs', this.tabs);
    }
}

export default Tabs;