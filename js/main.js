/**
 * This wont do anything... I just want the js I write to be linted.
 * 
 */
(function(exports, $) {
  'use strict';

  /* Begin Model Constructor */

  var Vehicle = function(attrs) {
    var attr;
    
    // defaults
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

  /* End Model Constructor */


  var defaultCar = new Vehicle();
  defaultCar.set('mileage', '39999');

  var myCar = new Vehicle({make: 'Volkswagen', model: 'Jetta', year: '2003', mileage: '310000'});

  /* Begin Vehicle View stuff */
  
  Vehicle.prototype.render = function($tar) {
    // empty the target div
    $tar.empty();

    // create dom elements to hold the information
    var container = document.createElement('div'),

        itemMake = document.createElement('span'),
        itemModel = document.createElement('span'),
        itemYear = document.createElement('span'),
        itemMileage = document.createElement('span'),

        make = document.createTextNode('Make: ' + this.get('make')),
        model = document.createTextNode('Model: ' + this.get('model')),
        year = document.createTextNode('Year: ' + this.get('year')),
        mileage = document.createTextNode('Mileage: ' + this.get('mileage'));

    container.className = 'border rounded';

    itemMake.appendChild(make);
    itemModel.appendChild(model);
    itemYear.appendChild(year);
    itemMileage.appendChild(mileage);

    container.appendChild(itemMake);
    container.appendChild(itemModel);
    container.appendChild(itemYear);
    container.appendChild(itemMileage);

    // append the dom element into the page
    $tar.append(container);
  };

  /* End Vehicle View stuff */


  /* Start Controller stuff */

  $('#defaultCar').on('click', function(e) {
    var $tar = $('#defaultCarContainer');
    defaultCar.render($tar);
  });

  /* End Controller stuff */
  

}(this, jQuery));