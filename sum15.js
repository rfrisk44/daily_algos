k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

function sumArray(arr, k) {
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let tempArr = [];
        let right = i;
        while (sum <= k) {
            sum += arr[right]
            tempArr.push(arr[right])
            right++
        if (sum === k) {
            returnArr.push([...tempArr])
        }}
        
    }
    return returnArr ? returnArr : []
}
console.log(sumArray(arr, k))