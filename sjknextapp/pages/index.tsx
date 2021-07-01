import styles from '../styles/Home.module.css';

import * as bs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <bs.Container fluid>
        <bs.Row>
          <bs.Col sm={12}>
            <NavBar />
            <br/>
          </bs.Col>
        </bs.Row>
      </bs.Container>
      <bs.Container fluid>
        <bs.Row>
          <bs.Col>
          {/*  // for breadcrumbs // */}
          </bs.Col>
        </bs.Row>
      </bs.Container>
      <bs.Container fluid>
        <bs.Row>
          <bs.Col className={styles.heroImageOverlay} >
              <div className={styles.fontWhite}>
                <h1>Synergize your employees and projects</h1>
                <p>
                  Digitialise your employees workspaces<br/>
                  Empower your employees to work anywhere<br/>
                  We mix the right Apps, tools and modern services into your employees hands <br/>
                  With the right balance of producivity and security...<br/>
                  Your employess will love remote working, feeling secure and comfortable in their digital workspace.
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
                </p>
            </div>
          </bs.Col>
        </bs.Row>
      </bs.Container>
      <bs.Container className={styles.grayLayer}>
      </bs.Container>
    </div>
  );
}
