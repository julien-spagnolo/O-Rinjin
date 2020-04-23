// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Divider, Grid, Card, Header, Container, Segment,
} from 'semantic-ui-react';

// == Import components
import UserCard from '../../Partials/UserCard';
import Service from '../../../containers/Service';
import cards from '../../../cards';
import services from '../../../services-visitor';

// == Import styles and assets
import './styles.scss';

// == Component
const Main = () => (
  // With stackable props, the grid has its columns stack on-top of each other
  // after reaching mobile breakpoints
  <Grid container stackable>
    {/* Width for differents breakpoints  */}
    <Grid.Column tablet={16} computer={8}>
      <Divider horizontal>
        <Header as="h1">O'Rinjin</Header>
      </Divider>
      <Container className="visitor__intro">
        <p className="main__paragraph">Bienvenue sur <em className="main__em">o'Rinjin</em>, le site d'entraide entre particuliers</p>
        <p className="main__paragraph">Vous avez besoin d'un coup de main pour : "<em className="main__em">SERVICE</em>" ? Ici, vous trouverez forcement un rinjin pour vous aider !</p>
        <p className="main__paragraph">Inscrivez vous et bénéficiez <em className="main__em">gratuitement</em> d'un réseau de personnes pour proposer votre aide ou bien en recevoir</p>
        <p className="main__paragraph">Un <em className="main__em">rinjin</em>, quésaquo ? C'est une personne près de chez vous prête à vous rendre service et juste pour vos beaux yeux !</p>
      </Container>
    </Grid.Column>
    <Grid.Column tablet={16} computer={8}>
      <Divider horizontal>
        <Header as="h1">Annonces disponibles</Header>
      </Divider>
      <Segment>
        WIP
        {
          // Render a Service component for each service in data
          // services.map((service) => (
          //  <Service key={service.title} {...service} />
          // ))
        }
      </Segment>
    </Grid.Column>
    <Grid.Column mobile={16} tablet={16} computer={16}>
      <Divider horizontal>
        <Header as="h2"> Rinjin les plus actifs </Header>
      </Divider>
      <Card.Group centered>
        {
          // Render a Card component for each card in data
          cards.map((card) => (
            <UserCard key={card.userName} userName={card.userName} pc={card.pc} />
          ))
        }
      </Card.Group>
    </Grid.Column>
  </Grid>

);

// == Export
export default Main;
