import "./project.css"
import { Button, Card, Row, Col } from "react-bootstrap"

const Project = ({ name, desc, img, link, github }) => {
    return (
        <Col className="p-col">
        <Card className="p-card">
            <Card.Img className="p-img" variant="top" src={img}></Card.Img>
            <Card.Body>
                <Card.Title><h2 className="p-title">{name}</h2></Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Footer>
            <Row xs={2}>
                    {link !== undefined ? <Col>
                    <Button href={link} target="_blank" rel="noreferrer">Demo</Button>
                    </Col> : <></>}
                    <Col>
                    <Button href={github} target="_blank" rel="noreferrer">Github</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card></Col>
    )
}

export default Project