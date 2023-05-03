import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Usuarios = () => {
  return (
    <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Title as="h5">Lista de usuarios</Card.Title>
        </Card.Header>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </CardGroup>
  )
}

export default Usuarios;