import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './views/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
