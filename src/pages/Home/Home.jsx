import './Home.css';
import Img from './files/front.png'



function Home() {
	return (
		<main className='home'>
			<div className='front'>
				<img src={Img}
					alt="front"
				   className='small-screen'/>
			</div>
		
		</main>

	)
}

export default Home;