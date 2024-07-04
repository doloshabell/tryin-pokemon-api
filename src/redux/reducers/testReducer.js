const initialState = {
  listPokemon: [],
  prevListUrl: "",
  nextListUrl: "",
  isLoading: false,
  isError: false,
  errorMessage: "",
  message: "",
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LIST_POKEMON_START":
      return { ...state, isError: false, isLoading: true, listPokemon: [] };
    case "GET_LIST_POKEMON_SUCCESS":
      return {
        ...state,
        isError: false,
        isLoading: false,
        listPokemon: action.payload.listPokemon,
        prevListUrl: action.payload.prevListUrl,
        nextListUrl: action.payload.nextListUrl,
      };
    case "GET_LIST_POKEMON_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
        listPokemon: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
