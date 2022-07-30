import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

export default function Stats ({ notes }) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Body>
                    <Card.Title>오늘까지</Card.Title>
                    <Card.Text>
                        {notes.filter(a => a.date.split('.')[0] == new Date().getFullYear()).length}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>지난 해</Card.Title>
                    <Card.Text>
                        {notes.filter(a => a.date.split('.')[0] == new Date().getFullYear() - 1).length}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>최근 3년</Card.Title>
                    <Card.Text>
                        {notes.filter(a => a.date.split('.')[0] == new Date().getFullYear() - 2).length + notes.filter(a => a.date.split('.')[0] == new Date().getFullYear() - 1).length + notes.filter(a => a.date.split('.')[0] == new Date().getFullYear()).length}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>총 항목</Card.Title>
                    <Card.Text>
                        {notes.length}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>이룬 항목</Card.Title>
                    <Card.Text>
                        {notes.filter(a => a.success == '1').length}({parseInt((notes.filter(a => a.success == '1').length / notes.length) * 100)}%)
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>이루지 못한 항목</Card.Title>
                    <Card.Text>
                        {notes.filter(a => a.success == '0').length}({parseInt((notes.filter(a => a.success == '0').length / notes.length) * 100)}%)
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>FAILED</Card.Title>
                    <Card.Text>
                        {notes.filter(a => a.success == '2').length}({parseInt((notes.filter(a => a.success == '2').length / notes.length) * 100)}%)
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}