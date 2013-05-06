/* jQuery Filer v 1.0
 * 
 * - Filtering elements apply Jquery fadeOut.
  * - jQuery dependency. 
 */
 'use strict';

 function Filter(elements, element, attr ) {

 	var _elements = elements, //element to filter.
 	var _element = element == null ? $('label', this) , element; //element to filter.
 	var _attr = attr == null ? 'title' , attr; //element to filter.


 	// Use this function to filter the element by string. 
 	this.search = function(string) {

 		if(string){
 			_elements.filter(function(index) {
 				if (_element.attr(_attr).toUpperCase().indexOf(string.toUpperCase()) < 0) {
 					return true;
 				}
 			}).fadeOut();
 		}else{ this.reset(); }
 	},

 	// Use this function if you want reset filter.
 	this.reset = function() {

 		_elements.filter(function(index) {
 		}).fadeIn();
 	}

 }

 var filter = Filter($('.items-accordeon-list'));

 filter.search("amarosa");
 filter.reset();

