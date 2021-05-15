import ScrollToTop from './scrollToTop/ScrollToTop';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="page" id="page">
        <Navbar />
        <div id="routerContent">
          <ScrollToTop />
          <Switch>
            <Route exact path="/" render={() => <Home />}></Route>
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
