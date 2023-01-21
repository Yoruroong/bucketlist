import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Card from '../Components/CardComponent'

export default function RCard({ notes }) {
    return (
      <>
        <div className="cards">
          {["TOP", "Teenager", "여행", "음식", "사람", "소유", "교육", "기타"].map(ct => (
            <div>
              <h2 style={{ marginTop: '10px' }}>#{ct}</h2>
              <Row xs={1} md={3} className="g-4" style={{ alignContent: "left", marginRight: '0' }}>
                {notes.filter(a => a.Category == ct).map(note => (
                  <Col>
                    <div>
                      <Card note={note} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </>
    );
  }