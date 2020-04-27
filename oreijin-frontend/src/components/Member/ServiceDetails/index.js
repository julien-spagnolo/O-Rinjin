/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Segment, Form, TextArea, Comment,
  Label, Image, Divider, Button, Grid, Item, Rating,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './style.scss';
import Response from '../../../containers/Response';
import Validator from '../../../validator';

const ServiceDetails = ({
  onChangeFieldReply, reply,
  id,
  getService, service,
  category, getCategoriesList,
  addComment, isError, replyFormError,
  avatar,
}) => {
  useEffect(() => {
    if (!category) getCategoriesList();
    getService(id);
  }, []);

  return (
    <Segment as={Container} className="service" raised>
      <Grid container centered stackable>
        <Grid.Row>
          <Header style={{ fontSize: '1.5rem' }} as="h1" sub>{service.title}</Header>
          <Container style={{ marginTop: '0.7rem' }}>
            <Label>
              {service.type ? 'Proposition' : 'Demande' }
            </Label>
            <Label>
              {category && category.title}
            </Label>
            {/* <Container style={{ marginTop: '0.7rem' }} content="créé le ... - modifié le ..." textAlign="center" /> */}
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={9} as={Item.Group}>
            {/* {console.log(service.user)} */}
            <Item>
              <Item.Image src={avatar} size="small" circular />
              <Item.Content className="service__user__content">
                <Item.Header>{service.user.firstName} {service.user.lastName}</Item.Header>
                <Item.Extra>
                  <Label>
                  Fiabilité : <Rating icon="star" defaultRating={5} maxRating={5} />
                  </Label>
                </Item.Extra>
                <Item.Meta><Icon name="map marker alternate" /> {service.user.postalCode} - {service.user.city}</Item.Meta>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h5">
          Description
        </Header>
      </Divider>

      <Grid>
        <Grid.Row>
          <Grid.Column as={Container} textAlign="left" className="padding--left--right">
            {service.body}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {
        // photo is optionnal
        // if there's no photo, we don't display the photo section
        service.image && (
          <>
            <Divider horizontal>
              <Header as="h5">
                Photo
              </Header>
            </Divider>
            <Grid centered>
              <Grid.Row>
                <Image src={logo} />
              </Grid.Row>
            </Grid>
          </>
        )
      }

      <Divider horizontal>
        <Header as="h5">
          Réponses
        </Header>
      </Divider>

      <Grid>
        <Grid.Row>
          <Grid.Column as={Comment.Group} className="padding--left--right">
            {
              service.comment.length === 0 ? 'Soyez la première personne à répondre à ce service.' : service.comment.map((item) => <Response key={`${item.id}-comment`} {...item} />)
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h5">
          Se proposer
        </Header>
      </Divider>

      <Grid>
        <Grid.Row>
          <Grid.Column
            as={Form}
            reply
            onSubmit={(evt) => {
              evt.preventDefault();
              if (Validator.checkReply(reply)) addComment();
              else replyFormError();
            }}
          >
            {
              isError && reply === '' && <Label basic color="red" pointing="below">Entrez un commentaire</Label>
            }
            <TextArea
              placeholder="Envoyer une réponse"
              value={reply}
              onChange={(evt) => {
                onChangeFieldReply(evt.target.value);
              }}
            />
            <Button className="service__details__button" labelPosition="left" icon>
              <Icon name="reply" />
              Envoyer
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container>
        <Link to="/home">Retour à l'accueil</Link>
      </Container>
    </Segment>
  );
};

// À modifier
ServiceDetails.defaultProps = {
  category: null,
};

ServiceDetails.propTypes = {
  commentListLength: PropTypes.number.isRequired,
  onChangeFieldReply: PropTypes.func.isRequired,
  reply: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getService: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
  category: PropTypes.object,
  getCategoriesList: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default ServiceDetails;
