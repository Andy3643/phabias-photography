import React from 'react'
import customerCare from '../../assets/customercare.png'
import CountUp from 'react-countup';
import './wifiStats.css'
import ProgressA from '../../components/UI/ProgressA';
const WifiStats = () => {

  return (
<>

    <section>
        <div className="container customer-service-container">
            <div className="heplcare-image">
                <img src={customerCare} alt="" />
            </div>
           
            <div className="statistics-description">
            <div className="statistics-js">
            <ProgressA/>
            <div className='support-desc'>
                    <h4>Customer support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus tempora reiciendis culpa?</p>
            </div>
            </div> <div className="statistics-js">
            <ProgressA/>
            <div className='support-desc'>
                    <h4>Internet reliability</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus tempora reiciendis culpa?</p>
            </div>
            </div> <div className="statistics-js">
            <ProgressA/>
                    <div className='support-desc'>
                            <h4>Internet speeds</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus tempora reiciendis culpa?</p>
                    </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WifiStats