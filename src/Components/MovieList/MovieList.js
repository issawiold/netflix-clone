import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function MovieList(props, { callback }) {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt={props.title} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.date}
                </Card.Text>
                <Link to={`/movie/${props.id}`} onClick={() => callback(props.id)}>
                    <Button variant="primary">Learn more</Button>
                </Link>
            </Card.Body>
        </Card>

    );
}

export default MovieList;