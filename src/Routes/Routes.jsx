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
        <Navbar />
        <Register />
        <Footer path="/Contact" />
      </Route>
      <Route exact path="/Contact">
        <Navbar />
        <Contact />
        <Footer path="/Address" />
      </Route>
      <Route exact path="/address">
        <Navbar />
        <Address />
        <Footer path="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
