'use strict';

const io = require('socket.io')(3000);


const caps = io.of("/caps");

caps.on('connection', (socket) => {
  console.log(new Date().toLocaleTimeString(), 'Connected : ', socket.id);

  let currentRoom = '';

  socket.on('join', (room) => {

    socket.join(room);
    currentRoom = room;

    console.log({ currentRoom });

  })

  socket.on('pickup', (payload) => {
    caps.emit('pickup', payload);
    broadcast('pickup',payload);
  });

  socket.on('in-transit', (payload) => {
    // send the message to everyone in the currentRoom
    caps.to(currentRoom).emit('in-transit', payload);
    broadcast('in-transit',payload);

  });
  
  socket.on('delivered', (payload) => {
    // send the message to everyone in the currentRoom
    caps.to(currentRoom).emit('delivered', payload);
    broadcast('delivered',payload);

  });

})


function broadcast(event , payload){
console.log({event,payload});
}

// const port = process.env.PORT || 4000;
// server.listen(port, () => console.log(`server runing on ${port}`));

// let socketPool = {};


// server.on('connection', (socket) => {
//   console.log(' user is online !!!');

//   let id = uuid();
//   socketPool[id] = socket;

//   socket.on('data', buffer => {
//     // encoded buffer
//     // console.log("buffer >>>> ", buffer);
//     // parse buffer
//     let msg = JSON.parse(buffer.toString());
//     console.log('msg >>> ', msg);

//     if (msg.event == 'pickup' || msg.event == 'in-transit' || msg.event == 'delivered') {
//       broadcast(msg);
//     }else {
//       console.log('nothing');
//     }

//   });

//   server.on('error', (e) => {
//     console.log('ERROR !!!!!!! ', e);
//   });

//   server.on('close', () => {
//     delete socketPool[id];
//   });

// });

// /**
//  * this function send the payload to the driver and vendor
//  * @param {*} msg 
//  */
// function broadcast(msg) {
//   let payload = JSON.stringify(msg);
//   for (let id in socketPool) {
//     socketPool[id].write(payload);
//   }
// }


// module.exports = server