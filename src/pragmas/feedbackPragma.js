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

export class Feedback extends Pragma{
    constructor(questionUno){
        super()
        this.questionUno = questionUno

        this.visualise()
    }

    visualise(){

        this.element = Template(this.questionUno).appendTo('body')


        let stars = _p('starsPragma')
                        .as(this.element.find('.stars'))
                        .run(function(){

                            let i = 0
                            while (i<5) {
                                i++
                                this.contain(StarTemplate().appendTo(this))
                                // this.append(StarTemplate())
                            }


                        })
                        .run(function() { 
                            this.createWire('stars')
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
                                this.setStars(i)
                            }

                            this.unhover = function(i) {
                                if (i === 0) this.setStars(-1)
                            }

                        })
                        .run(function(){
                            console.log(this.children)
                            this.children.forEach((element,i) => {
                                element.listenTo('mouseenter', () => {
                                    this.hover(i)
                                })

                                element.listenTo('mouseleave', () => {
                                    this.unhover(i)
                                })
                            })
                        })

    }
}