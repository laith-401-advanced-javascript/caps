'use strict';
const events = require('./events');

events.on('pickup', pickupFn);

/**
 * this function that take the payload as a argument to do the consols for the events (delevered and in-transit)
 * @param {*} payload 
 */
function pickupFn(payload){

  setTimeout(()=>{
    console.log(`DRIVER : picked up ${payload.orderId}`);
    events.emit('in-transit',payload);

  },1000);

  setTimeout(()=>{
    console.log(`DRIVER : delivered up ${payload.orderId}`);
    console.log(`VENDOR:  : thank you for delivering ${payload.orderId}`);
    events.emit('delivered',payload);

  },3000);

}

