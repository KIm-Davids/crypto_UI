const  {calculateArea, convertTofahrenheit, isEven, isLeapYear, countVowels} = require('./functionTasks');
    
test('calculate the area of a rectangle', () => {
    expect(calculateArea(2,8)).toBe(16)});

test('calculate the area of a rectangle with negative width and heigth', () => {
    expect(calculateArea(-2,-8)).toBe(16)});

test('calculate the area of a rectangle with negative heigth', () => {
    expect(calculateArea(2,-8)).toBe(16)});

test('calculate the area of a rectangle with negative heigth', () => {
    expect(calculateArea(-2,8)).toBe(16)});
    
test('converts celsius to fahrenheint', () => {
    expect(convertTofahrenheit(10)).toBe(338)});

test('return true if number is even', () => {
    expect(isEven(22)).toBe(true)});

test('return true if year is a leap even', () => {
    expect(isLeapYear(2024)).toBe(true)});

test('return true if year is a leap even', () => {
    expect(countVowels("machidek")).toBe(3)});
    