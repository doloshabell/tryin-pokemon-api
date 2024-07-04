import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListPokemon } from "../redux/actions/testAction";

const ListPage = (props) => {
  useEffect(() => {
    props.getListPokemon("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  }, []);

  const getPokemon = () => {
    props.getListPokemon("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  };

  const prevListPokemon = () => {
    props.getListPokemon(props.prevListUrl);
  };

  const nextListPokemon = () => {
    props.getListPokemon(props.nextListUrl);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mt-10 mb-5 text-2xl">List Pokemon</p>
      <div>
        {props.isLoading ? (
          <p>Loading...</p>
        ) : props.listPokemon.length == 0 ? (
          <div className="flex flex-col items-center">
            <p> No Pokemon Yet ~ </p>
            <button
              className="bg-blue-500 mt-1 py-1 px-2 rounded-md shadow-md"
              onClick={() => getPokemon()}
            >
              Let's See Some Pokemons!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5">
            {" "}
            {props.listPokemon.map((item, index) => (
              <div
                key={index}
                className="border flex flex-col items-center px-5"
              >
                <img
                  src={item.sprites.other.dream_world.front_default}
                  alt={item.name}
                  className="my-3 w-32 h-20"
                />
                <p>{item.name}</p>
              </div>
            ))}{" "}
            <div className="flex gap-5 justify-center col-span-4 mt-3 mb-10">
              {props.prevListUrl != null && (
                <button
                  className="bg-blue-500 py-1 px-2 rounded-md shadow-md"
                  onClick={() => prevListPokemon()}
                >
                  Prev
                </button>
              )}
              {props.nextListUrl != null && (
                <button
                  className="bg-blue-500 py-1 px-2 rounded-md shadow-md"
                  onClick={() => nextListPokemon()}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.test.isLoading,
  listPokemon: state.test.listPokemon,
  prevListUrl: state.test.prevListUrl,
  nextListUrl: state.test.nextListUrl,
});

const mapDispatchToProps = (dispatch) => ({
  getListPokemon: (url) => dispatch(getListPokemon(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
