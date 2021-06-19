import "./App.css";
import Navi from "./layouts/Navi";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Employer from "./layouts/Employer";
import Home from "./layouts/Home";
import Employee from "./layouts/Employee";

function App() {
  return (
    <div className="App">
      <Navi />
      <Switch>
        <Route path="/employer" component={Employer} />
        <Route path="/employee" component={Employee} />
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
