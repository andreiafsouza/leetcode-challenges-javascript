const twoSum = require("./two-sum");

describe("TwoSum", () => {
  test("0, [] should throw an exception", () => {
    const execution = () => twoSum(0, []);
    expect(execution).toThrow("Array must have at least two numbers");
  });

  test("0, [0] should throw an exception", () => {
    const execution = () => twoSum(0, [0]);
    expect(execution).toThrow("Array must have at least two numbers");
  });

  test("0, [0, 0] should return [0, 0]", () => {
    expect(twoSum(0, [0, 0])).toStrictEqual([0, 0]);
  });

  test("1, [0, 1] should return [0, 1]", () => {
    expect(twoSum(1, [0, 1])).toStrictEqual([0, 1]);
  });

  test("1, [1, 0] should return [1, 0]", () => {
    expect(twoSum(1, [1, 0])).toStrictEqual([1, 0]);
  });

  test("5, [1, 2, 3, 4, 5] should return [2, 3]", () => {
    expect(twoSum(5, [1, 2, 3, 4, 5])).toStrictEqual([2, 3]);
  });

  test("-1, [-2, 1] should return [-2, 1]", () => {
    expect(twoSum(-1, [-2, 1])).toStrictEqual([-2, 1]);
  });

  test("5, [1, 3, 8, 10] should return []", () => {
    expect(twoSum(5, [1, 3, 8, 10])).toStrictEqual([]);
  });
});
