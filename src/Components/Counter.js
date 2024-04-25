import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

function Counter() {

    
  return (
   <>
   <section class="ftco-counter img bg-light" id="section-counter">
		<div class="container">
			<div class="row">
				<div class="col-md-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
					<div class="block-18 d-flex">
						<div class="icon d-flex justify-content-center align-items-center">
							<span class="flaticon-suitcase"><FontAwesomeIcon icon={faSuitcase} /></span>
						</div>
						<div class="text">
							<strong class="number" data-number="750">750</strong>
							<span>Project Complete</span>
						</div>
					</div>
				</div>
				<div class="col-md-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
					<div class="block-18 d-flex">
						<div class="icon d-flex justify-content-center align-items-center">
							<span class="flaticon-loyalty">  <FontAwesomeIcon icon={faSuitcase}/></span>
						</div>
						<div class="text">
							<strong class="number" data-number="568">568</strong>
							<span>Happy Clients</span>
						</div>
					</div>
				</div>
				<div class="col-md-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
					<div class="block-18 d-flex">
						<div class="icon d-flex justify-content-center align-items-center">
							<span class="flaticon-coffee"></span>
						</div>
						<div class="text">
							<strong class="number" data-number="478">478</strong>
							<span>Cups of coffee</span>
						</div>
					</div>
				</div>
				<div class="col-md-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
					<div class="block-18 d-flex">
						<div class="icon d-flex justify-content-center align-items-center">
							<span class="flaticon-calendar"></span>
						</div>
						<div class="text">
							<strong class="number" data-number="780">780</strong>
							<span>Years experienced</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
   </>
  )
}

export default Counter
