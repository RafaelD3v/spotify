import Header from './components/Header';
import Home from './pages/Home';
import Help from './pages/Help';
import Playlists from './pages/Playlists';
import Musics from './pages/Musics';
import Footer from './components/Footer';
import Form from './pages/Form';
import Login from './pages/Login';
import './styles/global.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/ajuda" exact={true} component={Help} />
          <Route path="/register" exact={true} component={Form} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/playlists" exact={true} component={Playlists} />
          <Route path="/playlists/:id" exact={true} render={(props) => <Musics id={props.match.params.id}/>} />
        </Switch>

        <Footer />
      </div >
    </Router>
  );
}
