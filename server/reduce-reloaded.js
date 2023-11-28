const items = [1,3,2,3,2,2,2,3,3,3,3,1,2,1,3];

const reductor = items.reduce((obj,item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1
    }
    return obj;
}, {});

//DESAFIO: ACUMULAR POR RANGOS

const numeros = [1,2,3,6,7,4,8,9,4,2,5,7,1,3,5,3,2,5,7,6,5,8,8,7];

const acumulador = numeros.reduce((obj,num) => {
    if (num <= 5) obj["1-5"] ++;
    else if (num > 8) obj["9-10"] ++;
    else obj["6-8"] ++
    
    return obj
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
});

acumulador