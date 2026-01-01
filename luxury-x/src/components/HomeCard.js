import Card from 'react-bootstrap/Card';

function HomeCard({ icon, title, description}) {
  return (
    <Card style={{ width: '25rem', height: '15rem' }}>
      <Card.Body style={{ textAlign: 'center'}} className='mt-4'>
        <i class={"bi bi-" + icon + " fs-2"}></i>
        <Card.Title className='mt-3'>{title}</Card.Title>
        <Card.Text className='mt-3'>
        {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;