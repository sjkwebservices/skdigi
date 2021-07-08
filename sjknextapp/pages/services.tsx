import styles from '../styles/Home.module.scss';

import * as bs from 'react-bootstrap';
import { NavBar } from '../components/NavBar';

export default function Services() {
    return (
      <div className={styles.container}>
        <bs.Container fluid>
        <bs.Row>
          <bs.Col sm={12}>
            <NavBar />
            <br/>
          </bs.Col>
        </bs.Row>
      </bs.Container>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Modern Office Synergies

          </h1>
        <p>
          menu on this page for all connecting of employees stratergies and office design
        </p>
        </main>
      </div>
    );
  }
  