import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Header, Container, Segment, Form, Button, Select, Radio, Message,
} from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
// import './styles.scss';

const UpdateService = ({
  id, categories, getCategoriesList,
  getService, author, onChangeFieldEdit,
  form, userId, editService,
  resetServiceForm,
  isSuccess, isError,
}) => {
  const history = useHistory();
  useEffect(() => {
    // console.log('//== useEffect !!!');
    resetServiceForm();
    getCategoriesList();
    getService(id);
  }, []);

  useEffect(() => {
    // console.log('userID : ', userId);
    // console.log('authorID : ', author.id);
    if (author.id && author.id !== userId) history.push('/home');
  }, [author]);

  return (
    <Container>
      <Segment raised>
        <Header as="h1" dividing textAlign="center">Modifier votre service</Header>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            editService();
          }}
          success
          error
        >
          <Message
            success
            hidden={!isSuccess}
            header="Votre service a bien été modifié !"
            content="Vous n'avez plus qu'à attendre une réponse d'un de nos utilisateurs !"
          />
          <Message
            error
            hidden={!isError}
            header="La modification du service a échoué !"
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
                onChangeFieldEdit(evt.target.name, evt.target.value);
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
              options={categories}
              placeholder="Choisir une catégorie"
              value={form.serviceCategory.id}
              name="category"
              onChange={(evt, { value }) => {
                onChangeFieldEdit('serviceCategory', value);
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
                  disabled
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Proposition"
                  name="type"
                  value={1}
                  checked={form.type === true}
                  disabled
                />
              </Form.Field>
            </Form.Group>
          </Form.Group>
          <Button style={{ marginBottom: '0.7rem' }} content="Importer une image" icon="upload" labelPosition="left" />
          <Form.TextArea
            label="Description du service"
            placeholder="Ajoutez une description ... "
            value={form.body}
            name="body"
            style={{ minHeight: 150 }}
            onChange={(evt) => {
              onChangeFieldEdit(evt.target.name, evt.target.value);
            }}
          />
          {/* TODO loading={loading}  */}
          <Button as={Link} to="/home" secondary>Annuler</Button>
          <Button type="submit" className="register__form__button">Enregistrer mes modifications</Button>
        </Form>
      </Segment>
    </Container>
  );
};


UpdateService.propTypes = {
  id: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  author: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  onChangeFieldEdit: PropTypes.func.isRequired,
  getCategoriesList: PropTypes.func.isRequired,
  getService: PropTypes.func.isRequired,
  editService: PropTypes.func.isRequired,
  resetServiceForm: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default UpdateService;
