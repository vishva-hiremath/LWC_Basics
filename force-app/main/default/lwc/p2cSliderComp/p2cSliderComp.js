import { LightningElement, api } from 'lwc';

export default class P2cSliderComp extends LightningElement 
{
    val 

    changeHandler(event) {
        this.val = event.target.value
    }

    handleClick() {
        this.template.querySelector('c-p2c-slider-comp').resetHandler()
    }

    @api resetHandler() {
        this.val = 50
    }
}