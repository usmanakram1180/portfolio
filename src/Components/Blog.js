import React from 'react'
import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
function Blog() {
  return (
    <>
    <section class="ftco-section bg-light" id="blog-section">
		<div class="container">
			<div class="row justify-content-center mb-5 pb-5">
				<div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
					<span class="subheading">Blog</span>
					<h2 class="mb-4">Our Blog</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
				</div>
			</div>
			<div class="row d-flex">
				<div class="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
					<div class="blog-entry justify-content-end">
                    <a href="single.html" className="block-20" style={{backgroundImage: `url(${image1})`}}>
                    {/* Content */}
                    </a>
						<div class="text mt-3 float-right d-block">
							<div class="d-flex align-items-center mb-3 meta">
								<p class="mb-0">
									<span class="mr-2">July 03, 2020</span>
									<a href="#" class="mr-2">Admin</a>
									<a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
								</p>
							</div>
							<h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
					<div class="blog-entry justify-content-end">
                    <a href="single.html" className="block-20" style={{backgroundImage: `url(${image2})`}}>
                    {/* Content */}
                    </a>
						<div class="text mt-3 float-right d-block">
							<div class="d-flex align-items-center mb-3 meta">
								<p class="mb-0">
									<span class="mr-2">July 03, 2020</span>
									<a href="#" class="mr-2">Admin</a>
									<a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
								</p>
							</div>
							<h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
					<div class="blog-entry">
                    <a href="single.html" className="block-20" style={{backgroundImage: `url(${image3})`}}>
                    {/* Content */}
                    </a>
						<div class="text mt-3 float-right d-block">
							<div class="d-flex align-items-center mb-3 meta">
								<p class="mb-0">
									<span class="mr-2">July 03, 2020</span>
									<a href="#" class="mr-2">Admin</a>
									<a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
								</p>
							</div>
							<h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Blog
