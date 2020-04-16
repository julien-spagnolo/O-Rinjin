// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Divider, Grid, Card, Header, Feed, Segment, 
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
      <Divider />
      <p className="main__paragraph">Bienvenue sur <em className="main__em">o'Reijin</em>, le site d'entraide entre particuliers</p>
      <p className="main__paragraph">Vous avez besoin d'un coup de main pour : "<em className="main__em">SERVICE</em>" ? Ici, vous trouverez forcement un reijin pour vous aider !</p>
      <p className="main__paragraph">Inscrivez vous et bénéficiez <em className="main__em">gratuitement</em> d'un réseau de personnes pour proposer votre aide ou bien en recevoir</p>
      <p className="main__paragraph">Un <em className="main__em">reijin</em>, quésaquo ? C'est une personne près de chez vous prête à vous rendre service et juste pour vos beaux yeux !</p>
    </Grid.Column>
    <Grid.Column tablet={16} computer={8}>
      <Divider />
      <Header className="main__services__header" as="h2" textAlign="center"> Services disponibles </Header>
      <Segment>
        {
          // Render a Service component for each service in data
          services.map((service) => (
            <Service key={service.title} {...service} />
          ))
        }
      </Segment>
    </Grid.Column>
    <Divider />
    <Grid.Column mobile={16} tablet={16} computer={16}>
      <Divider />
      <Header className="main__usercard__header" as="h2" textAlign="center"> Reijin les plus actifs </Header>
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
