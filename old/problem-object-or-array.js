function isPlainObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
    }
const example1 = { a: 1 };
const example2 = [1, 2, 3];
console.log(isPlainObject(example1));  // Выведет true
console.log(isPlainObject(example2));  // Выведет false