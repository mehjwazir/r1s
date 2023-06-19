import "./AR.css"
import Img1 from "./files/img1.png"
import Img2 from "./files/img2.png"


export default function AR() {
	return (
		<main className="ar-main">
			<div className="img1-ar-div">
				<img src={Img1} alt="" className="img1-ar" />
			</div>
			<div className="img2-ar-div">
				<img src={Img2} alt="" className="img2-ar" />
			</div>
	

		</main>
	)
}