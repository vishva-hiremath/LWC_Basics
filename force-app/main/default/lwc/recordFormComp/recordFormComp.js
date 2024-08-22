import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class RecordFormComp extends LightningElement {
    objectName = ACCOUNT_OBJECT
    fields = [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD]
}