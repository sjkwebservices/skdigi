import * as React from 'react';
import * as bs from 'react-bootstrap';

export const CardNoButton: React.FunctionComponent<any> = props => {

return(
        <bs.Card style={{ width: '18rem' ,   margin: '0 auto'}}>
            <bs.Card.Img variant="top" src={props.img} />
            <bs.Card.Body>
                <bs.Card.Title>{props.title}</bs.Card.Title>
                <bs.Card.Text>
                    {props.content}
                </bs.Card.Text>
            </bs.Card.Body>
        </bs.Card>
    );

}