import './homepage.css'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'
import { ReactComponent as Star } from './Star.svg'



const Homepage = () => {
  return (
    <div className='home_container'>
      <Header/>
      <main className='home__main'>
          <div className='main__left'>
            <h1>Discover amazing art around the <div className='main__world'>world</div></h1>
            <p>Browse a curated  selection of art around the world, including museum exhibitions, gallery openings, upcoming an many more</p>
            <div className='main__explore'>
            <p>Explore Arts</p>           
            </div>
            <div className='main__star'>
              <Star/>
            </div>
          </div>
          <div  className='main__right'>
            <div className='image__outer__bg'>
            <div className='image__inner__bg'>
              <img className='display__image' alt='img' src='images/image1.png'/>
              <img className='display__image' alt='img' src='images/image3.png'/>
              <img className='display__image' alt='img' src='images/image4.png'/>
              <img className='display__image' alt='img' src='images/image5.png'/>
              <img className='image__icon' alt='img'  src='images/frame12.png'/>
            </div>
            </div>
            
          </div>
      </main>

      <Search/>
      
    </div>
  )
}

export default Homepage