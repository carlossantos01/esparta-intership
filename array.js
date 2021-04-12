const solution = () => {
    let A = [9,3,9,3,9,7,9];
    let counter = {};
    let res = undefined;

    for(let i = 0; i < A.length; i++){
        if (counter[A[i]] === undefined){
            counter = {...counter, [A[i]] : 1}
        }else{
            counter[A[i]]++;
        }
    }
    for (let key in counter){
        if(counter[key] === 1){
            res = key;
        }
    }
    return res;
}

console.log(solution())