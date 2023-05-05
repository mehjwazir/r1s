import './Studio.css'
import { Link} from 'react-router-dom';
import Img1 from './files/IP.png'



function Studio() {

	return (
		
		<main className='studio'>
			<h1>The Studio</h1>
{/* test gallery images add actual projects with links */}
			<div className="gallery">
				<div className="row">
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
				</div>
				<div className="row">
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
					<Link to='/ip'><img src={Img1} alt="ip" className="image" /></Link>
				</div>
			</div>


			{/* <div className='studio-div'>
			
				<ul>
					<li>Brand Identity/ logo/ typeography/ instagram/packaging/photogrpahy</li>
					<li>Personal Projects</li>
					<li>Design/website design html css / react/squarespace</li>
					<li>Illustrations/printwork</li>
				</ul>
			</div> */}
		
		</main>
	)
}

export default Studio;