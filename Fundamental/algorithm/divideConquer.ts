/*
Divide and Conquer involves breaking a problem into smaller subproblems, 
solving each subproblem independently, and then combining their solutions to solve the original problem. 
This technique is typically used for problems that can be divided into subproblems that are similar to the original problem but smaller in size.
One of the classic examples of the Divide and Conquer approach is Merge Sort, an efficient sorting algorithm.

Divide and conquer algorithm: Merge sort, Quick sort, binary search, etc.
*/

// Merge Sort Implementation in TypeScript
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));  // Divide the array into two halves
    const right = mergeSort(arr.slice(mid));   // Recursively divide the halves

    return merge(left, right);  // Conquer by merging the sorted halves
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
console.log(mergeSort([5, 2, 9, 1, 5, 6]));
