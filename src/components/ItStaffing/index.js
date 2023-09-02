import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItStaffing=()=>{
    return(<header className="page-header">
    <div className="page-title">
            <div className="overlay"></div>   
        <Container> 
            <Row>
                <div className="page-title-container">
                <h1 className="page-title-heading">IT Staffing</h1>                 
                </div>
            </Row>  
        </Container>                     
    </div>
    <div class="heading-section">
        <Row >
            <Col lg="1"></Col>
            <Col lg="4">
				<div class="before-title">Staffing Services</div>
                <h2 class="heading">With Sigmaintel Staffing Services, you have access to large pool of IT talent. Achieve objectives without investing significant time and resources in the hiring process.</h2>
            </Col>
            <Col lg="2"></Col>
            <Col lg="4">
				<p>Sigmaintel provides high-quality staffing services that effectively match qualified candidates with the needs of clients. It follows a combination of effective strategies and practices to make sure the candidate is equipped with the skills necessary to perform the job effectively. Sigmaintel can quickly pivot to the changing needs of the clients.</p>
                <p>The organization works closely with the clients to understand their specific needs, including the skills, experience, and qualifications required for the positions they need to fill. It evaluates and improves staffing processes to ensure the highest quality of services.Sigmaintel develops and maintains a large pipeline of candidates and implements comprehensive screening processes when hiring. Sigmaintel places high importance on integrity, honesty, and transparency.</p>
            </Col>
            <Col lg="1"></Col>
        </Row>
        <div className='text-align'>
        <Row >
            <Col className='card1' lg="3" >
            <i className="bi-arrow-down" ></i>
            <h3>Project Management</h3>
            </Col>
            <Col className='card1' lg="3">
            <i className="bi-arrow-down"></i>
            <h3>SAP Functional modules, APO and IBP</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>HANA</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>BI</h3>
            </Col>
        </Row>
        <Row >
            <Col className='card1' lg="3">
            <i class="bi-arrow-down" size={50}></i>
            <h3>Big DATA</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>AWS</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>Azure</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>Security</h3>
            </Col>
        </Row>
        <Row >
        <Col className='card1' lg="3">
            <i class="bi-arrow-down" size={50}></i>
            <h3>Identity Management</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>Web Technologies</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>Manual and Automatic Testing</h3>
            </Col>
            <Col className='card1' lg="3">
            <i class="bi-arrow-down"></i>
            <h3>Go-live Support</h3>
            </Col>
        </Row>
        </div>
            </div>
</header>)
}

export default ItStaffing