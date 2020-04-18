/* eslint-disable max-len */
import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container, Header, Segment, Form, TextArea, Comment,
  Label, Image, Divider, Button, Grid, Item, Rating,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './style.scss';
import logo from '../../../assets/images/logo.png';

const ServiceDetails = () => (
  <Segment as={Container} className="service" raised>
    <Grid container centered stackable>
      <Grid.Row>
        <Header style={{ fontSize: '1.5rem' }} as="h1" sub>Titre du Service</Header>
        <Container style={{ marginTop: '0.7rem' }}>
          <Label>
            Proposition
          </Label>
          <Label>
            Jardinage
          </Label>
          <Container style={{ marginTop: '0.7rem' }} content="créé le ... - modifié le ..." textAlign="center" />
        </Container>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={9} as={Item.Group}>
          <Item>
            <Item.Image src={logo} size="small" circular />
            <Item.Content className="service__user__content">
              <Item.Header>Prénom Nom</Item.Header>
              <Item.Extra>
                <Label>
                Fiabilité : <Rating icon="star" defaultRating={1} maxRating={5} />
                </Label>
              </Item.Extra>
              <Item.Meta><Icon name="map marker alternate" /> Code Postal - Ville</Item.Meta>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet elit et erat placerat, et fermentum felis malesuada. Vestibulum id nulla blandit, ornare velit sit amet, malesuada urna. Sed hendrerit viverra elit, eu imperdiet mi rhoncus eget. Vestibulum gravida sed turpis et commodo. Suspendisse potenti. Proin ac dolor rutrum, suscipit lorem eu, fringilla ante.
        </Grid.Column>
      </Grid.Row>
    </Grid>

    {
      // photo is optionnal
      // if there's no photo, we don't display the photo section
      logo && (
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
          <Comment>
            <Comment.Avatar src={logo} />
            <Comment.Content>
              <Comment.Author>Reijin 1</Comment.Author>
              <Comment.Metadata>
                <Comment.Text>
                  3 days ago
                </Comment.Text>
              </Comment.Metadata>
              <Comment.Text>Réponse ...</Comment.Text>
            </Comment.Content>
          </Comment>
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
        <Grid.Column as={Form} reply>
          <TextArea placeholder="Envoyer une réponse" />
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


/* ServiceDetails.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}; */

export default ServiceDetails;
