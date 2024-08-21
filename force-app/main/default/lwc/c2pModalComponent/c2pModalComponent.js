import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    buttonHandler() {
        const myEvent = new CustomEvent('close', { bubbles: true,
            detail: { msg: "Modal Closed Successfully"}
        })
        this.dispatchEvent(myEvent)
    }

    footerHandler() {
        console.log("Footer handler called")
    }
}