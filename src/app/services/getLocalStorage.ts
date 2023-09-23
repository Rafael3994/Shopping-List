export const getLocalStogare = () => {
    return JSON.parse(localStorage.getItem('productsListSelected')+'');
}
