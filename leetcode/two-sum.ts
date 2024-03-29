
/**
 * @link https://leetcode.com/problems/two-sum/submissions/1216873024
 */
function twoSum(nums: number[], target: number): number[] {
    const answer: number[] = [];
    for (let i = 0; i <= nums.length; i ++) {
        const current = i + 1;
        const x = nums.slice(current).findIndex(num => num === target - nums[i]);

        if (x > -1) {
            answer.push(i);
            answer.push(x + current);

            break;
        }
    }

    return answer;
};

/**
 * @link https://leetcode.com/problems/two-sum/submissions/1216877254?source=submission-ac
 */
function solution2 (nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
}

console.log(solution2([2,7,11,15], 9)) // [0, 1]