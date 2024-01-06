// "Given an array push all the 0's to the beginning of array and 1's to end of the array
//  ex: [1,0,1,0] => [0,0,1,1]"


const reOrderArray = (arr) => {
    let leftEnd = 0
    let rightEnd = arr.length - 1

    while (leftEnd <= rightEnd) {

        if (arr[leftEnd] === 0) {
            leftEnd++
        } else if (arr[rightEnd] === 1) {
            rightEnd--
        } else {
            [arr[leftEnd], arr[rightEnd]] = [arr[rightEnd], arr[leftEnd]]
            leftEnd++
            rightEnd--
        }

    }
    return arr
}

console.log(reOrderArray([1, 0, 1, 0]))



// "Input: arr = [3,4,12,6,2,9] , sum = 24
//  Output: 3 , 12 , 9
//  Explanation: The triplet(3,9,12) give us a sum of 24."

//[2,3,4,6,9,12]=36

const sumExists = (arr, k) => {

    //sort arr
    arr.sort((a, b) => a - b)

    //check if first three are greater than k or last three are less than k then return false
    if (((arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]) < k) || ((arr[0] + arr[1] + arr[2]) > k)) {
        return false
    }

    //check if first three or last three are the eligible triplet then returning true
    if (((arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]) === k) || ((arr[0] + arr[1] + arr[2]) === k)) {
        return true
    }

    for (let a = 0; a < arr.length - 2; a++) {
        let left = a + 1
        let right = arr.length - 1

        while (left < right) {
            const currSum = arr[a] + arr[left] + arr[right]

            if (currSum === k) {
                return true;
            } else if (currSum < k) {
                left++
            } else {
                right--
            }
        }
    }
    return false;
}

console.log(sumExists([3, 4, 12, 6, 2, 9], 24))
//check vpc peering for grpc