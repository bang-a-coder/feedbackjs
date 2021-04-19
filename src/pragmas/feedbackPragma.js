import {html, Pragma, _e} from 'pragmajs'
import { SVG } from '../.build_assets/index'
import {LoveTemplate, ThanksTemplate, Template, StarTemplate} from '../.build_assets/templates'

console.log('TIIIITS')




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
                        setTimeout(() => {
                           this.element.html(' ')
                           ThanksTemplate().appendTo(this.element)
                        }, 200);
                    })
        
                    this.element.find('#yes').listenTo('click', ()=>{
                        setTimeout(() => {
                            this.element.html(' ')

                            ThanksTemplate().appendTo(this.element)

                            createTab('https://chrome.google.com/webstore/detail/fready/fbfecjjfhcgpocehenopdofhkdjfpcgl/reviews')

                        }, 200); 
                    })
                })
            }, 200);
            
            
            
        }
    }
}


function createTab(link){
    _e('a').attr('href', link).attr('target', '_blank').appendTo('body').click()
}