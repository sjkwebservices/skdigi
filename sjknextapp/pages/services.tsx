import styles from '../styles/Home.module.scss';

import * as bs from 'react-bootstrap';
import { NavBar } from '../components/NavBar';

import { AccordionCard } from '../components/AccordionCard';
import profilePic from '../img/collaboration-hand.jpg';

//import Image from 'next/image';

export default function Services() {
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
          <bs.Row className={styles.blueLayer}>
            <bs.Col md={6} sm={6}>
              <br/>
              <bs.Accordion defaultActiveKey="0">
                <AccordionCard title="Digital workspaces" body="information about dw" evKey="0" />
                <AccordionCard title="Web Design" body="information about web design" evKey="1" />
              </bs.Accordion>
              <br/>
            </bs.Col>
            <bs.Col  className={styles.right}  md={6} sm={6}   >
              <img src='https://placeimg.com/600/394/any' alt="services"/>
              {/* <Image src={profilePic} /> */}
            </bs.Col>
          </bs.Row>
        </bs.Container>
    </div>
    );

  }
  