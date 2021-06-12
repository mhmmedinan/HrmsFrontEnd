import './App.css';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';



function App() {
  return (
    <div className="App">
      <Navi/>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
