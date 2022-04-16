
export const UserData = () => {
    let localStorageData = localStorage.getItem("User") || {};
    return JSON.parse(localStorageData);
}
