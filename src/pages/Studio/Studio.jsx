import './Studio.css'
import { Link} from 'react-router-dom';
import Img1 from './files/Type.png'
import Img2 from './files/R1S.png'
import Img3 from './files/CR.jpg'
import Img4 from './files/HF.png'
import Img5 from './files/HASU.png'
import Img6 from './files/IPP.png'
import Img7 from './files/Aura.png'
import Img8 from './files/ID.png'




function Studio() {

	return (
		
		<main className='studio'>
			<div className="gallery">
				<div>
					{/* Add description to photos and fix the two that need to be color. */}
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
		</main>
	)
}

export default Studio;