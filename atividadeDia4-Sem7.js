// 1. Implemente uma função que recebe 10 números e efetua a soma de todos eles. Implemente tratativas de erro para caso um dos valores passados não seja um número. Utilize Try...Catch.

const array =[1, 2, 3, 4, 5, 6, 7, '8', 9, 10]

function somaNums(arr){
    let somaNum = 0
    try{
        for(let i=0; i<arr.length; i++){
            if(typeof arr[i] == 'number'){
               somaNum += arr[i]
            } else{
                console.log(somaNum)
                throw new SyntaxError('Não é um numero!')
            }
        }
    }catch(err){
        console.log("Erro! " + err.message)
    }
}
somaNums(array)

// 2. Complete o código abaixo para que o mesmo não resulte em erro e interrompa a execução.
var arr = [{
    name: "Michael",
    lastname: "Jordan",
    rounds: {
        first: 1,
        second: 3,
        third: 4,
    }
}, {
    name: "Abby",
    lastname: "Michaels",
    rounds: {
        first: 2,
        third: 1
    }
}, {
    name: "Jenice",
    lastname: "Alamo",
    rounds: {
        first: 5,
        second: 2
    }
}];

var arr2 = [{
    matches: {
        process: 'ok'
    }
}]

function Iterate(array) {
    try {
        array.forEach((item) => {
            if(item.rounds != undefined){
                console.log(item.rounds.second);
            }
            if(item.matches != undefined){
            console.log(item.matches.process);
            }
        });
    } catch(e) {
        console.log(e);
    }
}

Iterate(arr);
Iterate(arr2);