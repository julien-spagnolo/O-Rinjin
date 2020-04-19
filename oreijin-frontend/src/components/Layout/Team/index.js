// == Import npm
import React from 'react';

import {
  Header, Container, Card, Icon, Image,
} from 'semantic-ui-react';
// == Import

import './styles.scss';
import logo from '../../../assets/images/logo.png';

// == Composant
const Team = () => (
  <Container>
    <Header as="h2" textAlign="center">Notre équipe</Header>
    <Card.Group centered itemsPerRow={2}>
      <Card style={{ width: '250px', height: '500px' }} raised>
        <Image src={logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Hélène</Card.Header>
          <Card.Meta>
            Dev Backend/Symfony
          </Card.Meta>
          <Card.Description>
            Elle fait partie du duo de développeurs backend qui s'occupe de tout ce qui touche à Symfony coté serveur
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://fr.linkedin.com/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
      <Card style={{ width: '250px', height: '500px' }} raised>
        <Image src={logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Julien</Card.Header>
          <Card.Meta>
            Lead Dev Backend/Symfony
          </Card.Meta>
          <Card.Description>
            Il fait partie du duo de développeurs backend qui s'occupe de tout ce qui touche
            à Symfony coté serveur.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://fr.linkedin.com/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
      <Card style={{ width: '250px', height: '500px' }} raised>
        <Image src={logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Bryan</Card.Header>
          <Card.Meta>
            Lead Dev Frontend/React
          </Card.Meta>
          <Card.Description>
            Il fait partie du duo de développeurs frontend qui s'occupe de tout ce qui touche
            à React et au coté client.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://fr.linkedin.com/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
      <Card style={{ width: '250px', height: '500px' }} raised>
        <Image src={logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Jonathan</Card.Header>
          <Card.Meta>
            Dev Backend/Symfony
          </Card.Meta>
          <Card.Description>
            Il fait partie du duo de développeurs frontend qui s'occupe de tout ce qui touche
            à React et au coté client.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://fr.linkedin.com/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
);

// == Export
export default Team;
