const generateLottoNumber = (): number => {
    const randomNumber: number = Math.round(Math.random() * 100);
    if(randomNumber > 49){
        throw new Error("generierte Number > 49");
    } else {
    return randomNumber;
    }
}
