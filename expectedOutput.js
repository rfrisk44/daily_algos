/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/


// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first
// create the function and decide what params it needs and what it will return here:

arr1=[2, 11, 7, 15]
target1=9

arr2=[3,2,4]
target2=6

arr3=[3,3]
target3=6

function twoSum(arr, target){
    for(let i = 0;i<arr.length;i++){
        for(let j=1; j<arr.length;j++){
            if(arr[i]+ arr[j]===target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum(arr1,target1))
console.log(twoSum(arr2,target2))
console.log(twoSum(arr3,target3))