const inputArray = [1, 1, 4, 5, 5, 3, 3, 4];
function removeDuplicates(nums) {
    return nums.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}
const result = removeDuplicates(inputArray);
console.log(result);