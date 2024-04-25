import React from 'react'
import { FaPhone,FaMapMarker,FaPaperPlane } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'; 
function Footer() {
  return (
    <>
    <footer class="ftco-footer ftco-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Lets talk about</h2>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						<p><a href="#" class="btn btn-primary">Learn more</a></p>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4 ml-md-4">
						<h2 class="ftco-heading-2">Links</h2>
						<ul class="list-unstyled">
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Home</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>About</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Services</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Projects</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Contact</a></li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Services</h2>
						<ul class="list-unstyled">
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Web Design</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Web Development</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Business Strategy</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Data Analysis</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"><FaChevronRight/></span>Graphic Design</a></li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Have a Questions?</h2>
						<div class="block-23 mb-3">
							<ul>
								<li><span class="icon fa fa-map marker"><FaMapMarker/></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
								<li><a href="#"><span class="icon fa fa-phone"> <FaPhone/> </span><span class="text">+2 392 3929 210</span></a></li>
								<li><a href="#"><span class="icon fa fa-paper-plane pr-4"><FaPaperPlane/></span><span class="text">info@yourdomain.com</span></a></li>
							</ul>
						</div>
						<ul class="ftco-footer-social list-unstyled mt-2">
							<li class="ftco-animate fadeInUp ftco-animated "><a href="#"><span class="fa fa-twitter"> <FaTwitter /></span></a></li>
							<li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="fa fa-facebook">  <FaFacebook /></span></a></li>
							<li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="fa fa-instagram"> <FaInstagram /></span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">

					<p>
						Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"> <FaHeart /></i> by <a href="https://github.com/usmanakram1180" target="_blank">Usman</a>
						</p>
					</div>
				</div>
			</div>
</footer>
		
    </>
  )
}

export default Footer
