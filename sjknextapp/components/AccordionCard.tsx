import * as React from 'react';
import * as bs from 'react-bootstrap';


export const AccordionCard: React.FunctionComponent<any> = props => {

    return(
        <bs.Card>
            <bs.Card.Header>
            <bs.Accordion.Toggle as={bs.Button} variant="link" eventKey={props.evKey}>
                {props.title}
            </bs.Accordion.Toggle>
            </bs.Card.Header>
            <bs.Accordion.Collapse eventKey={props.evKey}>
            <bs.Card.Body>{props.body}</bs.Card.Body>
            </bs.Accordion.Collapse>
        </bs.Card>
    );
}