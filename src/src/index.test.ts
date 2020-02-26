const sum = require('./index').default

test('1 + 1 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})
