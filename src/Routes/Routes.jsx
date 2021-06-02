import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/PagesComponents/Navbar';
import Footer from '../Components/PagesComponents/Footer';
import Address from '../Pages/Address';
import Contact from '../Pages/Contact';
import Register from '../Pages/Register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Navbar location="Register" />
        <Register />
        <Footer path="/Contact" />
      </Route>
      <Route exact path="/Contact">
        <Navbar location="Contact" />
        <Contact />
        <Footer path="/Address" />
      </Route>
      <Route exact path="/Address">
        <Navbar location="Address" />
        <Address />
        <Footer path="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
