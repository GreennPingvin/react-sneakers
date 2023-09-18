import App from "app/ui/App";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./app/context/ui/AppContextProvider";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
