import React from 'react'
import workImage from '../images/work-1.jpg'; 
import workImage1 from '../images/work-2.jpg'; 
import workImage2 from '../images/work-3.jpg'; 
import workImage3 from '../images/work-4.jpg'; 
import workImage4 from '../images/work-5.jpg'; 
import workImage5 from '../images/work-6.jpg'; 
import workImage6 from '../images/work-7.jpg'; 
import workImage7 from '../images/work-8.jpg'; 
function Projects() {
  return (
   <>
   <section class="ftco-section ftco-project" id="projects-section">
		<div class="container-fluid px-md-4">
			<div class="row justify-content-center pb-5">
				<div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
					<span class="subheading">Accomplishments</span>
					<h2 class="mb-4">Our Projects</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="https://pentapixelsolution.com/" target='blank' >Services &amp; Illustration Design</a></h3>
							<span>Live Website</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage1})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="https://asignmenthelps.com/" target='blank' >Assignmnet &amp; Illustration Design</a></h3>
							<span>Live Website</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage2})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="#">Branding &amp; Illustration Design</a></h3>
							<span>Web Design</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage3})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="#">Branding &amp; Illustration Design</a></h3>
							<span>Web Design</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage4})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="#">Branding &amp; Illustration Design</a></h3>
							<span>Web Design</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage5})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="#">Branding &amp; Illustration Design</a></h3>
							<span>Web Design</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage6})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="#">Branding &amp; Illustration Design</a></h3>
							<span>Web Design</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
                <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: `url(${workImage7})`}}>
						<div class="overlay"></div>
						<div class="text text-center p-4">
							<h3><a href="#">Branding &amp; Illustration Design</a></h3>
							<span>Web Design</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
   </>
  )
}

export default Projects
