var restify = require( 'restify' );

function resp( req, res, next ){
    res.send( 'Hello ' + req.params.name );
    next();
}

var server = restify.createServer();
server.get('/hello/:name', resp);
server.head('/hello/:name', resp);

server.listen( 8000, function(){
    console.log( 'listen at port 8000' );
});
