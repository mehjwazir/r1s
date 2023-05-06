import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1280);
		};

		window.addEventListener("resize", handleResize);

		// Call handleResize initially to set the initial value
		handleResize();

		// Clean up event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsSidebarOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		// Clean up event listener on unmount
		return () => document.removeEventListener("click", handleClickOutside);
	}, [navRef]);

	const handleSidebarToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<header>
			<nav ref={navRef}>
				<ul
					className={`desktop-nav ${isMobile || isSidebarOpen ? "hidden" : ""}`}
				>
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
				{isMobile && (

					<div className="hamburger-menu" onClick={handleSidebarToggle} aria-label="Toggle navigation menu">
				<div className="hamburger-line"></div>
				<div className="hamburger-line"></div>
				<div className="hamburger-line"></div>
			</div>
				
				)}
				{isSidebarOpen && <SideBar />}
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