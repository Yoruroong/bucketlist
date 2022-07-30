import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

export default function Stats ({ notes }) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Body>
                    <Card.Title>{notes.filter(a => a.date.split('.')[0] == new Date().getFullYear()).length}</Card.Title>
                    <Card.Text>
                        올 해
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>{notes.filter(a => a.date.split('.')[0] == new Date().getFullYear() - 1).length}</Card.Title>
                    <Card.Text>
                        지난 해
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>{notes.filter(a => a.date.split('.')[0] == new Date().getFullYear() - 2).length + notes.filter(a => a.date.split('.')[0] == new Date().getFullYear() - 1).length + notes.filter(a => a.date.split('.')[0] == new Date().getFullYear()).length}</Card.Title>
                    <Card.Text>
                        최근 3년
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>{notes.length}</Card.Title>
                    <Card.Text>
                        총 항목
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>{notes.filter(a => a.success == '1').length}({((notes.filter(a => a.success == '1').length / notes.length) * 100).toFixed(1)}%)</Card.Title>
                    <Card.Text>
                        이룬 항목
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>{notes.filter(a => a.success == '0').length}({((notes.filter(a => a.success == '0').length / notes.length) * 100).toFixed(1)}%)</Card.Title>
                    <Card.Text>
                        이루지 못한 항목
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>{notes.filter(a => a.success == '2').length}({((notes.filter(a => a.success == '2').length / notes.length) * 100).toFixed(1)}%)</Card.Title>
                    <Card.Text>
                        FAILED
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}