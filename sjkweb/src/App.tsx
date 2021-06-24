//import logo from './logo.svg';



import styles from './App.module.scss';
import * as bs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// className={styles.App}

import {NavBar} from './NavBar';

function App() {
  return (
    <bs.Container fluid>
      <bs.Row>
        <bs.Col>
          <NavBar />
      </bs.Col>
    </bs.Row>
    <bs.Container fluid>
      <bs.Row>
        <bs.Col>
         {/*  // for breadcrumbs // */} breadcrumbs
        </bs.Col>
      </bs.Row>
    </bs.Container>
    <bs.Container>
      <bs.Row>
        <bs.Col>
          <bs.Jumbotron className={styles.homeHeader}>
            <h1>Synergize your employees</h1>
            <p>
              Digitialise your business and empower your employees to work anywhere<br/>
              Be a super boss, by giving your employees the right modern IT Apps, tools and services,<br/>
              which work similiar to the ones they use in their personal life<br/>
              your employess will love remote working and their digital workspace.
            </p>
            <ul>
              <li>Reduce operational and capital expenditure on IT</li>
              <li>Increase revenue</li>
              <li>Increase flexibility</li>
              <li>Empower staff to be collaborative, creative and agile</li>
              <li>Increase business performance</li>
              <li>Strengthen talent recruitment and retention</li>
            </ul>
            <p>
              <bs.Button variant="primary">Learn more</bs.Button>
            </p>
          </bs.Jumbotron>
        </bs.Col>
      </bs.Row>
    </bs.Container>
  </bs.Container>
  );
}

export default App;
