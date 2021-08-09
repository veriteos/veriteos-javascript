export class Counter {
  private counter: number;

  private static instance: Counter;

  constructor() {
    this.counter = 0;
  }

  public static getInstance() {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  get count() {
    return this.counter;
  }

  increment() {
    return (this.counter += 1);
  }
}
