import { Provider } from "react-redux";
import store from "./data/store";

import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";

const Providers = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
