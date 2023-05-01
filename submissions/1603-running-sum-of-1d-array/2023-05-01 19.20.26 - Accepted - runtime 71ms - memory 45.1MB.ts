function runningSum(nums: number[]): number[] {

    // Declare runningSum variable
    let runningSum: number[] = [];
    let currentSum: number = 0;

    // Loop over array
    for(let i = 0; i < nums.length; i++) {
        runningSum.push(currentSum += nums[i]);
    }

    return runningSum;
};