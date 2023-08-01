import './CR.css'
import Img1 from './files/Img1.png'
import Img2 from './files/Img2.png'
import Img3 from './files/Img3.png'



function CR() {
	return (
		<main className='cr'>
			<div>
				<img src={Img1} alt="cors" className='img1-cr' />
			</div>
			<div>
				<img src={Img2} alt="cors" className='img1-cr' />
			</div>
			<div>
				<img src={Img3} alt="cors" className='img1-cr' />
			</div>
		</main>
	)
}


export default CR;