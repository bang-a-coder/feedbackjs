import { Feedback } from "./pragmas/index"

export * from "./.build_assets/index" // globalifies pragmajs, exports packages assets

export function _feedback(){
    return new Feedback(...arguments)
}