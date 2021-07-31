import * as React from 'react';
import * as bs from 'react-bootstrap';

export const NavItem: React.FunctionComponent<any> = props => {

return (
        <bs.Nav.Item>
            <bs.Nav.Link href={props.href}>{props.linkContent}</bs.Nav.Link>
        </bs.Nav.Item>
    );

}