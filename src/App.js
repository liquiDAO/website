
import './App.css';
import ScrollToTop from './scrollToTop/ScrollToTop';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/About'
import Contacts from './pages/Contacts'
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar'
import FAQ from './pages/FAQ';

function App() {
  return (

    <BrowserRouter>
      <div className='page' id='page'>
          <Navbar/>
          <div  id='routerContent'>
              <ScrollToTop />
              <Switch>
                  <Route path='/about' render={() => <AboutUs/>}></Route>
                  <Route path='/faq' render={() => <FAQ/>}></Route>
                  <Route path='/contacts' render={() => <Contacts/>}></Route>
                  <Route exact path='/' render={() => <Home/>}></Route>
                  <Route path='*' component={NoMatch}/>
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
