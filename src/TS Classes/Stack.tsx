import { Vertex } from "./Graph";

export class Stack {
  public stack: Vertex[];
  public constructor() {
    this.stack = [];
  }
  public enstack(ver: Vertex) {
    this.stack.push(ver); // adds to the back
  }
  public destack(): Vertex | undefined {
    return this.stack.pop(); // pops from top of the stack
  }
  public isEmpty(): Boolean {
    return this.stack.length == 0;
  }
  public head(): Vertex {
    return this.stack[0];
  }
}
