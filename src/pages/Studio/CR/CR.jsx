import './CR.css'
import Img1 from '../files/img1.png'
import Img2 from '../files/img2.png'
import Img3 from '../files/img3.png'
import Img4 from '../files/img4.png'



function CR() {
	return (
		<main className='cr'>
			<div>
				<img src={Img1} alt="cors" className='img1-cr' />
				<p>test</p>
			</div>
			<div>
				<img src={Img2} alt="cors" className='img1-cr' />
			</div>
			<div>
				<img src={Img3} alt="cors" className='img1-cr' />
			</div>
			<div>
				<img src={Img4} alt="cors" className='img1-cr' />
			</div>
			
		
		</main>
	)
}


export default CR;