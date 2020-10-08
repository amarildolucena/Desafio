import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Usuarios from './bundles/usuarios/index';
import UsuarioDetails from './bundles/usuarios/UsuarioDetails';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <h3>Root Path Component</h3>
      </Route>
      <Route path="/hello_world">
        <h3>Hello World Component</h3>
      </Route>
      <Route path="/bye_world">
        <h3>Bye World Component</h3>
      </Route>

      <Route exact path="/">
        <Usuarios />
      </Route>
      <Route
        path="/usuarios/new"
        exact
        component={CreatePost}
      />
      <Route
        path="/usuarios/:id"
        exact
        component={UsuarioDetails}
      />
      <Route
        path="/posts/:id/edit"
        exact
        component={UpdatePost}
      />
    </Switch>
  );
}
