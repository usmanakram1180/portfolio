import React from 'react'
import { FaPhone,FaMapMarker,FaPaperPlane,FaGlobe } from 'react-icons/fa';
function Contact() {
  return (
   <>
   <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
		<div class="container">
			<div class="row justify-content-center mb-5 pb-3">
				<div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
					<span class="subheading">Contact us</span>
					<h2 class="mb-4">Have a Project?</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
				</div>
			</div>

			<div class="row block-9">
				<div class="col-md-8">
                    <form action="#" className="bg-light p-4 p-md-5 contact-form">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                            </div>
                            </div>
                        </div>
                    </form>
					
				</div>

				<div class="col-md-4 d-flex pl-md-5">
					<div class="row">
						<div class="dbox w-100 d-flex">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-map-marker"> <FaMapMarker /></span>
							</div>
							<div class="text">
								<p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
							</div>
						</div>
						<div class="dbox w-100 d-flex">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-phone"><FaPhone/></span>
							</div>
							<div class="text">
								<p><span>Phone:</span> <a href="tel://1234567920">+923034278674</a></p>
							</div>
						</div>
						<div class="dbox w-100 d-flex">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-paper-plane"><FaPaperPlane/></span>
							</div>
							<div class="text">
								<p><span>Email:</span> <a href="mailto:info@yoursite.com">uakram118@gmail.com</a></p>
							</div>
						</div>
						<div class="dbox w-100 d-flex">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-globe"><FaGlobe/></span>
							</div>
							<div class="text">
								<p><span>Website</span> <a href="#">yoursite.com</a></p>
							</div>
						</div>
					</div>
					{/* <!-- <div id="map" class="map"></div> --> */}
				</div>
			</div>
		</div>
	</section>
   </>
  )
}

export default Contact
