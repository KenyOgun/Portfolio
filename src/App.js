import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./components/Homepage"

const App = () => {
  return (
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
