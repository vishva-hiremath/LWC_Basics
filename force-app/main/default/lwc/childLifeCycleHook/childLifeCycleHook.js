import { LightningElement } from 'lwc';

export default class ChildLifeCycleHook extends LightningElement {
    constructor() {
        super()
        console.log("Child constructor called")
    }

    connectedCallback() {
        console.log("Child connectedCallback called")
    }

    renderedCallback() {
        console.log("Child renderedCallback called")
    }

    disconnectedCallback() {
        alert("When LWC removed from DOM, disconnectedCallback called")
    }
    
}