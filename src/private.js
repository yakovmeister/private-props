require('babel-polyfill')
/**
 * Simulate Private properties using WeakMap
 * @return [Function] sets or gets property from weakmap
 */
module.exports = () => {
	let properties = new WeakMap()
	let id, currentContextId = {}

    return (context) => {
    	/** assign random digit to our current context */
    	id = Math.random()
        
        if (!properties.has(context)) {
            properties.set(context, {})
            currentContextId[context] = id
        }

        if(id != currentContextId[context]) {
        	return {}
        }

        return properties.get(context)
    }
}