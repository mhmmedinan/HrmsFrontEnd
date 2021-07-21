import "./App.css";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Employer from "./layouts/Employer/Employer";
import Home from "./layouts/Home/Home";
import Employee from "./layouts/Employee/Employee";

function App() {
  return (
    <div className="App">
     
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
