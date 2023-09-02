import '../AboutUs/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const AboutUs=()=>{
    return(<header className="page-header-aboutus">
    <div className="page-title-aboutus">
            <div className="overlay-aboutus"></div>   
        <Container> 
            <Row>
                <div className="page-title-container-aboutus">
                <h1 className="page-title-heading-aboutus">About Us</h1>                 
                </div>
            </Row>  
        </Container>                     
    </div>
    </header>)
}

export default AboutUs