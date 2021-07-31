import styles from '../styles/Home.module.scss';

import * as bs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from '../components/NavBar';
import { CardNoButton } from '../components/CardNoButton';


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
            <div className={`${styles.fontWhite} ${styles.txtCenter}`}>
                <h1>Connecting Business</h1>
            </div>
          </bs.Col>
        </bs.Row>
      </bs.Container>
      <bs.Container fluid >
        <bs.Row>
          <bs.Col sm={12} className={ styles.heroImageOverlay }>
          </bs.Col>
        </bs.Row>
        <bs.Row className={styles.grayLayer}>
          <bs.Col>
            <br/>
            <CardNoButton 
              content={
                <ul className={styles.cardUl}>
                  <li>Enable employees to work anywhere</li>
                  <li>Develop a first-class balance of producivity and security to suit your business</li>
                  <li>Deliver the foremost apps, tools and modern services into your employees hands</li>
                </ul>
                } 
              title="Digital workspaces" 
              img="https://placeimg.com/280/180/any"
            />
            <br/>
          </bs.Col>
          <bs.Col>
            <br/>
            <CardNoButton 
              content={
                <ul className={styles.cardUl}>
                  <li>Reduce expenditure on IT</li>
                  <li>Be first to market</li>
                  <li>Increase flexibility</li>
                </ul>
                } 
                title="Increase revenue" 
                img="https://placeimg.com/280/180/any"
            />
            <br/>
          </bs.Col>
          <bs.Col>
            <br/>
            <CardNoButton 
              content={
              <ul className={styles.cardUl}>
                <li>Increase collaboration, innovations and agility</li>
                <li>Increase business creativity and performance</li>
                <li>Strengthen talent recruitment and retention</li>
              </ul>
              } 
              title="Empower staff" 
              img="https://placeimg.com/280/180/any"
            />
            <br/>
          </bs.Col>
        </bs.Row>
      </bs.Container>
    </div>
  );
}
