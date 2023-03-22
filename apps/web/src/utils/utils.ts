function makeid(length: number) {
    if (isNaN(length)) {
        throw new TypeError('Length must be a number')
    }
    if (length < 1) {
        throw new RangeError('Length must be at least 1')
    }
    let possible = '0123456789'
    let string = ''
    for (let i = 0; i < length; i++) {
        string += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return string
}


export {makeid}
