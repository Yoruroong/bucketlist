import {Card, Button, Modal} from 'react-bootstrap'
import React from 'react'

export default function CardComponent({note}) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card style={note.successdetails ? { cursor: "pointer" } : { cursor: "default" }} className={note.successdetails ? "shadow hoverbackground": "shadow"} onClick={() => setModalShow(true)}>
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
            <NoteModal
                show={modalShow}
                note={note}
                onHide={() => setModalShow(false)}
            />
        </Card>
    )
}

function NoteModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.note.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.note.successimage ? <img src={"images/" + props.note.successimage} className="img-fluid"></img> : ""}
          <p style={{ marginTop: '17px' }}>
            {props.note.successdetails}
          </p>
        </Modal.Body>
        <Modal.Footer>
            
            <Button onClick={() => window.location.href="/"}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }