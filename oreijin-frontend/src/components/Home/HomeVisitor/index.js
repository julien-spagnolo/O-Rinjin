// == Import npm
import React, { useEffect, useState } from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Divider, Grid, Card, Header, Container, Segment,
} from 'semantic-ui-react';

import Carousel from 'semantic-ui-carousel-react';

import PropTypes from 'prop-types';

// == Import components
import Service from '../../Visitor/ServiceVisitor';
import UserCard from '../../Visitor/UserCard';

// == Import styles and assets
import './styles.scss';

// == Component
const HomeVisitor = ({
  services, users, getServicesExcerpt, getUsersExcerpt,
}) => {
  // With stackable props, the grid has its columns stack on-top of each other
  // after reaching mobile breakpoints
  useEffect(() => {
    window.scrollTo(0, 0);
    getServicesExcerpt();
    getUsersExcerpt();
  }, []);

  const elements = services.map((service) => ({
    render: () => <Service key={service.title} {...service} />,
  }));

  const [wordToDisplay, setWordToDisplay] = useState(0);
  const serviceWords = [
    'Jardinage',
    'Bricolage',
    'Aide à la mobilité',
    'Covoiturage',
    'Cours à domicile',
    'Et plus encore...',
  ];

  useEffect(() => {
    const next = (wordToDisplay + 1) % serviceWords.length;
    const id = setTimeout(() => setWordToDisplay(next), 2000);
    return () => clearTimeout(id);
  }, [wordToDisplay]);

  return (
    <Grid container stackable>
      {/* Width for differents breakpoints  */}
      <Grid.Column tablet={16} computer={8}>
        <Divider horizontal>
          <Header as="h1">O'Rinjin</Header>
        </Divider>
        <Container className="visitor__intro">
          <p className="main__paragraph">Bienvenue sur <em className="main__em">o'Rinjin</em>, le site d'entraide entre particuliers .</p>
          <p className="main__paragraph">o'Rinjin vous offre un choix de services variés dans plusieurs domaines : <em className="main__em">{serviceWords[wordToDisplay]}</em></p>
          <p className="main__paragraph">Ici, vous trouverez forcement un rinjin pour vous aider !</p>
          <p className="main__paragraph">Inscrivez vous et bénéficiez <em className="main__em">gratuitement</em> d'un réseau de personnes pour proposer votre aide ou bien en recevoir .</p>
          <p className="main__paragraph">Un <em className="main__em">rinjin</em>, quésaquo ? C'est une personne près de chez vous prête à vous rendre service et juste pour vos beaux yeux !</p>
        </Container>
      </Grid.Column>
      <Grid.Column tablet={16} computer={8}>
        <Divider horizontal>
          <Header as="h1">Aperçu</Header>
        </Divider>
        <Segment>
          <Carousel
            elements={elements}
            // duration={4000}
            animation="fade right"
            showNextPrev={false}
            showIndicators
          />
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={16}>
        <Divider horizontal>
          <Header as="h2"> Rinjin les plus actifs </Header>
        </Divider>
        <Card.Group centered>
          {
            // Render a Card component for each card in data
            users.map((card) => (
              <UserCard key={card.id} {...card} />
            ))
          }
        </Card.Group>
      </Grid.Column>
    </Grid>
  );
};

HomeVisitor.propTypes = {
  services: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  getServicesExcerpt: PropTypes.func.isRequired,
  getUsersExcerpt: PropTypes.func.isRequired,
};

// == Export
export default HomeVisitor;
