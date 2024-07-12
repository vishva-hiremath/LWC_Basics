import { LightningElement } from 'lwc';

export default class ConditionalFormatting extends LightningElement {
    isVisible = false
    
    showInfo() {
        this.isVisible = true
    }
}