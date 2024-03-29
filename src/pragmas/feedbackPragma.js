import {html, Pragma, _e, _p} from 'pragmajs'
import { SVG } from '../.build_assets/index'
import {LoveTemplate, ThanksTemplate, Template, StarTemplate, AdviceTemplate} from '../.build_assets/templates'

console.log('TIIIITS')




export class Feedback extends Pragma{
    constructor(obj){
        super()
        this.starsCopy = obj.starsCopy
        this.ratingCopy = obj.ratingCopy
        this.feedbackPlaceholder = obj.feedPlaceholder
        this.thanksCopy = obj.thanksCopy
        this.link = obj.link
        this.nextSteps = obj.nextSteps //whether shit happens after star rating
        this.data = {
            rating: null, //1-5 stars, do they love us?
            review: null, //true/false , did they go to review us on the store?
            feedback: '', // string, how can we improve section
            'manual-exit': false // true/false if they closed the form
        }

        this.initialise()
    }

    initialise(){

        let FeedbackOG = this

        this.element = Template(this.starsCopy).appendTo('body')

        this.createEvent('data')

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
                        .run(function starSystem() { 
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

                                    FeedbackOG.data.rating = i+1

                                    this.triggerEvent('judge', i+1)

                                })
                            })
                        })
                        .on('judge', (rating)=>{
                            this.logic(rating)
                        })
        
        //Close button
        this.element.find(`[data-name='close-icon']`).listenTo('click', ()=>{
            this.data['manual-exit'] = true
            this.close(200)
        })
    }

    logic(rating){

        //If rating is <=3, ask for feedback
        if (rating<=3){
            console.log('Hates us')

            if (this.nextSteps == 0){
                setTimeout(() => { this.thanks() }, 200); 

                return
            }

            if (this.nextSteps >= 1){
                setTimeout(() => {
                    changeFacade(this.element.find('.content'), AdviceTemplate, this.feedbackPlaceholder)
    
                    this.element.find('#send-advice').listenTo('click', ()=>{
                        console.log(this.element.find('textarea').value)
    
                        this.data.feedback = this.element.find('textarea').value 
    
                        setTimeout(() => { this.thanks() }, 200);
                    })
                }, 200);
            }
            

        }

        //If rating is >3, ask for store review
        if (rating>3){

            if (this.nextSteps < 2){
                setTimeout(() => { this.thanks() }, 200); 

                return
            }
            
            setTimeout(() => {
                changeFacade(this.element.find('.content'), LoveTemplate, this.ratingCopy)

                this.element.onRender(()=>{
    
                    this.element.find('#no').listenTo('click', ()=>{
                        setTimeout(() => {
                            this.data.review = false
                            this.thanks()
                        }, 200);
                    })
        
                    this.element.find('#yes').listenTo('click', ()=>{
                        setTimeout(() => {
                            this.data.review = true
                            createTab(this.link)
                            this.thanks()
                        }, 200); 
                    })
                })
            }, 200);
            
            
            
        }
    }

    close(time){
        setTimeout(() => {
            this.element.addClass('fadeout')
            this.triggerEvent('data')
        }, time);

        setTimeout(() => {
           this.element.hide() 
        }, time + 100);
    }

    thanks(){
        changeFacade(this.element.find('.content'), ThanksTemplate, this.thanksCopy)
        this.close(5000)
    }
}


function createTab(link){
    _e('a').attr('href', link).attr('target', '_blank').appendTo('body').click()
}

function changeFacade(parent, template, copy = undefined) {
    parent.html(' ')
    template(copy).appendTo(parent)
}

function fade(element){(element.opacity-=.1)<0?element.display="none":setTimeout(fade(element),40)}