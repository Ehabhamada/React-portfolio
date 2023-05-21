import CV from '../../assets/cv.pdf';

function CTA() {
  return (
    <div className='CTA'>
      <a data-aos="fade-right" href={CV} className='btn'>Download CV</a>
      <a data-aos="fade-left" href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
