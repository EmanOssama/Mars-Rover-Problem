const turnRight = require('./turnRight')

test('Move Right test1', () => {
    expect(turnRight('N')).toBe('E')
})
// to check each test first change the default direction in turnRight file
/*
test('Move Right test2', () => {
    expect(turnRight('W')).toBe('N')
})

test('Move Right test3', () => {
    expect(turnRight('S')).toBe('W')
})

test('Move Right test4', () => {
    expect(turnRight('E')).toBe('S')
})
 */