import React from 'react'
import personImage from '../images/person_1.jpg';
import personImage2 from '../images/person_2.jpg';
import personImage3 from '../images/person_3.jpg';
import personImage4 from '../images/person_4.jpg';
import personImage5 from '../images/person_4.jpg';
function Testimonials() {
  return (
    <>
    <section class="ftco-section testimony-section bg-primary">
		<div class="container">
			<div class="row justify-content-center pb-5">
				<div class="col-md-12 heading-section heading-section-white text-center ftco-animate fadeInUp ftco-animated">
					<span class="subheading">Testimonies</span>
					<h2 class="mb-4">What client says about?</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
				</div>
			</div>
			<div class="row ftco-animate fadeInUp ftco-animated">
				<div class="col-md-12">
					<div class="carousel-testimony owl-carousel">
						<div class="item">
							<div class="testimony-wrap py-4">
								<div class="text">
									<span class="fa fa-quote-left"></span>
									<p class="mb-4 pl-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="d-flex align-items-center">
                                    <div className="user-img" style={{backgroundImage: `url(${personImage})`}}></div>
										<div class="pl-3">
											<p class="name">Roger Scott</p>
											<span class="position">Marketing Manager</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap py-4">
								<div class="text">
									<span class="fa fa-quote-left"></span>
									<p class="mb-4 pl-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="d-flex align-items-center">
                                    <div className="user-img" style={{backgroundImage: `url(${personImage2})`}}></div>
										<div class="pl-3">
											<p class="name">Roger Scott</p>
											<span class="position">Marketing Manager</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap py-4">
								<div class="text">
									<span class="fa fa-quote-left"></span>
									<p class="mb-4 pl-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="d-flex align-items-center">
                                    <div className="user-img" style={{backgroundImage: `url(${personImage3})`}}></div>
										<div class="pl-3">
											<p class="name">Roger Scott</p>
											<span class="position">Marketing Manager</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap py-4">
								<div class="text">
									<span class="fa fa-quote-left"></span>
									<p class="mb-4 pl-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="d-flex align-items-center">
                                    <div className="user-img" style={{backgroundImage: `url(${personImage4})`}}></div>
										<div class="pl-3">
											<p class="name">Roger Scott</p>
											<span class="position">Marketing Manager</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="testimony-wrap py-4">
								<div class="text">
									<span class="fa fa-quote-left"></span>
									<p class="mb-4 pl-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<div class="d-flex align-items-center">
                                    <div className="user-img" style={{backgroundImage: `url(${personImage5})`}}></div>
										<div class="pl-3">
											<p class="name">Roger Scott</p>
											<span class="position">Marketing Manager</span>
										</div>
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

export default Testimonials
