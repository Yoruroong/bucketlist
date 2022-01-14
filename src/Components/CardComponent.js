import {Card} from 'react-bootstrap'

export default function CardComponent({note}) {
    return (
        <Card style={note.successdetails ? { cursor: "pointer" } : { cursor: "default" }} className={note.successdetails ? "shadow hoverbackground": "shadow"}>
          <Card.Img variant="top" src={note.image ? "images/" + note.image : ""} />
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              {note.details}
            </Card.Text>
            <Card.Footer>
                <small className="text-muted">{note.success == 1 ? `완료됨: ${note.date}` : "미완료"}</small>
            </Card.Footer>
          </Card.Body>
        </Card>
    )
}