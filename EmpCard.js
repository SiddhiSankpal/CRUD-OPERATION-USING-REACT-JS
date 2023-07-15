import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function EmpCard({ myemp }) {
  //let { id, name, email, department } = props.myemp
   const navigate = useNavigate()
   let handleClick = () => { navigate(-1) }
  return (
    <Card style={{ width: '18rem', margin: "50px", background: "lavender" }}>
      <Card.Body>
        <Card.Title>Employee Details</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Employee</Card.Subtitle>
        <Card.Text>
          {myemp.id}
        </Card.Text>
        <Card.Text>
          {myemp.name}
        </Card.Text>
        <Card.Text>
          {myemp.email}
        </Card.Text>
        <Card.Text>
          {myemp.department}
        </Card.Text>
        <Card.Text>
          {myemp.age}
        </Card.Text>
        <Button  variant="primary" onClick={handleClick}>Back</Button>
      </Card.Body>
    </Card>
  );
}

export default EmpCard;