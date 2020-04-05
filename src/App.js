import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import NotFound from './Pages/NotFound';
import Project from './Pages/AboutMe';

function App() {
  return (
    <div id="App" >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/Project" component={ Project } />
            <Route exact path="/AboutMe" component={ Project } />
            <Route component={ NotFound } />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
