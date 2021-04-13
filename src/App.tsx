import Header from './components/Header';
import Home from './pages/Home';
import Help from './pages/Help';
import Playlists from './pages/Playlists';
import Musics from './pages/Musics';
import Footer from './components/Footer';

import './styles/global.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './pages/Form';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/ajuda" exact={true} component={Help} />
          <Route path="/cadastro" exact={true} component={Form} />
          <Route path="/playlists" exact={true} component={Playlists} />
          <Route path="/playlists/:id" exact={true} component={Musics} />
        </Switch>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
