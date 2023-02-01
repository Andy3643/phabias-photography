import SectionHeader from '../../components/SectionHead'
import BackgroundImage from '../../assets/wedding3.jpg'
import {weddingImages} from '../../data'
import './wedding.css'

const Wedding = () => {
  return (
    <>
    <section className='header-section-image'>
      <div className="container">
      <SectionHeader title='Wedding Photography' image={BackgroundImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dignissimos quia perspiciatis! Voluptate et illum repellendus beatae quia. Cupiditate, deserunt.
      </SectionHeader>
      </div>
    </section>
    <section className="images-portfolio">
      <div className="container">
        <div className='show-pics-portfolio'>
          {
            weddingImages.map(pic=>{
              return <div  className="portfolio-pic ">
              <img key={pic.id} src={pic.src} alt="" />
              </div>
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Wedding