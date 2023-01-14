const sum = (x: number, y: number) => x + y

describe('Math fn', () => {
  it('should 2 + 2 equal 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
