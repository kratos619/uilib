import '../css/snackbar.css';
class Snackbar {
    constructor() {
        this.init();
        // this.textAreaContainer = ''
    }

    __changeColor(type) {
        let colorCode = {
            default: "#2E2E2E",
            warning: "#ffbb33",
            success: "#00C851",
            info: "#33b5e5",
            error: "#ff4444"
        };
        return colorCode[type];

    }
    init() {
        // create Dynamic Template
        /* <div id="ui-snackbar-notification-main" class="ui-snackbar squreAnimations">
                <div class="ui-snckbar-messageArea"></div>
                  <div class="ui-snackbar-footer"></div>
        </div> */
        this.mainParentDiv = document.createElement('div');
        this.snackbar = document.createElement('div');
        let textContentArea = document.createElement('div');
        let footer = document.createElement('div');
        this.mainParentDiv.className = "ui-mainParent-element";
        this.mainParentDiv.id = "ui-mainParentElement";
        this.snackbar.id = 'ui-snackbar-notification-main';
        this.snackbar.className = 'ui-snackbar';
        textContentArea.className = 'ui-snckbar-messageArea';
        footer.className = 'ui-snackbar-footer';
        this.snackbar.appendChild(textContentArea);
        this.snackbar.appendChild(footer);
        this.mainParentDiv.appendChild(this.snackbar);
        document.getElementsByTagName('body')[0].appendChild(this.mainParentDiv);
        this.textAreaContainer = textContentArea;
    }
    show(options) {
        if (!options.message) throw ("Message Required ex {message: 'some text' } ");
        document.querySelector('#ui-snackbar-notification-main .ui-snckbar-messageArea').innerText = options.message;
        this.snackbar.classList.add('ui-show-notification-cl');
        this.snackbar.style.backgroundColor = this.__changeColor(options.type) || this.__changeColor("default");
        if (options.cbfun || options.cbfun instanceof Function) {
            options.cbfun();
        }

        setTimeout(() => {
            this.snackbar.classList.remove('ui-show-notification-cl');
            document.getElementById('ui-snackbar-notification-main').remove();
        }, options.timeOut || 1000);

    }

}

export default Snackbar;