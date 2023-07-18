import './HF.css'
import Img1 from './files/img1.jpg'
import Img2 from './files/img2.jpg'
import Img3 from './files/img3.jpg'
import Img4 from './files/img4.jpg'
import Img5 from './files/img5.jpg'


function HF() {
	return (
		
		<main className='hf'>
			<div>
				<img src={Img1} alt="img1-hf" className='img1-hf' />
			</div>
			<div>
				<img src={Img2} alt="img2-hf" className='img2-hf' />
			</div>
			<div>
				<img src={Img3} alt="img3-hf" className='img3-hf' />
			</div>
			<div>
				<img src={Img4} alt="img4-hf" className='img4-hf' />
			</div>
			<div>
				<img src={Img5} alt="img5-hf" className='img5-hf' />
			</div>
		</main>
	)
}


export default HF;