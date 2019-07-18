const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

// event 'newListener'
myEmitter.once('newListener', (event, listener)=>{
  console.log('event:', event, listener)
  if(event == 'event'){

  }
})
myEmitter.on('event', ()=>{
  console.log('an event occurred!')
})
myEmitter.emit('event');