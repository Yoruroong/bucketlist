import React from 'react'
import { Button } from 'react-bootstrap'
import './css/modal.css'

const Modal = props => {
    if(!props.show) return null
    console.log(props)
    const hidethis = () => props.onHide()
    return(
        <div className="modal">
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>{props.note.title}</h4>
                </div>
                <div className='modal-body'>
                    {props.note.successimage ? <img src={"images/" + props.note.successimage} className="img-fluid"></img> : ""}
                    <p style={{ marginTop: '17px' }}>
                        {props.note.successdetails.split('\n').map(nt => {return (<span>{nt}<br /></span>)})}
                    </p>
                </div>
                <div className='modal-footer'>
                    <p className='percent-stats'>{props.note.success == 0 ? "🇸 🇴 🇴 🇳 ™" : props.note.date + "에 완료됨"}</p><Button onClick={hidethis}>Close</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;