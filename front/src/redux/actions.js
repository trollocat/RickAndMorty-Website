export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character }
}

export const deleteFavorite = (id) => {
    return { type: DELETE_FAVORITE, payload: id }
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order}
}