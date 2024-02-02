function fatRec(num){
    if(num == 1){
        return 1;
    }

    return num * fatRec(num - 1)
}

console.log(fatRec(5))