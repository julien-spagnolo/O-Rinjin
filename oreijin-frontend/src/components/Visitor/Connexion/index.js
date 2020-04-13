import React from 'react';

import { Button, Form } from 'semantic-ui-react';

import './styles.scss';

const Connexion = () => (

  <Form success>
    <Form.Input type="email" name="email" label="Email" placeholder="Entrez votre adresse mail" />
    <Form.Input type="password" name="password" label="Mot de passe" placeholder="Entrez votre mot de passe" />
    <Button>Connexion</Button>
  </Form>

);

export default Connexion;
