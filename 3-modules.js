const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mindgrenade')

console.log(names)


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
