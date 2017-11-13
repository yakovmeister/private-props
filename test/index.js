var assert = require('assert')
var Bar = require('./classes/bar')
var props = require('./../index')

describe('PDF2Pic', () => {
    it("should not access private functions", function () {
        bar = new Bar() 
       return assert(bar.shouldNotBeAccessible == undefined, "undefined is returned")
    })

    it("should not access private functions #3", function () {
        return assert(props(Bar).shouldNotBeAccessible == undefined, "undefined is returned")
     })
})