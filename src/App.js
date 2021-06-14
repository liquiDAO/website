import ScrollToTop from './scrollToTop/ScrollToTop';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Presale from './pages/Presale';
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
            {/* <Route path="/faq" render={() => <FAQ />}></Route>
            <Route path="/roadmap" render={() => <Road />}></Route> */}
            {/* <Route path="/pdf" render={() => <PDF />}></Route> */}
            <Route exact path="/" render={() => <Home />}></Route>
            <Route exact path="/presale" render={() => <Presale />}></Route>
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
