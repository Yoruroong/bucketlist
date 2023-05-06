import React from 'react'
import './css/modal.css'

const Modal = props => {
    if(!props.show) return null
    console.log(props)
    const hidethis = () => props.onHide()
    return(
        <div className="modal">
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>{props.note.Title}</h4>
                </div>
                <div className='modal-body'>
                    {props.note.Successimage ? <img src={"images/" + props.note.Successimage} className="img-fluid"></img> : ""}
                    <p style={{ marginTop: '17px' }}>
                        {props.note.Successdetails.split('\n').map(nt => {return (<span>{nt}<br /></span>)})}
                    </p>
                </div>
                <div className='modal-footer'>
                    <p className='percent-stats'>{props.note.Success == 0 ? "🇸 🇴 🇴 🇳 ™" : props.note.Date + "에 완료됨"}</p><button className='App-link' onClick={hidethis}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;