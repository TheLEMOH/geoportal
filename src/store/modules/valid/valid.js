/* 
[0] - Учитывается 
[1] - Исключается
*/

const latin = [/^[A-Za-z]+$/, /[а-я-0-9]/g];
const cyr = [/^[А-Яа-я]+$/, /[A-Za-z-0-9]/g];
const pass = [/^[A-Za-z-0-9]+$/, /[а-я]/g]

const reg = { latin, cyr, pass }

function InputValidation(e, type) {
    let value = e.target.value;
    if (e.target.value.match(reg[type][0])) {
        return value
    }
    else {
        value = value.replaceAll(reg[type][1], "");
        e.target.value = value
        return value
    }
}

function FilledArray(array) {
    const l = array.length;
    let filled = true;
    for (let i = 0; i < l; i++) {
        filled *= Filled(array[i])
        if (!filled) {
            filled = false
            break;
        }
    }
    return filled
}

function Filled(obj) {
    let filled = true;
    for (let key in obj) {
        if ((obj[key] === '' || !obj[key]) && key != '__v') {
            console.log(key, obj[key]);
            filled = false;
            break;
        }
    }
    return filled;
}

export { InputValidation, Filled, FilledArray }