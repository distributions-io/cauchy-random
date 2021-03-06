'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isPositive = require( 'validate.io-positive-primitive' ),
	isNumber = require( 'validate.io-number-primitive' ),
	isPositiveInteger = require( 'validate.io-positive-integer' ),
	isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination for validated options
* @param {Object} options - function options
* @param {Number} [options.x0] - location parameter
* @param {Number} [options.gamma] - scale parameter
* @param {String} [options.dtype] - output data type
* @param {Number} [options.seed] - integer-valued seed
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'random()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'x0' ) ) {
		opts.x0 = options.x0;
		if ( !isNumber( opts.x0 ) ) {
			return new TypeError( 'random()::invalid option. `x0` parameter must be a number primitive. Option: `' + opts.x0 + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'gamma' ) ) {
		opts.gamma = options.gamma;
		if ( !isPositive( opts.gamma ) ) {
			return new TypeError( 'random()::invalid option. `gamma` parameter must be a positive number. Option: `' + opts.gamma + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !isString( opts.dtype ) ) {
			return new TypeError( 'random()::invalid option. Data type option must be a string primitive. Option: `' + opts.dtype + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'seed' ) ) {
		opts.seed = options.seed;
		if ( !isPositiveInteger( opts.seed ) ) {
			return new TypeError( 'random()::invalid option. Seed option must be a positive integer. Option: `' + opts.seed + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
