function filterNumbersFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const bool = typeof (arr[i]) === 'number';
        if (!bool) {
            arr.splice(i, 1);
            i--;
        }
    }
}

var arr = [1, 'a', 'b', 2];
filterNumbersFromArray(arr);
for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);