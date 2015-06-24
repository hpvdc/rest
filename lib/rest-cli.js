var assert = require( 'assert' );
var restify = require( 'restify' );

var client = restify.createClient({
    url: 'http://localhost:8000'
});


client.get( '/echo/hugo', function( err, req, res, obj){
    assert.ifError( err );
    console.log( 'Server returned: ' + JSON.stringify( obj ) );
});
