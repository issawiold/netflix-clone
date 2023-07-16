import Card from 'react-bootstrap/Card';

function Movie(props) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} alt={props.title} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    release date:{props.date}
                    overview : {props.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Movie;