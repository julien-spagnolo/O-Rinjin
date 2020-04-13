import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Container } from 'semantic-ui-react';

import './styles.scss';

const Login = ({
  changeField,
  email,
  password,
  isLogged,
}) => {
  const handleSubmit = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  };

  return (
    <Container>
      <Form className="login__form" onSubmit={handleSubmit}>
        <Form.Input
          className="login__form__input"
          type="email"
          name="email"
          label="Email"
          placeholder="Entrez votre adresse mail"
          value={email}
          onChange={(event) => {
            changeField(event.target.value, event.target.name);
          }}
        />
        <Form.Input
          className="login__form__input"
          type="password"
          name="password"
          label="Mot de passe"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(event) => {
            changeField(event.target.value, event.target.name);
          }}
        />
        <Button className="login__form__button">Connexion</Button>
      </Form>
    </Container>
  );
};


Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default Login;
