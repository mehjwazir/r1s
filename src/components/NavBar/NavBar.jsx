import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const navRef = useRef(null);


	// this code determines the window size and adjusts the hamburger menu accordingly as well as closes it
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
			setIsSidebarOpen(false); // close sidebar on resize
		};

		window.addEventListener("resize", handleResize);

		// Call handleResize initially to set the initial value
		handleResize();

		// Clean up event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

// this code helps close the slider menu when clicked outside on any page
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsSidebarOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		// Clean up event listener on unmount
		return () => document.removeEventListener("click", handleClickOutside);
	}, [navRef], [isMobile]);


	const handleSidebarToggle = () => {
		setIsSidebarOpen((prevState) => !prevState);
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
					<div
						className="hamburger-menu"
						onClick={handleSidebarToggle}
						aria-label="Toggle navigation menu"
					>
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
