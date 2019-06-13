
const testFunction = (myNum, cb) => {
    console.log(myNum)
    console.log(myNum * 2)
    cb(myNum*2)
}

const myCallbackFunction = (myNum) => {
    console.log(myNum)
    console.log(myNum * 2)
    return myNum * 2
}

testFunction(10, myCallbackFunction);
// testFunction(20, myCallbackFunction)