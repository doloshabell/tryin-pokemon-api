import axios from "axios";
// import { base_api } from "../../services/api";

export const getListPokemon = (url) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_LIST_POKEMON_START" });
      // const axiosConfigGetListPokemon = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };

      // const responseGetListTest = await axios.get(
      //   `${base_api}/get-all`,
      //   axiosConfigGetListTest
      // );

      const responseGetListPokemon = await axios.get(url);

      let pokemonDetail = [];
      for (const item of responseGetListPokemon.data.results) {
        const responseGetDetailPokemon = await axios.get(item.url);
        pokemonDetail.push(responseGetDetailPokemon.data);
      }

      dispatch({
        type: "GET_LIST_POKEMON_SUCCESS",
        payload: {
          listPokemon: pokemonDetail,
          prevListUrl: responseGetListPokemon.data.previous,
          nextListUrl: responseGetListPokemon.data.next,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_LIST_POKEMON_FAILED",
        payload: error.message,
      });
    }
  };
};
