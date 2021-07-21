const moveBackward = require('./moveBackward')

test('Move Backward test1', () => {
    expect(moveBackward('N')).toBe(1)
})
// to check each test first change the default direction in moveBackward file
/*
test('Move Backward test2', () => {
    expect(moveBackward('W')).toBe(1)
})

test('Move Backward test3', () => {
    expect(moveBackward('S')).toBe(-1)
})

test('Move Backward test4', () => {
    expect(moveBackward('E')).toBe(-1)
})
 */