export const LOCAL_STORAGE_KEY = 'productsListSelected';

export const getLocalStogare = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)+'');
}
