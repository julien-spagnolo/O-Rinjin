import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Container, Segment, Header } from 'semantic-ui-react';

import './styles.scss';

const Login = ({
  changeField,
  handleLogin,
  handleLogout,
  username,
  password,
  isLogged,
}) => {
  const handleSubmit = () => {
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    handleLogin();
  };

  return (
    <Container>
      <Segment className="login__segment" raised>
        <Header as="h1" dividing textAlign="center">Connexion</Header>
        <Form className="login__form" onSubmit={handleSubmit}>
          <Form.Input
            className="login__form__input"
            required
            type="email"
            name="username"
            label="Email"
            placeholder="Entrez votre adresse mail"
            value={username}
            onChange={(event) => {
              changeField(event.target.value, event.target.name);
            }}
          />
          <Form.Input
            className="login__form__input"
            required
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
      </Segment>
    </Container>
  );
};


Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Login;
