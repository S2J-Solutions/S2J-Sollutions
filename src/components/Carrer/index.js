import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import CarrerForm from '../CarrerForm'

const Carrer=()=>{
    return(<header className="page-header-carrer">
    <div className="page-title-carrer">
            <div className="overlay-carrer"></div>   
        <Container> 
            <Row>
                <div className="page-title-container-carrer">
                <h1 className="page-title-heading-carrer">Carrer</h1>                 
                </div>
            </Row>  
        </Container>                     
    </div>
    <CarrerForm />
    </header>)
}

export default Carrer