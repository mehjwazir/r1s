import './IP.css'
import Img from './files/iphone1-ip.png'



function IP() {

	return (
		<main className='ip'>
			<h1>IP</h1>
			<div>
				<img src={Img} alt=""  className='iphone1ip-img'/>
			</div>
		</main>
	)
}

export default IP;