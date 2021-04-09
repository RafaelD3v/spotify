import Header from './components/Header';
import Home from './pages/Home';
import Help from './pages/Help';
import Playlists from './pages/Playlists';
import Musics from './pages/Musics';
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
          <Route path="/ajuda" exact={true} component={Help} />
          <Route path="/playlists/:id" exact={true} component={Musics} />
          <Route path="/playlists" exact={true} component={Playlists} />
        </Switch>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
