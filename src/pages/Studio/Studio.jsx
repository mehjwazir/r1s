import './Studio.css'
import { Link } from 'react-router-dom';
import Img1 from './files/1.png'
import Img2 from './files/2.png'
import Img3 from './files/3.png'
import Img4 from './files/4.png'
import Img5 from './files/5.png'
import Img6 from './files/6.png'
import Img7 from './files/7.png'
import Img8 from './files/8.png'

function Studio() {
	return (
		<main className='studio'>
			<div className="gallery">
				<div>
					<Link to='/type'><img src={Img1} alt="type" className="image filter" /></Link>
					<Link to='/r1s'><img src={Img2} alt="r1s" className="image filter" /></Link>
					<Link to='/cr'><img src={Img3} alt="cr" className="image filter" /></Link>
					<Link to='/hf'><img src={Img4} alt="hf" className="image filter" /></Link>
				</div>
				<div>
					<Link to='/hasu'><img src={Img5} alt="hasu" className="image filter" /></Link>
					<Link to='/ip'><img src={Img6} alt="ip" className="image filter" /></Link>
					<Link to='/aura'><img src={Img7} alt="ar" className="image filter" /></Link>
					<Link to='/id'><img src={Img8} alt="id" className="image filter" /></Link>
				</div>
			</div>
			{/* Work on 4 more projects add one each week  */}
		</main>
	)
}

export default Studio;
