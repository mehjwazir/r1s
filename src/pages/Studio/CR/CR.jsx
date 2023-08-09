import './CR.css'
import Img1 from './imgfile/img1.png'
import Img2 from './imgfile/img2.png'
import Img3 from './imgfile/img3.png'
import Img4 from './imgfile/img4.png'



function CR() {
	return (
		<main className='cr'>
			<div>
				<img src={Img1} alt="" className='img1-cr' />
				<p>test</p>
			</div>
			<div>
				<img src={Img2} alt="" className='img1-cr' />
			</div>
			<div>
				<img src={Img3} alt="" className='img1-cr' />
			</div>
			<div>
				<img src={Img4} alt="" className='img1-cr' />
			</div>
			
		
		</main>
	)
}


export default CR;