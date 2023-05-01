function maximumWealth(accounts: number[][]): number {
    let maxWealthSum: number = 0;
    for(let account of accounts) {
        const currentSum = account.reduce((acc, nxt) => acc + nxt, 0);
        maxWealthSum = Math.max(maxWealthSum, currentSum);
    }
    return maxWealthSum;
}
