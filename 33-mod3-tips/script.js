// console.log("connected")

//dataArray is the nested array
// var dataArray = [
//   [2, 3, 7, 8],
//   [0, 1, 3],
//   [9, 2, 8, 3]
// ]
function checkSum1(dataArray){
  const checkSumValues = [];
  for(let i = 0; i<dataArray.length; i++){
	let sortedArray = dataArray[i].sort((a,b) => {
    return a > b
  })
    checkSumValues.push(Math.abs(
      sortedArray[0] - sortedArray[dataArray[i].length - 1]
    ))
	console.log(sortedArray)
  }
  console.log(checkSumValues)
  let checkSumTotal = 0;
  for(let index in checkSumValues){
    checkSumTotal += checkSumValues[index]
  }
  return checkSumTotal
}

function checkSum2(dataArray){
  let checkSumValue = 0;
  for(let i=0; i<dataArray.length; i++){
    let highest = dataArray[i][0]
    let lowest = dataArray[i][0]
    for(let j=1; j<dataArray[i].length; j++){
      if(dataArray[i][j]>highest){
        highest = dataArray[i][j]
      }else if(dataArray[i][j]<lowest){
        lowest = dataArray[i][j]
      }
    }
    checkSumValue += (highest-lowest)
  }
  return checkSumValue
}



function checkSum3(dataArray){
  let checkSum = 0;
  //for each row, call findMax, call findMin, subtract to get different,
  //and add them to a running checkSum
  for(let i = 0; i < dataArray.length; i++){
    checkSum += (findMax(dataArray[i]) - findMin(dataArray[i]))
    // console.log(checkSum)
  }
  return checkSum;
}

//row = [5,1,6,3]
function findMax(row){
  return row.reduce((a,b) => {
    return a > b ? a : b
  })
  // return Math.max(...row)
  //find and return max value in that row
}

function findMin(row){
  return row.reduce((a,b) => {
    return a > b ? b : a
  })
  // return Math.min(...row)
  //find and return min value in that row
}
