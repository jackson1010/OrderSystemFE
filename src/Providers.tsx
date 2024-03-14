import { Provider } from "react-redux";
import store from "./data/store";

import App from "./pages/App";

const Providers = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Providers;
