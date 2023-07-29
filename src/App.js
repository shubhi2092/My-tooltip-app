import React, { useState, useRef, useEffect } from 'react';
import Tooltip from './Tooltip.js'
import './App.css';
import styles from'./mobilescreen.css'


const ButtonWithTooltip = ({ text, position, style}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const storedPosition = localStorage.getItem(`tooltip-position-${text}`);
    setIsTooltipVisible(storedPosition === position);
  }, [position, text]);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
    localStorage.setItem(`tooltip-position-${text}`, position);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      ref={buttonRef}
    >
      {text}
      <Tooltip
        text={text}
        position={position}
        isVisible={isTooltipVisible}
        targetRef={buttonRef}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Tooltip text="Tooltip text content" />
      <div>
      <h1>Tooltip Demo</h1>
      <div className="mobileScreen">
        <ButtonWithTooltip text="Button 1" position="top" style={{ marginBottom: 10 }} />
      
        <ButtonWithTooltip text="Button 2" position="right" style={{ marginBottom: 10 }} />
      
        <ButtonWithTooltip text="Button 3" position="bottom" style={{ marginBottom: 10 }} />
      
        <ButtonWithTooltip  text="Button 4" position="left" style={{ marginBottom: 10 }}
       
        />
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
