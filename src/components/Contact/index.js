import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact=()=>{
    return(<header className="page-header-contact">
                <div className="page-title-contact">
                        <div className="overlay-contact"></div>   
                    <Container> 
                        <Row>
                            <div className="page-title-container-contact">
                            <h1 className="page-title-heading-contact">Contact</h1>                 
                            </div>
                        </Row>  
                    </Container>                     
                </div>
                <div className='background-contact'>
                <div className="heading-section-contact">
                    <Row>
                        <Col md="4" >
                        <div className="before-title-contact">Let's Talk</div>
				        <h2 className="heading-contact">Thanks for your interest in our services.</h2>
                        <div>
                            <div className='card-contact'>
                            <Row md>
                                <Col md="2">
                                <i className="bi-geo-alt-fill icon-contact" ></i>
                                </Col>
                                <Col md="10">
                            <p className='paragraph-contact'>3033 Ogden Ave, suite 113 Lisle IL 60532</p>
                            </Col>
                            </Row>
                            </div>
                            <div className='card-contact'>
                            <Row md>
                                <Col md="2">
                                <i className="bi-envelope-fill icon-contact" ></i>
                                </Col>
                                <Col md="10">
                            <p className='paragraph-contact'>name@s2jsolutions.com</p>
                            </Col>
                            </Row>
                            </div>
                            <div className='card-contact'>
                            <Row md>
                                <Col md="2">
                                <i className="bi-telephone-fill icon-contact" ></i>
                                </Col>
                                <Col md="10">
                            <p className='paragraph-contact'> + 01 234 567 88</p>
                            </Col>
                            </Row>
                            </div>
                        </div>
                        </Col>
                        <Col md="5" lg="4">
                       <h3 className='heading-contact'>Please fill out the email form, submit and we will get back to you soon.</h3>
                       <div className='form-background-contact'>
                       <form>
                            <input className='name-input-contact' type="text" id="fname" name="fname" placeholder='Name' />
                            <br/>
                            <br/>
                            <input  className='email-input-contact' type="text" id="lname" name="lname" placeholder='Email'/><br/><br/>
                            <textarea  className='comment-input-contact' placeholder='Enter your comment...' col={40} rows={10}></textarea><br/><br/>
                            <button type='button'>Send Message</button>
                        </form>
                        </div>
                        </Col>
                    </Row>
			        </div> 
                </div>
                <div className="maps">
                <iframe title="Embedded Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4662.155880672277!2d78.39671145275672!3d17.486542650154558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91766b264711%3A0xcc0895c51ba14f23!2sSubbayya%20Gari%20Hotel%20-%20KPHB!5e0!3m2!1sen!2sin!4v1692808184252!5m2!1sen!2sin" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </header>)
}

export default Contact