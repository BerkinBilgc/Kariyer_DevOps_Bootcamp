import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NamespaceList from './components/NamespaceList';
import PodList from './components/PodList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/namespaces" component={NamespaceList} />
        <Route path="/pods" component={PodList} />
      </Switch>
    </Router>
  );
};

export default App;
