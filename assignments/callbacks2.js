
const testFunction = (myNum, cb) => {
    return cb(myNum)
}

const myCallbackFunction = (myNum) => {
    return myNum * 2
}

console.log(testFunction(10, myCallbackFunction));
// testFunction(20, myCallbackFunction)