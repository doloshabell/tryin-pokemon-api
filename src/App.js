import React from "react";
import { Provider } from "react-redux";

import Store from "./redux/stores";
import ListPage from './pages/ListPage';

const App = () => {
  return (
    <Provider store={Store}>
      <ListPage />
    </Provider>
  );
};

export default App;
