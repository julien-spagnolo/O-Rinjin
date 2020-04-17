import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Header, Container, Segment, Form, Button, Select, Radio, Message, Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

const FormServices = ({
  form, onChangeField, onChangeFieldType, addService, isSuccess, isError, resetServiceForm,
}) => {
  // Static variable before getting categories from API

  // TODO map on category list
  // TODO return a list of objects with the shape of
  // {
  //   key: category.id,
  //   text: category.title,
  //   value: category.id,
  // }

  const dropdownOptions = [
    {
      key: 'Aide à domicile',
      text: 'Aide à domicile',
      value: 0,
    },
    {
      key: 'Bricolage et dépannage',
      text: 'Bricolage et dépannage',
      value: 1,
    },
    {
      key: 'Aide à la mobilité',
      text: 'Aide à la mobilité',
      value: 2,
    },
  ];

  useEffect(() => {
    console.log('//== useEffect !!!');
    // TODO action to reset states
    resetServiceForm();
  }, []);

  return (
    <Container>
      <Segment raised>
        <Header as="h1" dividing textAlign="center">Créer un service</Header>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            addService(form.created_by);
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
            header="La création du service a échoué !"
            content="Veuillez remplir à nouveau le formulaire"
          />
          <Form.Field width={16}>
            <Form.Input
              required
              label="Intitulé du service"
              placeholder="Intitulé du service"
              type="text"
              name="title"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.title}
            />
          </Form.Field>
          <Form.Group>
            <Form.Field
              required
              width={8}
              control={Select}
              label="Catégorie"
              options={dropdownOptions}
              placeholder="Choisir une catégorie"
              clearable
              name="category"
              onChange={(evt, { value }) => {
                onChangeField('service_category_id', value);
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
                  checked={form.type === 0}
                  onChange={(evt, { value }) => {
                    onChangeFieldType(value);
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Proposition"
                  name="type"
                  value={1}
                  checked={form.type === 1}
                  onChange={(evt, { value }) => {
                    onChangeFieldType(value);
                  }}
                />
              </Form.Field>
            </Form.Group>
          </Form.Group>
          <Form.Group widths={3}>
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
          </Form.Group>
          <Button style={{ marginBottom: '0.7rem' }} content="Importer une image" icon="upload" labelPosition="left" />
          <Form.TextArea
            label="Description du service"
            placeholder="Ajoutez une description ... "
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

FormServices.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    image: PropTypes.string,
    created_by: PropTypes.number,
    update_by: PropTypes.string,
  }).isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onChangeFieldType: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
  resetServiceForm: PropTypes.func.isRequired,
};

export default FormServices;
