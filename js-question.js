const twoSum = (nums, target) => {
  const numsLength = nums.length;

  for (let i = 0; i < numsLength - 1; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] + nums[j] === target) {
        console.log("indices are: ", Array.of(i, j));
        return [i, j];
      }
    }
  }
  console.log("Couldn't find a pair");
  return null;
};

const numsArray = [2, 7, 11, 15];
const target = 9;
const secondTarget = 26;
twoSum(numsArray, target);
twoSum(numsArray, secondTarget);
