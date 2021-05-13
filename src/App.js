import './styles/themes/default/theme.scss'
import 'font-awesome/css/font-awesome.min.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import O_Firmie from './Pages/O_Firmie'
import Oferta from './Pages/Oferta'
import Realizacje from './Pages/Realizacje'
import AktyPrawne from './Pages/AktyPrawne'
import Wspolpraca from './Pages/Wspolpraca'
import kontakt from './Pages/Kontakt'
import Kontakt from './Pages/Kontakt';
function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route  path="/o-firmie" component = {O_Firmie} />
          <Route  path="/oferta" component = {Oferta} />
          <Route  path="/realizacje" component = {Realizacje} />
          <Route  path="/akty-prawne" component = {AktyPrawne} />
          <Route  path="/wspolpraca" component = {Wspolpraca} />
          <Route  path="/kontakt" component = {Kontakt} />
        </Switch>
    </div>
  );
}

export default App;
