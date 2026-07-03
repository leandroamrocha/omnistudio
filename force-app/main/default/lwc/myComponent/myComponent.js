import { LightningElement, api } from 'lwc';

export default class MyComponent extends LightningElement {
    @api message;
    ready = false;
    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
        }, 3000);
    }
}