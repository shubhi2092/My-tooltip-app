import React from 'react'
import './Tooltipmodule.css'
const Tooltip = ({text}) => {
    return(
        <div style={{
            textAlign:'center',
            margin:'10%'
        }}>
            <div class="custom-tooltip">Hover to see tooltip
                <span class="custom-tooltip-text">{text}</span>
            </div>
            <span style={{
                display:'block',
                marginTop:20,
                color:'blue'            
            }}>https://reactcodes.blogspot.com/</span>
        </div>
    )
}

export default Tooltip
