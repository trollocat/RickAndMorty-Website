import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  allFavs: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.myFavorites, payload],
        allFavs: [...state.myFavorites],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
      };

    case FILTER:
      if (payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }
      const { allCharacters } = state;
      const allCharsFiltered = allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => (a.id > b.id ? 1 : -1))
            : payload === "Descendente"
            ? state.allCharacters.sort((a, b) => (a.id > b.id ? -1 : 1))
            : state.allFavs,
      };

    default:
      return { ...state };
  }
};

export default reducer;
