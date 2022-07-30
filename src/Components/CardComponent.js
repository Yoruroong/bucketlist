import {Card, Button, Modal} from 'react-bootstrap'
import React from 'react'

export default function CardComponent({note}) {
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => window.location='http://redirectmydomain.kro.kr/#' + note.id
  const handleShow = () => setModalShow(true);
  return (
    <Card id={note.id} style={note.successdetails ? { cursor: "pointer" } : { cursor: "default" }} className={note.successdetails ? "shadow hoverbackground": "shadow"} onClick={note.successdetails ? handleShow : ""}>
      <Card.Img variant="top" src={note.image ? "images/" + note.image : ""} />
      <Card.Body>
        <Card.Title><p style={{ fontSize: '9px' }}>{note.id}</p>{note.title}</Card.Title>
        <Card.Text>
          {note.details.split('\n').map(nt => {return (<span>{nt}<br /></span>)})}
        </Card.Text>
        <Card.Footer>
          <small className="text-muted">{note.success == 1 ? `완료됨: ${note.date}` : note.succes == -1 ? `실패` : `미완료`}</small>
        </Card.Footer>
      </Card.Body>

      <Modal
        show={modalShow}
        size="lg"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {note.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {note.successimage ? <img src={"images/" + note.successimage} className="img-fluid"></img> : ""}
          <p style={{ marginTop: '17px' }}>
            {note.successdetails.split('\n').map(nt => {return (<span>{nt}<br /></span>)})}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  )
}
/*
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
            {props.note.successdetails.split('\n').map(nt => {return (<span>{nt}<br /></span>)})}
          </p>
        </Modal.Body>
        <Modal.Footer>
            
            <Button onClick={() => window.location.href="/"}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }*/