import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form } from 'semantic-ui-react';

import './styles.scss';

const Login = ({
  changeField,
  email,
  password,
  isLogged,
}) => {
  console.log(isLogged);
  return (
    <Form success>
      <Form.Input
        type="email"
        name="email"
        label="Email"
        placeholder="Entrez votre adresse mail"
        value={email}
        onChange={(event) => {
          console.log(event.target.value, event.target.name);
          changeField(event.target.value, event.target.name);
        }}
      />
      <Form.Input
        type="password"
        name="password"
        label="Mot de passe"
        placeholder="Entrez votre mot de passe"
        value={password}
        onChange={(event) => {
          console.log(event.target.value, event.target.name);
          changeField(event.target.value, event.target.name);
        }}
      />
      <Button>Connexion</Button>
    </Form>
  );
};


Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default Login;
