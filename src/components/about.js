import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg'

export default function AppAbout() {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;

  return (
    <section id='about' className='block about-block'>
    <Container fluid>
    <div className="title-holder">
        <h2>About Us</h2>
        <div className="subtitle">learn more about us</div>
    </div>
      <Row>
        <Col sm={6}>
            <Image src={img1} />
        </Col>
        <Col sm={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, eveniet quasi culpa at aliquid nostrum cupiditate consequatur soluta ratione quis deleniti corporis neque, repudiandae tempora distinctio, consectetur nisi impedit quo. Illum asperiores hic iusto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ducimus vel error explicabo exercitationem tempora maxime commodi quod consectetur neque! Doloremque cupiditate quos, tenetur blanditiis earum quia!</p>
            <div className='progress-block'>
                <h4>HTML / CSS / JAVASCRIPT</h4>
                <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
                <h4>RESPONSIVE</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
                <h4>PHOTOSHOP</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
