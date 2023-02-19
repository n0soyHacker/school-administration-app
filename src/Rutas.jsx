import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormularioRegistro from './FormularioRegistro';

const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/registro" component={FormularioRegistro} />
      </Switch>
    </Router>
  );
};

export default Rutas;
