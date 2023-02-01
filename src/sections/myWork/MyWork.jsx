import image1 from '../../assets/totogirl.jpg'
import image2 from '../../assets/fashion-model.jpg'
import image3 from '../../assets/woman.jpg'
import image4 from '../../assets/wedding2 .jpg'
import image5 from '../../assets/wedding3.jpg'
import image6 from '../../assets/wedding2 .jpg'



import './myWork.css'

const MyWork = () => {
  return (
    <section id='myWork'>
        <div className="container">
            <div className="top-my-work">
                <h2>My Work</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, pariatur.</p>
            </div>
            <div className="bottom-my-work">
                <div className="portfolio-img"> 
                    <div className="display-pics">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                    </div>
                    <div className='portfolio-description'>
                        <h4 >Portrait Photography</h4>
                        <a href="" className='btn primary'>View Portfolio</a>
                    </div>
                    
                </div>
                <div className="portfolio-img">
                    <div className="display-pics">
                        <img src={image4} alt="" />
                        <img src={image5} alt="" />
                        <img src={image6} alt="" />
                    </div>
                    <div className='portfolio-description'>
                        <h4 >Wedding Photography</h4>
                        <a href="" className='btn primary'>View Portfolio</a>
                    </div>
                    
                </div>
            </div>

        </div>

    </section>
  )
}

export default MyWork