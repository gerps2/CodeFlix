import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from '../src/Pages/cadastro/Video'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} /> 
      <Route component={() => (<div>Pagina 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
