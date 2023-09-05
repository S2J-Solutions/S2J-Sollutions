import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Home from './components/Home'
import ItStaffing from './components/ItStaffing'
import Carrer from './components/Carrer'
import Training from './components/Training'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/it-staffing" component={ItStaffing} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/carrer" component={Carrer} />
      <Route exact path="/training" component={Training} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
