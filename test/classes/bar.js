let privateProperty = require('./../../index')

class Bar {
	constructor() {
		privateProperty(this).shouldNotBeAccessible = true
		this.shouldBeAccessible = true
	}

	getInaccessible() {
		return privateProperty(this).shouldNotBeAccessible
	}
}

module.exports = Bar