function maximumWealth(accounts: number[][]): number {
    let currentWealthSum: number = 0;
    let maxWealthSum: number = 0;
    for(let i = 0; i < accounts.length; i++) {
        currentWealthSum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            currentWealthSum += accounts[i][j];
        }
        if (currentWealthSum > maxWealthSum) {
            maxWealthSum = currentWealthSum;
        }
    }
    return maxWealthSum;
}