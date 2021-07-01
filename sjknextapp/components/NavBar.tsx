import * as React from 'react';
import * as bs from 'react-bootstrap';

export const NavBar: React.FunctionComponent<any> = props => {
    return(
        <bs.Navbar bg="light" expand="lg">
            <bs.Navbar.Brand href="#home">Synermation </bs.Navbar.Brand>
              <bs.Navbar.Toggle aria-controls="basic-bs.Navbar-bs.Nav" />
                <bs.Navbar.Collapse id="basic-bs.Navbar-bs.Nav">
                  <bs.Nav className="mr-auto">
                    <bs.Nav.Link href="/services">Digital Workspaces Services</bs.Nav.Link>
                    <bs.NavDropdown title="Web Services" id="basic-bs.Nav-dropdown">
                      <bs.NavDropdown.Item href="#action/3.1">Action</bs.NavDropdown.Item>
                      <bs.NavDropdown.Item href="#action/3.2">Another action</bs.NavDropdown.Item>
                      <bs.NavDropdown.Item href="#action/3.3">Something</bs.NavDropdown.Item>
                      <bs.NavDropdown.Divider />
                      <bs.NavDropdown.Item href="#action/3.4">Separated link</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                  </bs.Nav>
            <bs.Form inline>
              <bs.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <bs.Button variant="outline-success">Search</bs.Button>
            </bs.Form>
          </bs.Navbar.Collapse>
        </bs.Navbar>

    );
}