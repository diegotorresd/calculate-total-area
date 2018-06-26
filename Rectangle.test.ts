import Rectangle from './Rectangle'
import { expect } from 'chai'
import 'mocha'

describe('Rectangle', function () {
  it('area()', function () {
    let rect = new Rectangle(0, 0, 2, 2)
    expect(rect.area()).to.equal(4)
  })
  it('intersection() is symmetric', function () {
    let rect1 = new Rectangle(0, 0, 3, 3)
    let rect2 = new Rectangle(1, 1, 4, 3)
    let intersection1 = rect1.intersection(rect2)
    let intersection2 = rect2.intersection(rect1)
    expect(intersection1.equals(intersection2)).to.equal(true)
    expect(intersection2.equals(intersection1)).to.equal(true)
  })
  it('intersection(), partially contained', function () {
    let rect1 = new Rectangle(0, 0, 3, 3)
    let rect2 = new Rectangle(1, 1, 4, 3)
    let actual = rect1.intersection(rect2)
    let expected = new Rectangle(1, 1, 3, 3)
    expect(actual.equals(expected)).to.equal(true)
  })
  it('intersection(), fully contained', function () {
    let rect1 = new Rectangle(-3, -3, 3, 3)
    let rect2 = new Rectangle(0, 0, 1, 1)
    let actual = rect1.intersection(rect2)
    expect(actual.equals(rect2)).to.equal(true)
  })
  it('intersection(), no intersection', function () {
    let rect1 = new Rectangle(0, 0, 3, 3)
    let rect2 = new Rectangle(4, 4, 6, 6)
    let actual = rect1.intersection(rect2)
    let expected = new Rectangle(0, 0, 0, 0)
    expect(actual.equals(expected)).to.equal(true)
  })
})