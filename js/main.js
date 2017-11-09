/**
 * This wont do anything... I just want the js I write to be linted.
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

  Vehicle.prototype.set = function(attr, val) {
    this[attr] = val;
  };

  Vehicle.prototype.get = function(attr) {
    return this[attr];
  };

  var defaultCar = new Vehicle();
  defaultCar.set('mileage', '39999');

  var myCar = new Vehicle({make: 'Volkswagen', model: 'Jetta', year: '2003', mileage: '310000'});

  /* End  Model Constructor */

}(this, jQuery));