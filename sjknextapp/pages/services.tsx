import styles from '../styles/Home.module.scss';

import * as bs from 'react-bootstrap';
import { NavBar } from '../components/NavBar';

import { AccordionCard } from '../components/AccordionCard';

import Image from 'next/image'
import profilePic from '../public/collab-01.jpg'

const handleClick1 = (e:React.SyntheticEvent) =>  {
  e.preventDefault();
  console.log('Free pizza1!');
}
const handleClick2 = (e:React.SyntheticEvent) =>  {
  e.preventDefault();
  console.log('Free pizza2!');
}


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
            <bs.Col md={6} sm={12}>
              <br/>
              <bs.Accordion defaultActiveKey="0">
                <AccordionCard 
                  title="Digital workspaces" 
                  body={`empower your employess to work anywhere`} 
                  evKey="0" 
                  variant="primary"
                  btnText="More information"
                  onClick={handleClick1}
                />
                <AccordionCard
                  title="Web Design" 
                  body={`we offer three different web site packages along with ${<br/>} SEO ${<br/>} FRED`}
                  evKey="1" 
                  variant="primary"
                  btnText="More information"
                  onClick={handleClick2}
                />
              </bs.Accordion>
              <br/>
            </bs.Col>
            <bs.Col  className={styles.right}  md={6} sm={12}   >
              <Image src={profilePic} />
            </bs.Col>
          </bs.Row>
        </bs.Container>
    </div>
    );
}
  