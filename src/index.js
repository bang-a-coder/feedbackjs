import { Feedback } from "./pragmas/index"

export * from "./.build_assets/index" // globalifies pragmajs, exports packages assets

export function _feedback(){
    let form =  new Feedback(...arguments)

    form.on('data', ()=> {
        console.log('DATA')
        console.log(form.data)
    })

    return form
}