import Home from "./components/Home";
import { Provider } from "react-redux";
import DataProvide from "./context/DataProvide";
import { Store } from "./reduxToolkit/Store";
import "./App.css";
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <DataProvide>
          <Home />
        </DataProvide>
      </div>
    </Provider>
  );
}

export default App;
