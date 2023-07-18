import './Studio.css'
import { Link} from 'react-router-dom';
import Img1 from './files/IP.png'
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
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/hf'><img src={Img4} alt="hf" className="image" /></Link>
				</div>
				<div>
					<Link to='/hasu'><img src={Img5} alt="hasu" className="image" /></Link>
					<Link to='/ip'><img src={Img6} alt="ip" className="image" /></Link>
					<Link to='/aura'><img src={Img7} alt="ar" className="image" /></Link>
					<Link to='/id'><img src={Img8} alt="id" className="image" /></Link>
				</div>
			</div>
		</main>
	)
}

export default Studio;