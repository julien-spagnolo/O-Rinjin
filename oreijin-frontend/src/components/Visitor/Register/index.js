// == Import npm
import React from 'react';
import { Header, Container, Segment, Form } from 'semantic-ui-react';
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
            />
          </Form.Field>
          <Form.Field required width={8}>
            <Form.Input
              label="Nom"
              placeholder="Nom"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field required width={10}>
            <Form.Input
              label="Pseudo"
              placeholder="Pseudo"
            />
          </Form.Field>
          <Form.Field required width={6}>
            <Form.Input
              label="Date de naissance"
              placeholder="Date de naissance"
            />
          </Form.Field>
        </Form.Group>
        <Form.Field required>
          <Form.Input
            label="Email"
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label="Mot de passe"
            placeholder="Mot de passe"
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label="Vérification du mot de passe"
            placeholder="Vérification du mot de passe"
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            label="Adresse"
            placeholder="Adresse"
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
