const arr = [1,2,3,4,5,6,7,8,9,10]


const filterRange = (array,begin,end) => {

    const resultArr = array.filter(item => item >= begin && item <= end )
    return resultArr
}


console.log(filterRange(arr,2,5))