import logo from './logo.svg';
import './App.module.scss';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//my components
import { SJKNavbar } from './Navbar';
import { SJKCard } from './Card';

//main App
function App() {
  return (

    <div className="App">
        <Container>
          <Row>
           <SJKNavbar />
          </Row>
          <Row>
            <Col sm={4}><SJKCard /></Col>
            <Col sm={4}><SJKCard /></Col>
            <Col sm={4}><SJKCard /></Col>
          </Row>
          </Container>
      </div>
    
    );
}

export default App;

