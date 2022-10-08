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
            <Navbar.Brand href="#">Bucketlist</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="/" onClick={makeitloading}>{loading?"":"메인"}<Spinner style={{ width: loading? "": "0px", visibility: loading ? "visible":"hidden" }} animation="grow" size="sm"/></Nav.Link>
            <Nav.Link href="/success">달성</Nav.Link>
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
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
                    Link
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="place ID of element"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                    value={message}
                />
                <Button variant="outline-success" onClick={gotoElement}>Go</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}