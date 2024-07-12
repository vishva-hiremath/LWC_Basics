import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    family = ["Vishva", "Anvika", "Parvathi"]
    
    ceoList = [
        {
            id: 1,
            company: "Google",
            name:"Sundar Pichai"
        
        },
        {
            id: 2,
            company: "Facebook",
            name:"Mark Zuckerberg"
        },
        {
            id: 3,
            company: "Microsoft",
            name:"Bill Gates"
        },
        {
            id: 4,
            company: "Amazon",
            name:"Jeff Bezos"
        }
    ]
}