// Fibonacci using Dynamic Programming in TypeScript
function fibonacci(n: number): number {
    const dp: number[] = new Array(n + 1).fill(0);
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];  // Build up the solution using previous results
    }

    return dp[n];
}

// Example usage:
console.log(fibonacci(10));  // Output: 55
