function runningSum(nums: number[]): number[] {
    let runningSumArray: number[] = [];
    if (nums.length == 0) {
        return runningSumArray;
    }
    runningSumArray[0] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        runningSumArray[i] = runningSumArray[i - 1] + nums[i];
    }

    return runningSumArray;
};