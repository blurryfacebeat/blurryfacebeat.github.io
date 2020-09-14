// Помещаем fetch в отдельную функцию для удобства
// Await ждет результат запроса и только потом пропускает код дальше
const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await result.json();
};

const getResources = async (url) => {
    const result = await fetch(url);

    // Если с запросом что-то не так, то выкидываем новую ошибку
    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}.`);
    }

    return await result.json();
};

export { postData, getResources };
