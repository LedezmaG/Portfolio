import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div id="App" >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/Portfolio" component={ Home } />
            <Route exact path="/AboutMe" component={ AboutMe } />
            <Route exact path="/Contact" component={ Contact } />
            <Route component={ NotFound } />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
