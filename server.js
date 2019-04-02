//var database = require('./core/Database');
var main = require('./routing/main');

//Routing
var PORT = process.env.PORT || 8013;

//listen
main.listen(PORT, function() {
  console.log('Production express running at localhost: ' + PORT);
});
