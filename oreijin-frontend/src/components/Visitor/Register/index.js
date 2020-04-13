// == Import npm
import React from 'react';
import {
  Header, Container, Segment, Form,
} from 'semantic-ui-react';
// == Import

import './styles.scss';

// == Composant
const Register = () => (
  <Container>
    <Segment raised>
      <Header as="h1" dividing textAlign="center">Inscription</Header>
      <Form>
        <Form.Group>
          <Form.Field required width={8}>
            <Form.Input
              label="Prénom"
              placeholder="Prénom"
              type="text"
            />
          </Form.Field>
          <Form.Field required width={8}>
            <Form.Input
              label="Nom"
              placeholder="Nom"
              type="text"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field required width={10}>
            <Form.Input
              label="Pseudo"
              placeholder="Pseudo"
              type="text"
            />
          </Form.Field>
          <Form.Field required width={6}>
            <Form.Input
              label="Date de naissance"
              placeholder="Date de naissance"
              type="date"
            />
          </Form.Field>
        </Form.Group>
        <Form.Field required>
          <Form.Input
            label="Email"
            placeholder="Email"
            type="email"
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label="Mot de passe"
            placeholder="Mot de passe"
            type="password"
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label="Vérification du mot de passe"
            placeholder="Vérification du mot de passe"
            type="password"
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label="Adresse"
            placeholder="Adresse"
            type="text"
          />
        </Form.Field>
        <Form.Field required>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Form.Button type="submit">Soumettre</Form.Button>
      </Form>
    </Segment>
  </Container>
);

// == Export
export default Register;
