import "./project.css"
import { Button, Card, Row, Col } from "react-bootstrap"

const Project = ({ name, img, link, github }) => {
    return (
        <Col className="p-col">
        <Card className="p-card">
            <Card.Img className="p-img" variant="top" src={img}></Card.Img>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>A mobile Recipe organizer, powered by Ionic framework and Firebase backend.</Card.Text>
            </Card.Body>
            <Card.Footer>
            <Row xs={2}>
                    <Col>
                    <Button href={link} target="_blank">Demo</Button>
                    </Col>
                    <Col>
                    <Button href={github} target="_blank">Github</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card></Col>
    )
}

export default Project