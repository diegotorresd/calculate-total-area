import Interval from './Interval'

class Rectangle {
  i_X: Interval;
  i_Y: Interval;

  constructor (x0: number, y0: number, x1: number, y1: number) {
    this.i_X = new Interval(x0, x1)
    this.i_Y = new Interval(y0, y1)
  }

  equals (rect: Rectangle): Boolean {
    return this.i_X.equals(rect.i_X) && this.i_Y.equals(rect.i_Y)
  }

  area (): number {
    return (this.i_X.length()) * (this.i_Y.length())
  }

  intersection (rect: Rectangle): Rectangle {
    let { a: x0, b: x1 } = this.i_X.intersection(rect.i_X)
    let { a: y0, b: y1 } = this.i_Y.intersection(rect.i_Y)
    return new Rectangle(x0, y0, x1, y1)
  }
}

export default Rectangle
