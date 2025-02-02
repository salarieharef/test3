
const formData = (obj) => {

    const keys = Object.keys()
    const data = FormData()

    keys.forEach(key => {
        const item = obj[key];
        data.append(key, item);
    })

    return data;
}