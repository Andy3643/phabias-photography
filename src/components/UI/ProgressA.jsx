
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../../AnimatedProgressProvider";
import ChangingProgressProvider from "../../ChangingProgressProvider";

import './progress.css'

const ProgressA = () => {


  return (
    <div className='circular-bar'>
    <VisibilitySensor>
    {({ isVisible }) => {
      const percentage = isVisible ? 80 : 0;
      return (
        <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#E5673C",
          pathColor: "#E5673C",
          trailColor: "#FAF5EF"
        })}
      />
      );
    }}
  </VisibilitySensor> 
  </div>



        
    
   
  );
}

export default ProgressA