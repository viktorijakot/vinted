import * as types from '../Constants/actionTypes';

export function loadIdFromServer(id) {
    return {
        type: types.LOAD_ID_FROM_SERVER,
        payload: id
    };
}

export function loadProductsFromServer(products) {
    return {
        type: types.LOAD_PRODUCTS_FROM_SERVER,
        payload: products
    };
}

export function loadUsersFromServer(userId){
    return {
        type: types.LOAD_USERS_FROM_SERVER,
        payload: userId
    }
}

export function loadBrandsFromServer(brandId){
    return {
        type: types.LOAD_BRANDS_FROM_SERVER,
        payload: brandId
    }
}

export function loadBrandsAllFromServer(brandsAllId){
    return {
        type: types.LOAD_BRANDS_ALL_FROM_SERVER,
        payload: brandsAllId
    }
}
export function filterProductsBrand(filterBrandId) {
    return {
        type: types.FILTER_PRODUCTS_BRAND,
        payload: parseInt(filterBrandId)
    };
}

export function loadCategoriesFromServer(categories){
    return {
        type: types.LOAD_CATEGORIES_FROM_SERVER,
        payload: categories
    }
}

export function filterCategories(filterCategoriesID) {
    return {
        type: types.FILTER_CATEGORIES,
        payload: parseInt(filterCategoriesID)
    };
}