const turnLeft = require('./turnLeft')

test('Move Left test1', () => {
    expect(turnLeft('N')).toBe('W')
})
// to check each test first change the default direction in turnLeft file
/*
test('Move Left test2', () => {
    expect(turnLeft('W')).toBe('S')
})

test('Move Left test3', () => {
    expect(turnLeft('S')).toBe('E')
})

test('Move Left test4', () => {
    expect(turnLeft('E')).toBe('N')
})
 */

