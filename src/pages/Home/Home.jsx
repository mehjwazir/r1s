import './Home.css';
import Img from './files/front.png'



function Home() {
	return (
		<main className='home'>
			<div className='front'>
				<img src={Img}
					alt="front"
				   className='front1'/>
			</div>
		
		</main>

	)
}

export default Home;