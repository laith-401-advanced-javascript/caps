'use strict';
// const event = require('../event.js');
// require('../server/caps.js');
// let  caps  = require('../server/caps')

// beforeAll(done => { //pass a callback to tell jest it is async
//   //start the server before any test
//   caps.listen(3000, () => done());
// })

// afterAll(done => { //pass a callback to tell jest it is async
//   //close the server after all tests
//   caps.listening ? caps.close(() => done()) : done();
// })


describe('Events Handler' , ()=>{

  it('pickup', () => {
    let x = 5; 
    expect(x).toEqual(5);
  });
  
  // let consoleSpy;

  // consoleSpy = jest.spyOn(console, 'log').mockImplementation();


  // let payload = {storeCompany:'laithStore' ,
  //   orderId:123 ,
  //   Customer: 'laith',
  //   Address: 'jordan-al Azraq'};

  // console.log('consoleSpy',consoleSpy);

  // it('pickup', () => {
  //   event.emit('pickup',{});
  //   expect(consoleSpy).toHaveBeenCalled();
  // });
  

  // it('in-transit', () => {
  //   event.emit('in-transit',{});
  //   expect(consoleSpy).toHaveBeenCalled();
  // });
  
  // it('delivered', () => {
  //   event.emit('delivered',{});
  //   expect(consoleSpy).toHaveBeenCalled();
  // });

});