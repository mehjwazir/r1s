import './IP.css'
import Img1 from "./files/img1.jpg"
import Img2 from "./files/img2.jpg"
import Img3 from "./files/img3.jpg"
import Img4 from "./files/img4.jpg"





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
			<div className='image-container-ip'>
				<p className='img4-paragraph-ip'>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin it occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
				</p>
				<img src={Img4} alt="img4" className='img4-ip image-ip' />
			</div>
		
		</main>
	)
}

export default IP;