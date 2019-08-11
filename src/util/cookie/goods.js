function selectGoods(type = "ALL", payload) {
    let result = {}
    const goods = Cookies.getJSON("goods") || []
    if (type == "ALL") {
        return goods
    } else {
        const { gid } = payload
        for (let item of goods) {
            if (item.gid == gid) {
                result = item
            }
        }
    }
    return result
}

function clearGoods() {
    Cookies.remove("goods")
}

function updateGoods(payload) {
    const { buyNum, gid } = payload
    const goods = selectGoods("ALL")
    for (let good of goods) {
        if (good.gid == gid) {
            good.buyNum = buyNum
        }
    }
    Cookies.set("goods", goods)
}

function addGoods(payload) {
    const good = selectGoods("SINGLE", payload)
    const goods = selectGoods("ALL")
    if (JSON.stringify(good) == "{}") {
        goods.push(payload)
        Cookies.set("goods", goods)
    }
}

export {
    selectGoods,
    addGoods,
    updateGoods,
    clearGoods
}