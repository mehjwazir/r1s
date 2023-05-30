import './Studio.css'
import { Link} from 'react-router-dom';
import Img1 from './files/IP.png'
import Img8 from './files/ID.png'
import Img7 from './files/Aura.png'



function Studio() {

	return (
		
		<main className='studio'>
			<div className="gallery">
				<div>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
				</div>
				<div>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ar'><img src={Img7} alt="ar" className="image" /></Link>
					<Link to='/id'><img src={Img8} alt="id" className="image" /></Link>
				</div>
			</div>
		</main>
	)
}

export default Studio;