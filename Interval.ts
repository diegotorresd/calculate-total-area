class Interval {
  a: number;
  b: number;
  static EMPTY = new Interval(0, 0)

  constructor (a: number, b: number) {
    if (!(a <= b)) {
      throw new RangeError('a must be < b')
    }
    this.a = a
    this.b = b
  }

  equals (interval: Interval): boolean {
    return this.a === interval.a && this.b === interval.b
  }

  length (): number {
    return (this.b - this.a)
  }

  intersection (interval: Interval): Interval {
    let a = Math.max(interval.a, this.a)
    let b = Math.min(interval.b, this.b)
    if (a < b) {
      return new Interval(a, b)
    }
    return Interval.EMPTY
  }

}

export default Interval
