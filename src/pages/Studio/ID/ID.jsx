import "./ID.css"
import Img1 from "./files/img1.png"
import Img2 from "./files/img2.png"
import Img3 from "./files/img3.png"
import Img4 from "./files/img4.png"
import Img5 from "./files/img5.png"
import Img6 from "./files/img6.png"




function ID() {
	return (
		<main className="id-main">
		
			<div className="id-div">
				<img src={Img1} alt="id-img" className="id-img" />
			</div>
			
			<div className="img2-div">
					<img src={Img2} alt="img-2" className="img-2" />
			</div>
			
			<div className="row row2">
				<div className="column co2 col2">
					<p>
						ID is a captivating web application designed to empower users to curate and preserve their cherished images effortlessly. With ID, users can select their preferred interior style, complementing their images with captivating titles. Additionally, the application fosters an engaging community by enabling users to share their thoughts and receive valuable feedback through comments. For users on the go, ID offers a seamlessly integrated mobile version, complete with a sleek slider menu. Seamlessly blending functionality and creativity, ID aims to serve as a boundless source of inspiration and ideas, empowering users to build a distinctive archive of images that truly captures their unique vision. </p>

				</div>
				<div>
					<img src={Img3} alt="img3" className="img-3" />
				</div>
			</div>

			<div>
				<img src={Img4} alt="img4" />
			</div>

			<div className="row">
				<div>
				<img src={Img5} alt="img5" className="img-5" />
				</div>
				<div className="column img5-div">
					<p>
						<a href="https://interior-design.up.railway.app/" className="id-site" target="blank">Interior Design</a> <br />
						2021 <br />
						<br />

						Visual Identity <br />
						Web Design <br />
						Web Development <br />
						Mobile Design <br />
						Logo <br />
						
				</p>
				</div>
			</div>
			<div>
				<img src={Img6} alt="img6" className="img-6" />
		</div>

		
		</main>
	)
}

export default ID;