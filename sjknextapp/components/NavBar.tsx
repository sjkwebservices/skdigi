import * as React from 'react';
import * as bs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar: React.FunctionComponent<any> = props => {
    return(
        <bs.Navbar bg="light" expand="lg">
            <bs.Navbar.Brand href="https://synergizer.com.au">Synergizer</bs.Navbar.Brand>
              <bs.Navbar.Toggle aria-controls="basic-bs.Navbar-bs.Nav" />
                <bs.Navbar.Collapse id="basic-bs.Navbar-bs.Nav">
                  <bs.Nav className="mr-auto">
                    <bs.Nav.Link href="/services">Modern Office Synergies</bs.Nav.Link>
                    <bs.NavDropdown title="Design" id="basic-bs.Nav-dropdown">
                      <bs.NavDropdown.Item href="#action/3.2">CMS</bs.NavDropdown.Item>
                      <bs.NavDropdown.Item href="#action/3.3">Custom App Development</bs.NavDropdown.Item>
                      <bs.NavDropdown.Divider />
                      <bs.NavDropdown.Item href="#action/3.4">Intranet and Extranet design</bs.NavDropdown.Item>
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