import { LightningElement, api} from 'lwc';

export default class P2cChildCompCommunication extends LightningElement {
    @api message
    @api number
    @api isValid
    @api titleHeading
}