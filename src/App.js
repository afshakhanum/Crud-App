import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/addUser" component={AddUser}></Route>
      <Route exact path="/editUser/:id" component={EditUser}></Route>
        </Switch> 
    </div>
  );
}

export default App;
   