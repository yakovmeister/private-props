let privateProperty = require('./../../index')

class Bar {
	constructor() {
		privateProperty(this).shouldNotBeAccessible = true
		privateProperty(this).shouldNotBeAccessible2 = true
		this.shouldBeAccessible = true
		this.shouldBeAccessible2 = true
	}

	getInaccessible() {
		return privateProperty(this).shouldNotBeAccessible
	}
}

module.exports = Bar