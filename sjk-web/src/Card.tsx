import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Button, Card } from 'react-bootstrap';

export const SJKCard:React.FunctionComponent<Card> = props =>{

return (
   <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}