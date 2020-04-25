// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Container, Segment, Form, Button, Message, Label,
} from 'semantic-ui-react';

import {
  checkEmail, checkPassword, getMaxDateInput, checkBirthDate,
  verifyPassword, checkAddress, checkCity, checkPostalCode, checkName,
} from '../../../functions';

// == Import
import './styles.scss';

// == Composant
const Register = ({
  form, isTCChecked, onChangeField, onToggleTC, handleSubmit, loading, isSuccess, isError,
}) => (
  <Container>
    <Segment raised>
      <Header as="h1" dividing textAlign="center">Inscription</Header>
      <Form
        onSubmit={(evt, value) => {
          evt.preventDefault();
          console.log({ value });
          if (isTCChecked) {
            handleSubmit();
          }
          else {
            console.log('pas bon la checkbox');
          }
        }}
        success
        error
      >

        <Message
          success
          hidden={!isSuccess}
          header="Inscription réussi !"
          content="Allez sur la page de connexion !"
        />

        <Message
          error
          hidden={!isError}
          header="L'inscription a échoué !"
          content="Veuillez remplir à nouveau le formulaire"
        />
        <Form.Group>
          <Form.Field width={8}>
            <Form.Input
              required
              label="Prénom"
              placeholder="Prénom"
              type="text"
              name="firstname"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
                console.log(checkName(evt.target.value));
              }}
              value={form.firstname}
            />
            {
              form.firstname !== '' && !checkName(form.firstname) ? <Label color="red" pointing>Indiquez un prénom valide</Label> : null
            }
          </Form.Field>
          <Form.Field width={8}>
            <Form.Input
              required
              label="Nom"
              placeholder="Nom"
              type="text"
              name="lastname"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
                console.log(checkName(evt.target.value));
              }}
              value={form.lastname}
            />
            {
              form.lastname !== '' && !checkName(form.lastname) ? <Label color="red" pointing>Indiquez un nom valide</Label> : null
            }
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field required width={10}>
            <Form.Input
              required
              label="Email"
              placeholder="Email"
              type="email"
              name="email"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
                console.log(checkEmail(evt.target.value));
              }}
              value={form.email}
            />
            {
              form.email !== '' && !checkEmail(form.email) ? <Label color="red" pointing>Indiquez un email valide</Label> : null
            }
          </Form.Field>
          <Form.Field required width={6}>
            <Form.Input
              required
              label="Date de naissance"
              placeholder="Date de naissance"
              type="date"
              max={getMaxDateInput()}
              name="birthdate"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
                console.log(checkBirthDate(evt.target.value));
              }}
              value={form.birthdate}
            />
            {
              form.birthdate !== '' && !checkBirthDate(form.birthdate) ? <Label color="red" pointing>Indiquez une date valide (18 ans minimum)</Label> : null
            }
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Form.Input
            required
            label="Mot de passe"
            placeholder="Mot de passe"
            type="password"
            name="plainPassword"
            onChange={(evt) => {
              onChangeField(evt.target.name, evt.target.value);
              console.log(checkPassword(evt.target.value));
            }}
            value={form.plainPassword}
          />
          {
            form.plainPassword !== '' && !checkPassword(form.plainPassword) ? <Label color="red" pointing>Doit contenir au moins 6 caractères, dont 1 majuscule, 1 chiffre et 1 caractère spécial</Label> : null
          }
        </Form.Field>
        <Form.Field>
          <Form.Input
            required
            label="Vérification du mot de passe"
            placeholder="Vérification du mot de passe"
            type="password"
            name="verificationPassword"
            onChange={(evt) => {
              onChangeField(evt.target.name, evt.target.value);
              console.log(verifyPassword(form.plainPassword, evt.target.value));
            }}
            value={form.verificationPassword}
          />
          {
            form.verificationPassword !== '' && form.verificationPassword !== form.plainPassword ? <Label color="red" pointing>Le mot de passe ne correspond pas</Label> : null
          }
        </Form.Field>
        <Form.Group>
          <Form.Field width="8">
            <Form.Input
              required
              label="Rue"
              placeholder="4 rue ..."
              type="text"
              name="address"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
                console.log('Rue : ', checkAddress(evt.target.value));
              }}
              value={form.address}
            />
            {
              form.address !== '' && !checkAddress(form.address) ? <Label color="red" pointing>Indiquez votre adresse</Label> : null
            }
          </Form.Field>
          <Form.Field width="4">
            <Form.Input
              required
              label="Ville"
              placeholder="Ville"
              type="text"
              name="city"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
                console.log('Ville : ', checkCity(evt.target.value));
              }}
              value={form.city}
            />
            {
              form.city !== '' && !checkCity(form.city) ? <Label color="red" pointing>Indiquez votre ville</Label> : null
            }
          </Form.Field>
          <Form.Field width="4">
            <Form.Input
              required
              maxLength={5}
              label="Code Postal"
              placeholder="Code Postal"
              type="text"
              name="postalcode"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
                console.log('Code postale : ', checkPostalCode(evt.target.value));
              }}
              value={form.postalcode}
            />
            {
              form.postalcode !== '' && !checkPostalCode(form.postalcode) ? <Label color="red" pointing>Indiquez votre code postal</Label> : null
            }
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Form.Checkbox
            required
            label="J'accepte les termes et conditions d'inscription"
            onChange={onToggleTC}
            checked={isTCChecked}
          />
          {
            !isTCChecked ? <Label color="red" pointing>Obligatoire</Label> : null
          }
        </Form.Field>
        <Button loading={loading} type="submit" className="register__form__button">Soumettre</Button>
      </Form>
    </Segment>
  </Container>
);

Register.propTypes = {
  form: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    plainPassword: PropTypes.string.isRequired,
    verificationPassword: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string.isRequired,
    postalcode: PropTypes.string.isRequired,
  }).isRequired,
  isTCChecked: PropTypes.bool.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onToggleTC: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};
// == Export
export default Register;
