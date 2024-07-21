import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
isVisible = false

    constructor() {
        super()
        console.log("Parent constructor called")
    }
    connectedCallback() {
        console.log("Parent connectedCallback called")
    }
    renderedCallback() {
        console.log("Parent renderedCallback called")
    }
    name
    onChange(event) {
        this.name = event.target.value;
    }

    submitHandler() {
        this.isVisible = !this.isVisible
    }

    errorCallback(error, stack) {
        console.log(error.message)
        console.log("Stack" + stack)
    }
}