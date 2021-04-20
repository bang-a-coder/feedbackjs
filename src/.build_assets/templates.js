import {html, Pragma, _e} from 'pragmajs'
import { SVG } from '../.build_assets/index'

export const Template = (title) => html`
<div class='feedback-form'>
    ${SVG('close-icon')}
    <div class="content">
        <h1 class='question-uno'>${title}</h1>
        <div class="stars"></div>
    </div>

</div>
` 


export const StarTemplate = ()=> {
    return html`
    <div class='star'>
               ${SVG('star-empty')}
               ${SVG('star-full')}
    </div>
   `
}

export const LoveTemplate = (copy) =>{
    return html`
    <div class='choice fade-onload'>
        <h1 class='thanks-message'>${copy}</h1>
        <div class="buttons">
            <div class='button' id='no'>Nop</div>
            <div class='button' id='yes'>Sure<div>
        </div>
    </div>
    `
}


export const ThanksTemplate = (copy) => {
    return html`
        <div class='thanks fade-onload'>
            ${SVG('white-icon')}
            <h1 class='thanks-message'>${copy}</h1>
        </div>
    `
}

export const AdviceTemplate = (copy) => {
    return html`
    <div class='advice fade-onload'>
        <textarea name="myInput" maxlength="500" required placeholder="${copy}"></textarea>

        <div class='button' id='send-advice'>Send</div>
    </div>
    `

}