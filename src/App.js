import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import LinkedList from './components/LinkedList';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/linked_list' component={LinkedList} />
      </Switch>
    </Router>
  );
}

export default App;
