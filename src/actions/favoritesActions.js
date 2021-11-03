const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
const ADD_FAVORITES = 'ADD_FAVORTIES';
const DELETE_FAVORTIES = 'DELETE_FAVORITES';

const toggleFavorites = () => {
    return ({type: TOGGLE_FAVORITES});
}

const addFavorites = (movie) => {
    return ({type: ADD_FAVORITES, payload: movie});
}

const deleteFavorites = (id) => {
    return ({type: DELETE_FAVORTIES, payload: id})
}