import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    title = "Vishva"
    description = "I am "

    @track
    address = {
        "city": "New York",
        "state": "New York",
        "country": "USA"
    }

    trackHandler(event) {
        this.address.city = event.target.value
    }
    changeHandler(event) {
        this.title = event.target.value
        
    }
}