/* 
[0] - Учитывается 
[1] - Исключается
*/

const latin = [/^[A-Za-z]+$/, /[а-я-А-Я-0-9]/g];
const cyr = [/^[а-я-А-Я]+$/, /[A-Za-z-0-9]/g];
const pass = [/^[A-Za-z-0-9]+$/, /[а-я-А-Я]/g]
const reg = { latin, cyr, pass }

function InputValidation(e, type) {
    let value = e.target.value;
    if (value) {
        /* Возврат значения в store */
        if (e.target.value.match(reg[type][0])) {
            e.target.classList.remove("is-invalid")
            return value
        }
        /* Возврат значения в store и замена текста в форме */
        else {
            value = value.replaceAll(reg[type][1], "");
            e.target.classList.add("is-invalid")
            e.target.value = value;
            return value
        }
    }
    else {
        return null;
    }
}

function FilledArray(array, isUser = false) {
    const l = array.length;
    let filled = true;
    if (isUser) {
        for (let i = 0; i < l; i++) {
            filled *= FilledUsers(array[i])
            if (!filled) {
                filled = false
                break;
            }
        }
    }
    else {
        for (let i = 0; i < l; i++) {
            filled *= Filled(array[i])
            if (!filled) {
                filled = false
                break;
            }
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

function FilledUsers(obj) {
    if (!obj.firstName) {
        return false
    }
    if (!obj.lastName) {
        return false
    }
    if (!obj.login) {
        return false
    }
    if (obj.changePassword && !obj.password) {
        return false
    }
    return true
}




export { InputValidation, Filled, FilledArray }