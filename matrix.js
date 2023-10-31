/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ];
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  
  function diagonalDifference(sqrMatrix) {
    let leftSum = 0
    let rightSum = 0
    for(i=0; i< sqrMatrix.length; i++){
        leftSum += sqrMatrix[i][i]
        console.log("left sum",leftSum)
        rightSum += sqrMatrix[i][sqrMatrix.length-1-i]
        console.log("right sum",rightSum)
    }
    let difference = leftSum - rightSum
    return difference<0 ? difference*-1:difference
  }

  console.log("difference",diagonalDifference(squareMatrix1))
  console.log("difference",diagonalDifference(squareMatrix2))

  /*
  make a var for the sum of the numbers going to the left, default sum to 0
  make a var for the sum2 of the numbers going to the right, default to 0
  create a for/while loop responsible for incrementing through the array, incrementing by 1 for top left to bottom right
    add number to sum at the current index
  make another loop responsible for going from top right to bottom left, decrementing by 1 starting at the array.length
    add number to sum2 at the current index
  outside of loop, calculate the difference between the sum and sum2, if number is negative change into a positive
  return the calculation
  */