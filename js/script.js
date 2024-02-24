
const globalArray = []
const randomNumber = (min , max) => {
    const davtalab = []
    for (let i=0 ; i<3 ; i++) {
        const result = min + Math.floor((Math.random() * (max-min + 1))) ;
        if (globalArray.indexOf(result) === -1) {
            globalArray.push(result)
            davtalab.push(result)
        }  ;

    } ;
    return davtalab ;
} ;
console.log(globalArray)
const item1 = randomNumber (1 , 40)
const item2 = randomNumber (1 , 40)
const item3 = randomNumber (1 , 40)
const enything = {group1:[item1] , group2:[item2] , group3:[item3]}
console.log(enything)
