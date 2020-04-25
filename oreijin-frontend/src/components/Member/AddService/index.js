import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Header, Container, Segment, Form, Button, Select, Radio, Message, Label,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import Validator from '../../../validator';

import './styles.scss';

const AddService = ({
  form, onChangeField, onChangeFieldType,
  addService, isSuccess, isError, resetServiceForm,
  categories, getCategoriesList, errors,
}) => {
  useEffect(() => {
    // console.log('//== useEffect !!!');
    getCategoriesList();
    resetServiceForm();
  }, []);

  return (
    <Container>
      <Segment raised>
        <Header as="h1" dividing textAlign="center">Créer un service</Header>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            // console.log(form.user);
            if (Validator.checkServiceForm(form, categories)) addService(form.user);
            else console.log('Error submit form');
          }}
          success
          error
        >
          <Message
            success
            hidden={!isSuccess}
            header="Création d'un service réussi !"
            content="Vous n'avez plus qu'a attendre une réponse d'un de nos utilisateurs !"
          />
          <Message
            error
            hidden={!isError}
          >
            <Message.Header>La création du service a échoué !</Message.Header>
            {
              errors.map((error) => (
                <div key={error}>{error}</div>
              ))
            }
          </Message>
          <Form.Field width={16}>
            {
              form.title !== '' && !Validator.checkServiceTitle(form.title) ? <Label basic color="red" pointing="below">Indiquez un titre valide. caractères spéciaux autorisés : -!?'.,</Label> : null
            }
            <Form.Input
              required
              label="Intitulé du service"
              placeholder="Intitulé du service (entre 10 et 60 caractères)"
              type="text"
              name="title"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.title}
            />
          </Form.Field>
          {
            !form.serviceCategory ? <Label basic color="red" pointing="below">Sélectionnez une catégorie.</Label> : null
          }
          <Form.Group>
            <Form.Field
              required
              width={8}
              control={Select}
              label="Catégorie"
              options={categories}
              placeholder="Choisir une catégorie"
              name="category"
              onChange={(evt, { value }) => {
                onChangeField('serviceCategory', value);
                console.log(Validator.checkServiceCategory(value, categories));
              }}
            />
            <Form.Group grouped>
              <Form.Field>
                Type de service
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Demande"
                  name="type"
                  value={0}
                  checked={form.type === false}
                  onChange={(evt, { value }) => {
                    onChangeFieldType(value);
                    // console.log(value);
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Proposition"
                  name="type"
                  value={1}
                  checked={form.type === true}
                  onChange={(evt, { value }) => {
                    onChangeFieldType(value);
                    console.log(value);
                  }}
                />
              </Form.Field>
            </Form.Group>
          </Form.Group>
          {/* <Form.Group widths={3}>
            <Form.Field
              // width={4}
              control={Select}
              label="Tag 1"
              options={dropdownOptions}
              placeholder="Tag1"
              clearable
              // onChange={(evt) => {
              //   onChangeField(evt.target.name, evt.target.value);
              // }}
            />
            <Form.Field
              // width={4}
              control={Select}
              label="Tag 2"
              options={dropdownOptions}
              placeholder="Tag 2"
              clearable
              // onChange={(evt) => {
              //   onChangeField(evt.target.name, evt.target.value);
              // }}
            />
            <Form.Field
              // width={4}
              control={Select}
              label="Tag 3"
              options={dropdownOptions}
              placeholder="Tag 3"
              clearable
              // onChange={(evt) => {
              //   onChangeField(evt.target.name, evt.target.value);
              // }}
            />
                </Form.Group> */}
          <Button disabled style={{ marginBottom: '0.7rem' }} content="Importer une image" icon="upload" labelPosition="left" />
          {
            form.body !== '' && !Validator.checkServiceDescription(form.body) ? <Label basic color="red" pointing="below">Indiquez une description valide. caractères spéciaux autorisés : -!?'.()",+;:</Label> : null
          }
          <Form.TextArea
            required
            label="Description du service"
            placeholder="Ajoutez une description (entre 50 et 280 caractères)"
            value={form.body}
            name="body"
            onChange={(evt) => {
              onChangeField(evt.target.name, evt.target.value);
            }}
            style={{ minHeight: 150 }}
          />
          {/* TODO loading={loading}  */}
          <Button as={Link} to="/home" secondary>Annuler</Button>
          <Button type="submit" className="register__form__button">Valider</Button>
        </Form>
      </Segment>
    </Container>
  );
};

AddService.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    type: PropTypes.bool.isRequired,
    image: PropTypes.string,
    user: PropTypes.number,
    serviceCategory: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onChangeFieldType: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
  resetServiceForm: PropTypes.func.isRequired,
  getCategoriesList: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
};

export default AddService;
