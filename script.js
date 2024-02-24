
const globalArray = []
const randomNumber = (min , max) => {
    var davtalab = []
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
const group1 = randomNumber (1 , 40)
const group2 = randomNumber (1 , 40)
const group3 = randomNumber (1 , 40)
const enything = {group1:[group1] , group2:[group2] , group3:[group3]}
console.log(enything)
