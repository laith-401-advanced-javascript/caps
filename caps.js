'use strict';

const events = require('./events');
require('./vendor.js');
require('./driver.js');


events.on('pickup',payload => log('pickup',payload));
events.on('in-transit',payload => log('in-transit',payload));
events.on('delivered',payload => log('delivered',payload));
    

/**
 * this function that take two argument event and the payload 
 * @param {*} event 
 * @param {*} payload 
 */
function log(event , payload) {
  let time = new Date();
  console.log('EVENT :' ,{ event, time , payload});
}
    

