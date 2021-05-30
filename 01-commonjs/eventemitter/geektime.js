// 观察者模式：EventEmitter
const EventEmitter = require('events').EventEmitter;

// 一个简单的事件收发器
class Geektime extends EventEmitter {
  constructor() {
    super();

    setInterval(() => {
      this.emit('newlesson', {
        price: Math.random() * 100
      })
    }, 3000)
  }
}

module.exports = new Geektime;