const problem = () => {
    let array = []
    for(let i=1;i<51;i++){
        if(i%2===0){
            array.push(i)
        } 
    }
    console.log(array)
    return array
}