import { LightningElement, wire } from 'lwc';
import id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields =[NAME_FIELD, EMAIL_FIELD]


export default class WireDemoUserDetail extends LightningElement {

    userId = id
    //005ak000003V7ZlAAK
    
    userDetails
    @wire(getRecord, { recordId:'$userId', fields:[NAME_FIELD, 'User.Email', 'User.Phone']})
    userDetailHandler({data, error}) {
        if (data) {
            this.userDetails = data.fields;
        }
        if (error) {
            console.error(error)
        }
    };

    @wire(getRecord, { recordId: '$userId', fields: fields })
    userProperty
}