import { Provider } from "react-redux";
import store from "./data/store";

import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

const Providers = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
