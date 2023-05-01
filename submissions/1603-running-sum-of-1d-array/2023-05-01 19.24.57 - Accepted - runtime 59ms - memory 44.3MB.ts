function runningSum(nums: number[]): number[] {

    let runningSumArray: number[] = [];
    let currentSum: number = 0;

    if (nums.length == 0) {
        return runningSumArray;
    }

    for(let i = 0; i < nums.length; i++) {
        runningSumArray.push(currentSum += nums[i]);
    }

    return runningSumArray;
};