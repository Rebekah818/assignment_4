// mymap
const myArray = [1, 2, 3];
Array.prototype.myMap = function (callback) {

    for (let i = o; i < this.length; i++) {
        if (!!callback(this.i, i, this)) {
            myArray.push(this[i]);

        }
    }
    return myArray;
}
console.log(myArray);

//myreduce 
const arr = [1, 2, 3, 4];

const sum = arr.reduce((accu, item) => {
    acc = acc + item
    return acc;
}, 0)
console.log(sum);

const sumReducer = (accumulator, currentItem) => {
    accumulator + currentItem;
}

const reduce = (reducer, initialVaule, array) => {
    let acc = initialVaule;
    for (let item in array) {
        let currentValue = array[item];
        reducer(acc, currentValue);
    }
    return acc;
}
const sum1 = reduce(sumReducer, 0, arr);
console.log(sum1);

const myArray2 = [1,2,3,4,5];

const reduce2 = myArray2.reduce((accumulator, currentValue, item, array) => {
    console.log(currentValue);
    return accumulator + currentValue;
},10);
console.log('reduce', reduce2);
