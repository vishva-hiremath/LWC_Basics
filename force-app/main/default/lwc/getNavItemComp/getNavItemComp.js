import { LightningElement, wire } from 'lwc';
import { getNavItems } from 'lightning/uiAppsApi'


export default class GetNavItemComp extends LightningElement {

    result
    @wire(getNavItems, {
        navItemNames: ['standard-Account'],
        pageSize: 30
    })
    getNavHandler({data }) {
        if (data) {
            this.result = data.navItems[0]
            console.log(data);
        }
        }
}