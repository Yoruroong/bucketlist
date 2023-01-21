import { Button, Container, Form, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap'
import {useState} from 'react';

export default function Navbarin() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const gotoElement = () => {
        window.location.href=`#${message}`
    }

    const makeitloading = () => {
        setLoading(true)
    }

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
            <Navbar.Brand href="#">{new Date().getMonth() == 9 && new Date().getDate() == 9 ? "버킷리스트" : "Bucketlist"}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#" disabled>
                    연우가 ❤️와 함께 만듦.
                </Nav.Link>
            <Nav.Link href="/" onClick={makeitloading}>{loading?"":"메인"}<Spinner style={{ width: loading? "": "0px", visibility: loading ? "visible":"hidden" }} animation="grow" size="sm"/></Nav.Link>
            <Nav.Link href="/success">달성</Nav.Link>
                <NavDropdown title={new Date().getMonth() == 9 && new Date().getDate() == 9 ? "더 알아보기" : "Learn More"} id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://iam.yeonw.me/">연우에 대해 더 알아보기</NavDropdown.Item>
                <NavDropdown.Item href="https://iam.yeonw.me/">
                    여누에 대해 더 알아보기
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://iam.yeonw.me/">
                    Yeonwoo에 대해 더 알아보기
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                    {new Date().getMonth() == 9 && new Date().getDate() == 9 ? `한글, 아름답게.` : `${new Date()}`}
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder={new Date().getMonth() == 9 && new Date().getDate() == 9 ? "항목의 고유 번호" : "place ID of element"}
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                    value={message}
                />
                <Button variant="outline-success" onClick={gotoElement}>{new Date().getMonth() == 9 && new Date().getDate() == 9 ? "가기" : "Go"}</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}