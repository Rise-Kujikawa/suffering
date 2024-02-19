function removeElement(nums, target) {
    const indexToRemove = nums.indexOf(target);
    if (indexToRemove !== -1) {
        nums.splice(indexToRemove, 1);
    }
    return nums;
}
const inputArray = [1, 2, 3, 4, 5];
const targetValue = 2;
const result = removeElement(inputArray, targetValue);
console.log(result);