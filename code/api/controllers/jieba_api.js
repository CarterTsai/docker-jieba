'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var nodejieba = require("nodejieba");
/* Load Directorys */
nodejieba.load();
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
	cuts: cuts,
	cutAll: cutAll,
	cutHMM: cutHMM,
	cutForSearch: cutForSearch,
	cutSmall: cutSmall,
	tag: tag,
	extract: extract,
	insertWord: insertWord
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function cuts(req, res) {
	// variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
	// console.log(req.swagger.params.words);
	var words = req.swagger.params.words.value || '';
	var models = req.swagger.params.models.value || false;
	// var hello = util.format('Hello, %s!', name);
	var result = nodejieba.cut(words, models);
	// this sends back a JSON response which is a single string
	res.json(result);
}

function cutAll(req, res) {
	var words = req.swagger.params.words.value || '';
    var result = nodejieba.cutAll(words);
	res.json(result);
}

function cutHMM(req, res) {
    var words = req.swagger.params.words.value || '';
    var result = nodejieba.cutHMM(words);
	res.json(result);
}

function cutForSearch(req, res) {
    var words = req.swagger.params.words.value || '';
    var result = nodejieba.cutForSearch(words);
	res.json(result);
}

function cutSmall(req, res) {
    var words = req.swagger.params.words.value || '';
    var result = nodejieba.cutSmall(words);
	res.json(result);
}

function tag(req, res) {
    var words = req.swagger.params.words.value || '';
    var result = nodejieba.tag(words);
	res.json(result);
}

function extract(req, res) {
    var words = req.swagger.params.words.value || '';
    var topN = req.swagger.params.topN.value || 5;
    var result = nodejieba.extract(words, topN);
	res.json(result);
}

function insertWord(req, res) {
    var words = req.swagger.params.words.value || '';
    var result = nodejieba.insertWord(words);
	res.json(result);
}
