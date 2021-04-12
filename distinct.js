const solution = () =>{
    let A = [2,1,1,2,3,1];
    let counter = {};

    for(let i = 0; i < A.length; i++){
        if (counter[A[i]] === undefined){
            counter = {...counter, [A[i]] : 1}
        }else{
            counter[A[i]]++;
        }
    }
    for (let key in counter){
        if(counter[key] === 1){
            return key;
        }
    }
}

console.log(solution())