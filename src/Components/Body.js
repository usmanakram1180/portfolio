import React from 'react';
import bgImage from '../images/bg_1.jpg'; 
import ResumePDF from '../images/Resume.pdf';
function Body() {
	const handleDownloadCV = () => {
	  console.log("Download button clicked");
	  const downloadUrl = ResumePDF;
	  console.log("Download URL:", downloadUrl);
	  const link = document.createElement('a');
	  link.href = downloadUrl;
	  link.setAttribute('download', 'Resume.pdf');
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link); 
	};

  return (
    <>
      <div>
        <button onClick={handleDownloadCV}>Download CV</button>
      </div>
      <section id="home-section" className="hero">
        <div className="home-slider owl-carousel owl-loaded owl-drag">
          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container-fluid px-md-0">
              <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                <div className="one-third order-md-last img" style={{backgroundImage: `url(${bgImage})`}}>
                  <div className="overlay"></div>
                  <div className="overlay-1"></div>
                </div>
                <div className="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }">
                  <div className="text">
                    <span className="subheading">Hello! This is Usman</span>
                    <h1 className="mb-4 mt-3">Creative <span>Web</span> Designer &amp; Developer</h1>
                    <p><a href="#" className="btn btn-primary">Hire me</a> <button onClick={handleDownloadCV} className="btn btn-primary btn-outline-primary">Download CV</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
