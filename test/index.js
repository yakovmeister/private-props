var assert = require('assert')
var bar = require('./classes/bar')
var props = require('./../index')

describe('PDF2Pic', () => {
    it("should not access private functions", function () {
        bar = new bar() 
       return assert(bar.shouldNotBeAccessible == undefined, "undefined is returned")
    })

    it("should not access private functions #2", function () {
       return assert(props(bar).shouldNotBeAccessible == undefined, "undefined is returned")
    })
})