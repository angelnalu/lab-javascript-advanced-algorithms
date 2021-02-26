
class QueueDataStructure {
  constructor() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

  display = () => {
    return this.queueControl;
  }

  isEmpty = () => {
    if (this.queueControl.length > 0) return false;
    return true;
    }


  canEnqueue = () => {
    if(this.queueControl.length == this.MAX_SIZE) return false;
    return true;
  };

  enqueue = (queueElement) => {
    if(this.canEnqueue()){
      this.queueControl.unshift(queueElement)
      return this.queueControl
    } else {
      return "Queue Overflow"
    }
  };

  dequeue = () => {
    if(this.isEmpty()) {
      return "Queue Underflow"
    } else {
      return this.queueControl.pop()
    }
  };
};