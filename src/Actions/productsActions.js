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