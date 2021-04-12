const solution = (N, M) =>{
    let chocolateEaten = [];
    let i = 0;

    for (let i = 0; i < N; i += M){
        for (let j = 0; j < chocolateEaten.length; j++){
            if (chocolateEaten[j] === i){
                break;
            }
        }
        chocolateEaten.push(i);
    }

    return chocolateEaten;
}

console.log(solution(10, 4))