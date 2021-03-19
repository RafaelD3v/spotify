import Header from './components/Header';
import Home from './components/Home';
import Ajuda from './components/Ajuda';
import Footer from './components/Footer';

import './styles/global.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/ajuda" component={Ajuda} />
        </Switch>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
