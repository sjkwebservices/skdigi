import * as React from 'react';
import * as bs from 'react-bootstrap';

export const Accordion: React.FunctionComponent<any> = props => {

    return(
        <bs.Accordion defaultActiveKey="0">
            <bs.Card>
                <bs.Card.Header>
                <bs.Accordion.Toggle as={bs.Button} variant="link" eventKey="1">
                    Digital workspaces
                </bs.Accordion.Toggle>
                </bs.Card.Header>
                <bs.Accordion.Collapse eventKey="1">
                <bs.Card.Body>Digital workspaces content</bs.Card.Body>
                </bs.Accordion.Collapse>
            </bs.Card>
        </bs.Accordion>
    );

}