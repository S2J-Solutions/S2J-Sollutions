import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from '../Carousel/index';
// import Col from 'react-bootstrap/Col';

const Training=()=>{
    return(<header className="page-header-training">
    <div className="page-title-training">
            <div className="overlay-training"></div>   
        <Container> 
            <Row>
                <div className="page-title-container-training">
                <h1 className="page-title-heading-training">Training</h1>                 
                </div>
            </Row>  
        </Container>                    
    </div>
    <div className='carousel-container-trainning'>
    <Carousel /> 
    </div>
    </header>)
    }

export default Training