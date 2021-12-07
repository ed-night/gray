function gray(n) {
    let arr = ['0', '1'];
    if (n <= 0) {
        return false;
    } else if (n == 1) {
        return arr;
    } else if (n > 1 && n <= 20) {
        for (let i = 0; i < n - 1; i++) {
            let tempArr = cloneArr(arr);
            for (let j = 0; j < tempArr.length; j++) {
                arr[j + tempArr.length] = '1' + tempArr[(tempArr.length - j - 1)];
                arr[j] = '0' + tempArr[j];
            }
        }
        return arr;
    } else {
        return false;
    }
}

function cloneArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}


let grayArr = gray(+prompt('Number'));
if (grayArr) {
    let tveriQanak = grayArr.length;
    const table = document.querySelector('.gray');

    for (let i = 0; i < tveriQanak; i++) {
        table.insertAdjacentHTML('beforeend',
        `<tr>
            <th>${i}</th>
            <th>${grayArr[i]}</th>
        </tr>`)
    } 
} else {
    document.body.innerHTML = 'false'
}

