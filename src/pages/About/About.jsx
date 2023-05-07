import './About.css'
import Img from './files/LeRohe.png'



function About() {

	return (
		<main className='about'>
			

			<div className="about-section">
			<p>ROHE 1 STUDIO</p>
				<p className='about-p'>
					is a creative design studio based in Los Angeles, California that takes an <br></br>innovative approach to branding, website development, and other digital assets.</p>
			</div>
			<div className='le-rohe'>
				<img src={Img}
					alt="le-rohet"
					className='le-rohe1' />
			</div>

		</main>
	)
}

export default About;