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
    
    user = ["a", "b", "c"]
    sum1 = 1
    sum2 = 2

    get total()
    { return this.sum1 + this.sum2 }

    get firstuser()
    { return this.user[0] }

    trackHandler(event) {
        this.address.city = event.target.value
    }
    changeHandler(event) {
        this.title = event.target.value
        
    }
}