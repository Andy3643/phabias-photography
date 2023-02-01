import wifi from '../../assets/wifiheader.png'
import Card from '../../components/Card'
import packages from '../internet/data'
import './wifiHeader.css'

const WifiHeader = () => {
  return (
    <> 
        <section>
            <div className='container header__wifi-container'>
                <div className="right-wifi-header">
                    <h2>Hi wifi speeds</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus explicabo praesentium?</p>
                    <a href="https://wa.me/+254797950449"  className='btn primary' target="_blank">Contact Us</a>
                </div>
                <div className="left-wifi-header">
                    <img src={wifi} alt="" />
                </div>
            </div>
        </section>
        <section>
        <div className="container">
            <div className="top-internet">
                <h2>Internet Packages</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, voluptates quibusdam. Deleniti dolor nesciunt quo.</p>
            </div>
            <div className="internet-cards">
                {
                    packages.map(item=>{
                        return <Card key={item.id} className="service">
                            <div id={item.type}>
                            {item.icon} 
                            </div>
                        
                            <h4>{item.type}</h4>
                            <p>{item.price}</p>
                            <small>{item.desc}</small>
                        </Card>
                    })
                }

            </div>
        </div>
    </section>

    </>
  )
}

export default WifiHeader