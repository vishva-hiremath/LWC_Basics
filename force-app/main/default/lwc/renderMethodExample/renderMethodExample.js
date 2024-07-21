import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signoutTemplate from './signoutTemplate.html'
import renderMethodExample from './renderMethodExample.html'


export default class RenderMethodExample extends LightningElement {
    
    selectedBtn=''
    render() {
        return this.selectedBtn === 'Sign In' ? signinTemplate :
            this.selectedBtn === 'Sign Up' ? signoutTemplate : renderMethodExample
    }

    handleClick(event) {
        this.selectedBtn = event.target.label
    }

    submitHandler(event) {
        console.log(`${event.target.label}  Successfully`)
    }
}