import * as React from 'react';
import {Row, Col, Navbar} from 'react-bootstrap';
import {NavItem} from './NavItem';

export const Footer: React.FunctionComponent<any> = props => {

return (
    <Row>
        <Col></Col>
        <Col>
            <Navbar bg="light" expand="lg">
                <NavItem href="http://google.com.au" linkContent="test link" />
            </Navbar>
        </Col>
        <Col></Col>
    </Row>
);

}


