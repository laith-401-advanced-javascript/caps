'use strict';
const event = require('../events.js');
require('../caps.js');



describe('Events Handler' , ()=>{
  let consoleSpy;

  consoleSpy = jest.spyOn(console, 'log').mockImplementation();


  let payload = {storeCompany:'laithStore' ,
    orderId:123 ,
    Customer: 'laith',
    Address: 'jordan-al Azraq'};

  console.log('consoleSpy',consoleSpy);

  it('pickup', () => {
    event.emit('pickup',payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
  

  it('in-transit', () => {
    event.emit('in-transit',payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
  
  it('delivered', () => {
    event.emit('delivered',payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

});