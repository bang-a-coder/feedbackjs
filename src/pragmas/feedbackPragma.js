import {html, Pragma} from 'pragmajs'
import { SVG } from '../.build_assets/index'

console.log('TIIIITS')


const Template = (title) => html`
<div class='feedback-form'>
    <h1 class='question-uno'>${title}</h1>
   <div class="stars"></div> 

</div>
` 

const StarTemplate = ()=> {
    return html`
    <div class='star'>
               ${SVG('star-empty')}
               ${SVG('star-full')}
    </div>
   `
}

const LoveTemplate = () =>{
    return html`
    <div class='choice fade-onload'>
        <h1 class='thanks-message'>Thanks! Mind leaving a store review?</h1>
        <div class="buttons">
            <div class='button' id='no'>Nop</div>
            <div class='button' id='yes'>Sure<div>
        </div>
    </div>
    `
}


const ThanksTemplate = () => {
    return html`
        <div class='thanks fade-onload'>
            ${SVG('white-icon')}
            <h1 class='thanks-message'>Thanks for your time, you help make Fready better :)</h1>
        </div>
    `
}

export class Feedback extends Pragma{
    constructor(questionUno){
        super()
        this.questionUno = questionUno

        this.visualise()
        this.logic(3)
    }

    visualise(){

        this.element = Template(this.questionUno).appendTo('body')


        this.stars = _p('starsPragma')
                        .as(this.element.find('.stars'))
                        .createWires('stars')
                        .createEvents('judge')
                        .run(function(){

                            let i = 0
                            while (i<5) {
                                i++
                                this.contain(StarTemplate().appendTo(this))
                            }

                        })
                        .run(function() { 
                             this.on('starsChange', (v, lv) => {
                                this.fillStars(v)

                            })

                            this.fillStars = (i) => {
                                this.children.forEach((e,index) => {
                                    if (index <= i){
                                        return e.addClass('filled')
                                    }
                                    e.removeClass('filled')
                                })
                            }

                            this.hover = function(i) {
                                // set stars to i ()
                                this.setStars(i)
                            }

                            this.unhover = function(i) {
                                if (i === 0) this.setStars(-1)
                            }

                        })
                        .run(function listeners(){
                            console.log(this.children)
                            this.children.forEach((element,i) => {
                                element.listenTo('mouseenter', () => {
                                    // hover over ith star
                                    this.hover(i)
                                })

                                element.listenTo('mouseleave', () => {
                                    this.unhover(i)
                                })

                                //Make stars blue when selected
                                element.listenTo('click', ()=>{
                                    console.log(i+1)
                                    this.children.forEach(kid => {
                                        if (kid.classArray.includes('filled')) {kid.addClass('selected')}
                                    })

                                    this.triggerEvent('judge', i+1)

                                })
                            })
                        })
                        .on('judge', (rating)=>{
                            this.logic(rating)
                        })
    }

    logic(rating){
        if (rating<=3){
            console.log('Hates us')


        }

        if (rating>3){
            setTimeout(() => {
                this.element.html(' ')

                LoveTemplate().appendTo(this.element) 

                this.element.onRender(()=>{
    
                    this.element.find('#no').listenTo('click', ()=>{
                        console.log('no')

                        setTimeout(() => {
                           this.element.html(' ')

                           ThanksTemplate().appendTo(this.element)

                        }, 200);
                    })
        
                    this.element.find('#yes').listenTo('click', ()=>{
                        console.log('yes')
                    })
                })
            }, 200);
            
            
            
        }
    }
}