import "@google/model-viewer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioDetail from "./pages/PortfolioDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={PortfolioDetail} />
      </Switch>
    </Router>
  );
}

export default App;
