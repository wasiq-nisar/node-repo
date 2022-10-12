const EventEmitter = require('events');     //EventEmitter is a class

const customEmitter = new EventEmitter();   //We made a instance, customeEmiiter our class EventEmitter

//In customEmitter.on() the 1st Argument is Name of the event and the 2nd Argument is a callback function that what is done when a event is listened
customEmitter.on('response', (name, age) => {
    console.log(`Data Recieved: Name is ${name} and age is ${age}`);
})

customEmitter.emit('response', 'Wasiq', 21);