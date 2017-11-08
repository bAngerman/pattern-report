/**
 * 
 */
(function(exports, $) {
  'use strict';

  /* Begin Model Constructor */

  var Vehicle = function(attrs) {
    var attr;
    
    // defaults:
    this.make = 'Honda';
    this.model = 'Civic';
    this.year = '1999';
    this.mileage = '20000';

    // mixin initial values
    if (attrs) {
      for (attr in attrs) {
        this[attr] = attrs[attr];
      }
    }
  };

  /* End  Model Constructor */

}(this, jQuery));