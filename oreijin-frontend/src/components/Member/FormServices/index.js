import React from 'react';
import {
  Header, Container, Segment, Form, Button, Select, Radio,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

const FormServices = () => {
  // Static variable before getting categories from API
  const dropdownOptions = [
    {
      key: 'Aide à domicile',
      text: 'Aide à domicile',
      value: 'Aide à domicile',
    },
    {
      key: 'Bricolage et dépannage',
      text: 'Bricolage et dépannage',
      value: 'Bricolage et dépannage',
    },
    {
      key: 'Aide à la mobilité',
      text: 'Aide à la mobilité',
      value: 'Aide à la mobilité',
    },
  ];

  const value = '1';

  return (
    <Container>
      <Segment raised>
        <Header as="h1" dividing textAlign="center">Créer un service</Header>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            // TODO handleSubmit()
          }}
          success
          error
        >
          {/* <Message 
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
          /> */}
          <Form.Group>
            <Form.Field width={10}>
              <Form.Input
                required
                label="Intitulé du service"
                placeholder="Intitulé du service"
                type="text"
                name="title"
                onChange={(evt) => {
                  // onChangeField(evt.target.name, evt.target.value);
                }}
                value="{form.firstname}"
              />
            </Form.Field>
            <Form.Field
              required
              width={4}
              control={Select}
              label="Catégories"
              options={dropdownOptions}
              placeholder="Choisir une catégorie"
              clearable
            />
          </Form.Group>
          <Form.Field>
            Type de service
          </Form.Field>
          <Form.Field>
            <Radio
              label="Demande"
              name="radioGroup"
              value="1"
              checked={value === '1'}

            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Proposition"
              name="radioGroup"
              value="2"
              checked={value === '2'}
            />
          </Form.Field>
          <Form.Group>
            <Form.Field
              width={4}
              control={Select}
              label="Tag 1"
              options={dropdownOptions}
              placeholder="Tag1"
              clearable
            />
            <Form.Field
              width={4}
              control={Select}
              label="Tag 2"
              options={dropdownOptions}
              placeholder="Tag 2"
              clearable
            />
            <Form.Field
              width={4}
              control={Select}
              label="Tag 3"
              options={dropdownOptions}
              placeholder="Tag 3"
              clearable
            />
          </Form.Group>
          <Form.Button>
            Importer une image
          </Form.Button>
          <Form.TextArea
            label="Description du service"
            placeholder="Ajoutez une description ... "
          />
          {/* TODO loading={loading}  */}
          <Button as={Link} to="/home" secondary>Annuler</Button>
          <Button type="submit" className="register__form__button">Valider</Button>
        </Form>
      </Segment>
    </Container>
  );
};
export default FormServices;
