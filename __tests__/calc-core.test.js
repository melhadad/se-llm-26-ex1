const calc = require('../calc-core')

describe('calc-core', () => {
  test('add', () => { expect(calc.add(1,2)).toBe(3) })
  test('sub', () => { expect(calc.sub(5,3)).toBe(2) })
  test('mul', () => { expect(calc.mul(4,3)).toBe(12) })
  test('div', () => { expect(calc.div(10,2)).toBe(5) })
  test('div by zero throws', () => { expect(() => calc.div(1,0)).toThrow('divide by zero') })
  test('percent', () => { expect(calc.percent(50)).toBe(0.5) })
  test('toggleSign', () => { expect(calc.toggleSign(5)).toBe(-5) })
})
