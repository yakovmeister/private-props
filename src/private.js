require('babel-polyfill')
/**
 * Simulate Private properties using WeakMap
 * @return [Function] sets or gets property from weakmap
 */
module.exports = () => {
	let properties = new WeakMap()
	let currentContext = {}

    return (context) => {
        
        if (!properties.has(context)) {
            properties.set(context, {})
            currentContext[context] = JSON.stringify(context)
        }

        if(JSON.stringify(context) != currentContext[context]) {
        	return {}
        }

        return properties.get(context)
    }
}