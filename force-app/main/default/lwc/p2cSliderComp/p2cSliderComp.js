import { LightningElement, api } from 'lwc';

export default class P2cSliderComp extends LightningElement 
{
    val 
    test

    changeHandler(event) {
        this.val = event.target.value
    }

    @api resetHandler() {
        this.val = 50
    }
}