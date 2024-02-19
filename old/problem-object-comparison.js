function objectComparison(firstObj, secondObj) {
    const keysFirst = Object.keys(firstObj);
    const keysSecond = Object.keys(secondObj);
    if (keysFirst.length !== keysSecond.length) {
        return false;
    }
    for (const key of keysFirst) {
        if (firstObj[key] !== secondObj[key]) {
        return false;
        }
    }
    return true;
}
const obj1 = { a: 1, b: 1 };
const obj2 = { a: 1, b: 1 };
const obj3 = { a: 1, b: 2 };
console.log(objectComparison(obj1, obj2));
console.log(objectComparison(obj1, obj3)); 