import './Studio.css'
import { Link } from 'react-router-dom';
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
				<Link to='/type' className="image-container">
					<img src={Img1} alt="type" className="image filter" />
					<p className="image-description">Description for Image 1</p>
				</Link>
				<Link to='/r1s' className="image-container">
					<img src={Img2} alt="r1s" className="image filter" />
					<p className="image-description">Description for Image 2</p>
				</Link>
				<Link to='/cr' className="image-container">
					<img src={Img3} alt="cr" className="image filter" />
					<p className="image-description">Description for Image 3</p>
				</Link>
				<Link to='/hf' className="image-container">
					<img src={Img4} alt="hf" className="image filter" />
					<p className="image-description">Description for Image 4</p>
				</Link>
				<Link to='/hasu' className="image-container">
					<img src={Img5} alt="hasu" className="image filter" />
					<p className="image-description">Description for Image 5</p>
				</Link>
				<Link to='/ip' className="image-container">
					<img src={Img6} alt="ip" className="image filter" />
					<p className="image-description">Description for Image 6</p>
				</Link>
				<Link to='/aura' className="image-container">
					<img src={Img7} alt="aura" className="image filter" />
					<p className="image-description">Description for Image 7</p>
				</Link>
				<Link to='/id' className="image-container ">
					<img src={Img8} alt="id" className="image filter" />
					<p className="image-description">Description for Image 8</p>
				</Link>
			</div>
		</main>
	)
}

export default Studio;
