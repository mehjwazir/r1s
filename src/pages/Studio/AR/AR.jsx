import "./AR.css"
import Img1 from "./files/img1.png"
import Img2 from "./files/img2.png"
import Img3 from "./files/img3.png"


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
					<img src={Img3} alt="img3" className="img-3" />
				</div>
			</div>

		</main>
	)
}