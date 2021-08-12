import './App.css';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      {
        //define routes
      }
    <BrowserRouter>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
