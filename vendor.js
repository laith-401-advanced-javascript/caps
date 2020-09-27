'use strict';
const events = require('./events');
require('dotenv').config();
var faker = require('faker');

/**
  * this function to have an object and use the fake data inside the obj and emit for events pickup
  */
function dataObj(){
    
  let obj = { storeCompany: process.env.STORE_NAME,
    orderId : faker.random.number() ,
    Customer: faker.name.findName() ,
    Address: faker.address.streetAddress(), 
  };    

  events.emit('pickup', obj);

}

setInterval(dataObj,5000);

