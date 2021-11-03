import {TOGGLE_FAVORITES, ADD_FAVORITES, DELETE_FAVORITES} from '../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: true
            }
        case ADD_FAVORITES:
            return{
                ...state,
                favorites: [...favorites, action.payload]
            }
        case DELETE_FAVORITES:
            return{
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state
    }
}

export default reducer