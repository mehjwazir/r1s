import './NavBar.css'
import { Link } from 'react-router-dom';





const NavBar = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">home</Link>
					</li>
					{/* <li>
						<Link to="/shop">shop</Link>
					</li> */}
					<li>
						<Link to="/about">about</Link>
					</li>
					<li>
						<Link to="/studio"> the studio</Link>
					</li>
					<li>
						<Link to="/inquire">inquire</Link>
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



// Mobile menu test code 
// import './NavBar.css'
// import { Link } from 'react-router-dom';
// import { useState } from 'react'





// const NavBar = () => {

// 	const [show, setShow] = useState(false)

// 	function showSwitch() {
// 		return setShow(!show)
// 	}



// 	return (
// 		<header>
// 			<nav>
// 				<ul className={show ? 'nav-links active' : 'nav-links'}>
// 					<li>
// 						<Link onClick={() => showSwitch()} show={show} to="/">home</Link>
// 					</li>
// 					{/* <li>
// 						<Link to="/shop">shop</Link>
// 					</li> */}
// 					<li>
// 						<Link onClick={() => showSwitch()} show={show} to="/about">about</Link>
// 					</li>
// 					<li>
// 						<Link onClick={() => showSwitch()} show={show} to="/studio"> the studio</Link>
// 					</li>
// 					<li>
// 						<Link onClick={() => showSwitch()} show={show} to="/inquire">inquire</Link>
// 					</li>
// 					<div onClick={() => showSwitch()} className={show ? 'bars-button active' : 'bars-button '}>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</div>
// 				</ul>
// 			</nav>
// 			<div className="logo-div">
// 				<Link to="/" className="logo">
// 					<h1 className="logo">r1s</h1>
// 				</Link>
// 			</div>
// 		</header>
// 	);
// };





// export default NavBar;