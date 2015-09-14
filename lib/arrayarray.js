'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, x0, gamma[, rand] )
*	Creates a multidimensional array of Cauchy distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} x0 - location parameter
* @param {Number} gamma - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with Cauchy random numbers
*/
function random( dims, x0, gamma, rand ) {
	var draw = partial( x0, gamma, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
