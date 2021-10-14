import { Vertex } from "./Graph";

export class Queue {
  public queue: Vertex[];
  public constructor() {
    this.queue = [];
  }
  public enqueue(ver: Vertex) {
    this.queue.push(ver); // adds to the back
  }
  public dequeue(): Vertex | undefined {
    return this.queue.shift(); // removes Vertex from front
  }
  public isEmpty(): Boolean {
    return this.queue.length == 0;
  }
  public head(): Vertex {
    return this.queue[0];
  }
}
