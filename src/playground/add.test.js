const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should write the greeting', () => {
    const result = generateGreeting('Kokos');
    expect(result).toBe('Hello Kokos!');
});

test('should write the greeting for anonymous', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});