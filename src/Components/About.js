import React from 'react'
import aboutImage from '../images/about.jpg';
function About() {
  return (
    <>
    <section class="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
		<div class="container">
			<div class="row d-flex no-gutters">
				<div class="col-md-6 col-lg-5 d-flex">
					<div class="img-about img d-flex align-items-stretch">
						<div class="overlay"></div>
						<div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${aboutImage})`}}>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
					<div class="py-md-5">
						<div class="row justify-content-start pb-3">
							<div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
								<span class="subheading">My Intro</span>
								<h2 className="mb-4" style={{fontSize: '34px', textTransform: 'capitalize'}}>About Me</h2>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

								<ul class="about-info mt-4 px-md-0 px-2">
									<li class="d-flex"><span>Name:</span> <span>Usman Akram</span></li>
									<li class="d-flex"><span>Date of birth:</span> <span>January 01, 1999</span></li>
									<li class="d-flex"><span>Address:</span> <span>Lahore,Pakistan</span></li>
									<li class="d-flex"><span>Zip code:</span> <span>1000</span></li>
									<li class="d-flex"><span>Email:</span> <span>uakram118@gmail.com</span></li>
									<li class="d-flex"><span>Phone: </span> <span>+923034278674</span></li>
								</ul>
							</div>
							<div class="col-md-12">
								<div class="my-interest d-lg-flex w-100">
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-listening"></span>
										</div>
										<div class="text">Music</div>
									</div>
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-suitcases"></span>
										</div>
										<div class="text">Travel</div>
									</div>
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-video-player"></span>
										</div>
										<div class="text">Movie</div>
									</div>
									<div class="interest-wrap d-flex align-items-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="flaticon-football"></span>
										</div>
										<div class="text">Sports</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default About
