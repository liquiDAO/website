import ScrollToTop from './scrollToTop/ScrollToTop';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Road from './pages/Road';

import Presale from './pages/Presale';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <div className="page" id="page">
        <Navbar />
        <div id="routerContent">
          <ScrollToTop />
          <Switch>
            <Route exact path="/faq" render={() => <FAQ />}></Route>
            <Route exact path="/roadmap" render={() => <Road />}></Route>
            <Route exact path="/" render={() => <Home />}></Route>
            <Route exact path="/contribute" render={() => <Presale />}></Route>
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
