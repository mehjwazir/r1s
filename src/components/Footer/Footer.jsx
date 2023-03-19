import './Footer.css'
import { Link } from 'react-router-dom';




const Footer = () => {

	return (
		<footer>
			<hr />
			<div>
				<ul className='footer-ul'>
					<li>
						<Link to="/concierge">Concierge</Link>

					</li>
					<li>Instagram</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer;

















