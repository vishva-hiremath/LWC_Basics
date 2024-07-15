import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    questions = [
        {
            id: "Question1",
            question: "What is the capital of France?",
            answers: 
                {
                    a: "Tokyo",
                    b: "New Delhi",
                    c: "Berlin",
                    d: "Paris"
                },
                correctAnswer: "d"
        }, {
            id: "Question2",
            question: "What is the capital of Spain?",
            answers:
            {
                a: "Barcelona",
                b: "New York",
                c: "Madrid",
                d: "Tokyo"
            },
            correctAnswer: "c"
        
        }, {
            
            id: "Question3",
            question: "What is the capital of Italy?",
            answers:
            {
                a: "Rome",
                b: "Venice",
                c: "Milan",
                d: "Berlin"
            },
            correctAnswer: "a"
        }
    ]
    selected = {}
    correctAnswers = 0
    isSubmitted = false

    //this gets called for each question answer submitted
    
    changeHandler(event) {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const { name, value } = event.target;
        
        this.selected = {...this.selected, [name]:value}
        console.log(this.selected)
    }
   //To disable the button when no option is selected
    get isDisabled() {
        return !(Object.keys(this.selected).length === this.questions.length)
    }

    // on click of submit this gets called
    submitHandler(event) {
        event.preventDefault()
        let correct = this.questions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        console.log("correctAnswers", this.correctAnswers)
        this.isSubmitted = true
    }
    // on click of reset button, this gets called
    reset() {
        this.selected = {}
        this.correctAnswer = 0
        this.isSubmitted = false
    }
//this is for different colors based the answers
    get isScoredFull() {
        return `slds-text-heading_large ${this.correctAnswers === this.questions.length ?
            'slds-text-color_success':'slds-text-color_error'
        }`
    }

}