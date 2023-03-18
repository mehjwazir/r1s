import './NavBar.css'
import { Link } from 'react-router-dom';





const NavBar = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/shop">shop</Link>
					</li>
					<li>
						<Link to="/about">about</Link>
					</li>
					<li>
						<Link to="/services">services</Link>
					</li>
					<li>
						<Link to="/portfolio">portfolio</Link>
					</li>
					<li>
						<Link to="/contact">contact</Link>
					</li>
				</ul>
			</nav>
			<div className="logo-div">
				<Link to="/" className="logo">
					<h1 className="logo">r1s</h1>
				</Link>
			</div>
		</header>
	);
};

	
	


export default NavBar;