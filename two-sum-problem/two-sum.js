const twoSum = (target, numbers) => {
  if (numbers.length < 2) {
    throw Error("Array must have at least two numbers");
  }

  const pairs = {};

  for (const number of numbers) {
    if (pairs[number] !== undefined) {
      return [pairs[number], number];
    }

    pairs[target - number] = number;
  }

  return []
};

module.exports = twoSum;
