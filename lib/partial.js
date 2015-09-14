'use strict';

// FUNCTIONS //

var tan = Math.tan;


// CONSTANTS //

var PI = Math.PI;


// PARTIAL //

/**
* FUNCTION: partial( x0, gamma[, rand] )
*	Partially applies `x0` and `gamma` and returns a function
*	to generate random variables from the Cauchy distribution.
*
* @param {Number} x0 - location parameter
* @param {Number} gamma - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( x0, gamma, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a Cauchy distribution with parameters `x0` and `gamma`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = rand();
		return x0 + gamma * tan( PI * ( u - 0.5 ) );
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
