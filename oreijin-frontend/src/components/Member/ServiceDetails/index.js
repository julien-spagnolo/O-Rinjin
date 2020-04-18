import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container, Header, Segment, Form, TextArea, Feed,
  Label, Image, Divider, Button, Grid, Item, Rating,
} from 'semantic-ui-react';

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
        </Container>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8} as={Item.Group}>
          <Item>
            <Item.Image src={logo} size="small" circular />
            <Item.Content className="service__user__content">
              <Item.Header>Nom du Membre</Item.Header>
              <Item.Extra>
                <Label>
                Fiabilité : <Rating icon="star" defaultRating={1} maxRating={5} />
                </Label>
              </Item.Extra>
              <Item.Meta>Code Postal - Ville</Item.Meta>
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

    <Divider horizontal>
      <Header as="h5">
        Réponses
      </Header>
    </Divider>

    <Grid>
      <Grid.Row>
        <Grid.Column as={Feed} className="padding--left--right">
          <Feed.Event>
            <Feed.Label image={logo} />
            <Feed.Content>
              <Feed.Date>3 days ago</Feed.Date>
              <Feed.Summary>
                <a>Membre 1</a>
              </Feed.Summary>
              <Feed.Extra text>
                Réponse 1
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
            <Feed.Label image={logo} />
            <Feed.Content>
              <Feed.Date>3 days ago</Feed.Date>
              <Feed.Summary>
                <a>Membre 2</a>
              </Feed.Summary>
              <Feed.Extra text>
                Réponse 2
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
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
        <Grid.Column as={Form}>
          <TextArea placeholder="Envoyer une réponse" />
          <Button className="service__details__button" onClick={console.log('coucou')}>Envoyer</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);


/* ServiceDetails.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}; */

export default ServiceDetails;
