const moveForward = require('./moveForward')

test('Move Forward test1', () => {
    expect(moveForward('N')).toBe(-1)
})
// to check each test first change the default direction in moveForward file
/*
test('Move Forward test2', () => {
    expect(moveForward('W')).toBe(-1)
})

test('Move Forward test3', () => {
    expect(moveForward('S')).toBe(1)
})

test('Move Forward test4', () => {
    expect(moveForward('E')).toBe(1)
})
 */