
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

    function FilmCard({ movie }) {
    return (
        <Card className="h-100 shadow-sm">
        <Card.Img
            variant="top"
            src={movie.image}
            alt={movie.title}
        />

        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Année : {movie.year}</Card.Text>
            <Card.Text>Genre : {movie.genre}</Card.Text>

            <Badge bg="warning" text="dark">
            Note : {movie.rating}/10
            </Badge>
        </Card.Body>
        </Card>
    );
    }

export default FilmCard;