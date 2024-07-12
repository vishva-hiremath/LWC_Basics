import { LightningElement } from 'lwc';

export default class ConditionalFormatting extends LightningElement {
    isVisible = false
    name
    
    showInfo() {
        this.isVisible = true
    }

    handleChange(event) {
        this.name = event.target.value
    }
    get showdetails() {
        return this.name === 'hello'
    }

}