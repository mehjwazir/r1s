import './IP.css'
import Img1 from "./files/img1.jpg"
import Img2 from "./files/img2.jpg"
import Img3 from "./files/img3.jpg"
import Img4 from "./files/img4.jpg"
import Img5 from "./files/img5.jpg"
import Img6 from "./files/img6.jpg"
import Img7 from "./files/img7.png"
import Img8 from "./files/img8.png"





function IP() {

	return (
		<main className='ip'>
			<div className='img1-ip-div'>
				<img src={Img2} alt="img2"className='img2-ip' />
				<img src={Img1} alt="img1" className='img1-ip' />
			</div>
			<div>
				<img src={Img3} alt="img3" className='img3-ip' />
			</div>
			<div className="row row2">
				<div className='col col2'>
					<p>
						Inner Peace serves as a tranquil haven, inviting you to embark on a harmonious exploration of the interconnected realms of mind, body, soul, and nature. With a wealth of wisdom and inspiration, we offer an array of carefully curated resources that empower you to cultivate a deeper understanding of yourself and the world around you. Delve into mindfulness practices that soothe the mind, engage in revitalizing activities that rejuvenate the body, embrace spiritual insights that nourish the soul, and revel in the awe-inspiring beauty of nature's embrace. This digital oasis is your gateway to finding serenity in the midst of life's bustling currents, a virtual refuge where you can harmonize your being and draw endless inspiration for a more balanced and fulfilling existence.
					</p>
				</div>
				
					<img src={Img4} alt="img4" className='img4-ip' />
				
			</div>
			<div>
				<img src={Img5} alt="img5" className='img5-ip' />
			</div>
			<div className="row row2">
				<img src={Img6} alt="img6" className='img6-ip' />
				<div className=' column col col2'>
			
					<p>
						<a href="https://inner-peace.up.railway.app/" className="id-site" target="_blank" rel="noopener noreferrer">Inner Peace </a> <br />
						2023 <br />
						<br />
						 <br />
						Visual Identity <br />
						Web Design <br />
						Web Development <br />
						Mobile Design <br />
						Logo <br />
						The website is currently undergoing development and enhancements.

					</p>
				</div>
			
			
			</div>
			<div>
				<img src={Img7} alt="img7" className='img7-ip' />
			</div>
			<div>
				<img src={Img8} alt="img8" className='img8-ip' />
			</div>

		</main>
	)
}

export default IP;