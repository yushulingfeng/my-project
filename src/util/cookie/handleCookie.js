import {
    selectGoods,
    addGoods,
    updateGoods,
    clearGoods
} from './goods'

const handleCookie = {

}

handleCookie.goods = function(handle = "ADD", payload) {
    switch (handle) {
        case "ADD":
            addGoods(payload)
            return
        case "CLEAR":
            clearGoods()
            return
        case "UPDATE":
            updateGoods(payload)
            return
        case "SELECT":
            const { type } = payload
            return selectGoods(type, payload)
        default:
            break
    }
}


export default handleCookie