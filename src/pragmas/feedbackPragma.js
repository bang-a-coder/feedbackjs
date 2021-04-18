import {html, Pragma} from 'pragmajs'
import { SVG } from '../.build_assets/index'

console.log('TIIIITS')


const Template = (title) => html`
<div class='feedback-form'>
    <h1 class='question-uno'>${title}</h1>
    <div class='star'>
        ${SVG('star-empty')}
    </div>

</div>
` 

export class Feedback extends Pragma{
    constructor(questionUno){
        super()
        this.questionUno = questionUno

        this.visualise()
    }

    visualise(){

        this.element = Template(this.questionUno).appendTo('body')

        _e('question-uno').html(this.questionUno)
    }
}