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
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin it occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					</p>
				</div>
				
					<img src={Img4} alt="img4" className='img4-ip' />
				
			</div>
			<div>
				<img src={Img5} alt="img5" className='img5-ip' />
			</div>
			<div className="row row2">
				<img src={Img6} alt="img6" className='img6-ip' />
				<div className='col col2'>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin it occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						<a href="https://inner-peace.up.railway.app/">IP</a>
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