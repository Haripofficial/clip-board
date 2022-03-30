
export const data = () => {
    let localStorageData = localStorage.getItem("Data") || null;
    if (localStorageData === null) {
        localStorageData = {
            "category": [
            ]
        }
        localStorage.setItem("Data", JSON.stringify(localStorageData))
        return localStorageData;
    }
    return JSON.parse(localStorageData);
}


export const getCategory = (catID) => {
    return data()?.category?.find(({ id }) => id === Number(catID) );
}