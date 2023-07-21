import "./AR.css"
import Img1 from "./files/img1.png"
import Img2 from "./files/img2.png"
import Img3 from "./files/img3.png"
import Img4 from "./files/img4.png"
import Img5 from "./files/img5.png"
import Img6 from "./files/img6.png"
import Img8 from "./files/img8.png"


export default function AR() {
	return (
		<main className="ar-main">
			<div className="img1-ar-div">
				<img src={Img1} alt="" className="img1-ar" />
			</div>
			<div className="img2-ar-div">
				<img src={Img2} alt="" className="img2-ar" />
			</div>
			<div className="row row2">
				<div className="column co2 col2">
					<p>Aura is a personal experience application. It allows users to create and save personal experiences, from the restuarants you've dined at to the adventures you've been on.
						 </p>

				</div>
				<div>
					<img src={Img3} alt="img3" className="img3-ar" />
				</div>
			</div>
			<div>
				<img src={Img4} alt="img4" className="img4-ar" />
			</div>
			<div className="row row2">
				<img src={Img5} alt="img5" className="img5-ar" />
				<div className="column co2 col2">
				
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin it occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						<a href="https://aura.up.railway.app/">Aura</a>
					</p>
				</div>
			</div>
		
			<div>
				<img src={Img6} alt="img6" className="img6-ar"/>
			</div>
			<div>
				<img src={Img8} alt="img8" className="img8-ar" />
			</div>

		</main>
	)
}