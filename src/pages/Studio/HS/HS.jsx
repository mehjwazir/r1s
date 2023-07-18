import './HS.css'
import Img1 from './files/img1.jpg'
import Img2 from './files/img2.jpg'
import Img3 from './files/img3.jpg'
import Img4 from './files/img4.jpg'
import Img5 from './files/img5.png'


function HS() {
	return (
		<main className='hs'>
			<div>
				<img src={ Img1} alt="img1-hs" className='img1-hs' />
			</div>
			<div>
				<img src={Img2} alt="img2-hs" className='img2-hs' />
			</div>
			<div>
				<img src={Img3} alt="img3-hs" className='img3-hs' />
			</div>
			<div>
				<img src={Img4} alt="img4-hs" className='img4-hs' />
			</div>
			<div>
				<img src={Img5} alt="img5-hs" className='img5-hs' />
			</div>

		</main>
	)
}

export default HS;