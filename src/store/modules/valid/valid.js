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

export { InputValidation }