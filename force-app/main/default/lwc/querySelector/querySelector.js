import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    users=['Vishva','Anvika', 'Keerti']
    fetchDetails() {
        const elem = this.template.querySelector('h1')
        elem.style='color:red;border:1px solid'
        console.log(elem.innerText);

        const userA = this.template.querySelectorAll('.name')
        Array.from(userA).forEach(element => {
          
            console.log(element.innerText)
            element.setAttribute("title",element.innerText)
        })

        const shadDom = this.template.querySelector('.LWCDOM')
        shadDom.innerHTML='<p>I am a child element</p>'
        

    }
}