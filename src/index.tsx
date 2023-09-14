import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "app/ui/App";
import { AppContextProvider } from "./app/context/ui/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
