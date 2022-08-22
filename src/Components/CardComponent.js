import {Card} from 'react-bootstrap'
import Modal from "./Modal"
import React from 'react'

export default function CardComponent({note}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  async function handleShow () {
    if(open) return;
    setOpen(true);
    console.log('1')
  };
  
  return (
    <Card id={note.id} style={note.successdetails ? { cursor: "pointer" } : { cursor: "default" }} className={note.successdetails ? "shadow hoverbackground": "shadow"} onClick={note.successdetails ? handleShow : ""}>
      <Card.Img variant="top" src={note.image ? "images/" + note.image : ""} />
      <Card.Body>
        <Card.Title><p style={{ fontSize: '9px' }}>{note.id}</p>{note.success == 2 ? `❌` : note.success == 1 ? "✅" : "⬜"}{note.title}</Card.Title>
        <Card.Text>
          {note.details.split('\n').map(nt => {return (<span>{nt}<br /></span>)})}
        </Card.Text>
        <Card.Footer>
          <small className="text-muted">{note.success == 0 ? "🇸 🇴 🇴 🇳 ™" : note.date}</small>
        </Card.Footer>
      </Card.Body>

      <Modal
        show={open}
        onHide={handleClose}
        note={note}
      >
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