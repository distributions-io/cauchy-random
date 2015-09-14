'use strict';

// FUNCTIONS //

var tan = Math.tan;


// CONSTANTS //

var PI = Math.PI;


// GENERATE CAUCHY RANDOM NUMBERS //

/**
* FUNCTION random( x0, gamma[, rand] )
*	Generates a random draw from a Cauchy distribution
*	with parameters `x0` and `gamma`.
*
* @param {Number} x0 - location parameter
* @param {Number} gamma - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( x0, gamma, rand ) {
	var u;
	if ( !rand ) {
		rand = Math.random;
	}
	u = rand();
	return x0 + gamma * tan( PI * ( u - 0.5 ) );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
