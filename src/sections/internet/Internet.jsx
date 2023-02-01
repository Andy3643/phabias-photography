import React from 'react'
import Card from '../../components/Card'
import packages from './data'
import {AiFillGolden} from 'react-icons/ai'
import './internet.css'
const Internet = () => {
  return (
    <section>
        <div className="container">
            <div className="top-internet">
                <h2>Internet Packages</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, voluptates quibusdam. Deleniti dolor nesciunt quo.</p>
            </div>
            <div className="internet-cards">
                {
                    packages.map(item=>{
                        return <Card key={item.id} className="service light">
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
  )
}

export default Internet