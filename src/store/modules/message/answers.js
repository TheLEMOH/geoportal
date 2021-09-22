const text = {
    '200': "Успешно",
    '201': "Создано",
    '202': "Принято",
    '401': "Не авторизован",
    '403': "Запрещено"
}

function GetStatusText(status) {
    return text[status]
}

export { GetStatusText }