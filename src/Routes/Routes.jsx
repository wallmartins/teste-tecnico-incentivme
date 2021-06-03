import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/PagesComponents/Navbar';
import Address from '../Pages/Address';
import Contact from '../Pages/Contact';
import Register from '../Pages/Register';
import Finished from '../Pages/Finished';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Navbar location="Register" />
        <Register />
      </Route>
      <Route exact path="/Contact">
        <Navbar location="Contact" />
        <Contact />
      </Route>
      <Route exact path="/Address">
        <Navbar location="Address" />
        <Address />
      </Route>
      <Route exact path="/Finished">
        <Navbar location="Finished" />
        <Finished />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
